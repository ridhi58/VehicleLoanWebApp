package com.lti.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.VehicleDao;
import com.lti.dto.LoginDto;
import com.lti.model.Account;
import com.lti.model.AdminDetails;
import com.lti.model.Approved;
import com.lti.model.EmiClass;
import com.lti.model.LoanAppTable;
import com.lti.model.UserAdvanced;
import com.lti.model.UserBasic;

@Service
public class VehicleServiceImpl implements VehicleService {
	
	@Autowired
	private VehicleDao dao = null;
	
	
	// ADMIN
	// REGISTER
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void adminRegisterService(AdminDetails admin) {
		dao.adminRegister(admin);
	}
	
	// ADMIN
	// MODIFY
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void modifyStatus(LoanAppTable loanapp) {
		dao.modifyLoanApplicationStatus(loanapp);
	}
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void AddApprovedDetails(Approved approved) {
		dao.ApprovedLoan(approved);
	}
	
	
	// ADMIN
	// VIEW
	@Override
	public AdminDetails geAdminRegistrationdetails(String email) {
		return dao.showAdminDetailsByEmail(email);
	}
	@Override
	public List<UserBasic> findAllUserRegistrationDetails() {
		return dao.showAllUserRegistrationDetails();
	}
	@Override
	public Account getAccountByEmailService(String email) {
		return dao.getAccountByEmail(email);
	}
	@Override
	public List<LoanAppTable> viewAllAcceptedLoanApplications() {
		return dao.showAllAcceptedLoanApplications();
	}
	@Override
	public List<LoanAppTable> viewAllRejectedLoanApplications() {
		return dao.showAllRejectedLoanApplications();
	}
	@Override
	public List<UserBasic> viewAllApprovedUsers() {
		return dao.showAllApprovedUsers();
	}
	@Override
	public List<UserBasic> viewAllRejectedUsers() {
		return dao.showAllRejectedUsers();
	}
	@Override
	public List<UserBasic> viewAllPendingUsers() {
		return dao.showAllPendingUsers();
	}
	
	
	
	// USER
	// REGISTER
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void UserRegisterService(UserBasic userbasic) {
		dao.userRegister(userbasic);
	}
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void applyVehicleLoan(LoanAppTable loanapp, UserBasic userbasic, UserAdvanced userdetails) {
		userbasic.setUserdetails(userdetails);
		loanapp.setUser(userdetails);
		dao.ApplyLoan(loanapp);	
	}

	
	// USER
	// MODIFY
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void resetPasswordService(UserBasic userbasic) {
		dao.passwordReset(userbasic);
	}
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void modifyUserDetails(UserAdvanced user) {
			dao.editUserDetails(user);
	}
	
	// USER
	// VIEW
	@Override
	public UserBasic getUserRegistrationdetails(String email) {
		return dao.showUserRegistrationInformation(email);
	}
	@Override
	public UserAdvanced getUserDetailsService(String email) {
		return dao.showUserDetailsInformation(email);
	}
	@Override
	public List<LoanAppTable> getAllLoanApplication(String email) {
		return dao.showAllLoanApplication(email);
	}
	@Override
	public LoanAppTable getLoanApplicationByChassis(String chassisNo) {
		return dao.showLoanApplicationByChassis(chassisNo);
	}
	@Override
	public List<Approved> viewAllApprovedByEmail(String email) {
		return dao.showAllApprovedByEmail(email);
	}
	@Override
	public Approved viewApprovedByLoanId(int loanId) {
		return dao.showApprovedByLoanId(loanId);
	}
	@Override
	public List<LoanAppTable> getAllRejectedByEmail(String email) {
		return dao.showAllRejectedByEmail(email);
	}
	
	
	// USER-LOGIN
	@Override
	public boolean verifyUserLogin(LoginDto login) {
		
		try {
			UserBasic reg = dao.showUserRegistrationInformation(login.getEmail());
			if (reg.getPassword().equals(login.getPassword())) {
				return true;
			}
			
		}
		catch(Exception e) {
			return false;
		}
		return false;	
	}
	
	// ADMIN-LOGIN
	@Override
	public boolean verifyAdminLogin(LoginDto login) {
		
		try {
			AdminDetails reg = dao.showAdminDetailsByEmail(login.getEmail());
			if (reg.getPassword().equals(login.getPassword())) {
				return true;
			}
			
		}
		catch(Exception e) {
			return false;
		}
		return false;	
	}


	
	// OTP SERVICE
	// FORGOT PASSWORD
	@Override
	public String generateOTP()
	{
		int randomPin = (int) (Math.random()*900000)+100000; 
        String otp  = String.valueOf(randomPin); 
        return otp;
	}

	
	// EMI CALCULATION
	@Override
	public double EMICalculate(double loanAmount, int termInYears, double interestRate) {
		interestRate /= 100.0;
		double monthlyRate = interestRate / 12.0;
		int termInMonths = termInYears * 12;
		double monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));
		return BigDecimal.valueOf(monthlyPayment).setScale(2, RoundingMode.HALF_UP).doubleValue();
	}
	
	
	@Override
	// EMI LIST 
	public List<EmiClass> calculateEmi(double loanAmount, int termInYears, double interestRate,Date appdate)
	{
		double monthlyPayment = EMICalculate(loanAmount, termInYears, interestRate);
		DecimalFormat d = new DecimalFormat("#");
		
		List<EmiClass> emi = new ArrayList<>();
		LocalDate approvedDate = Instant.ofEpochMilli(appdate.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
	      int paymentNo = 1;
	      String status="PENDING";
	      double beginningbalance = loanAmount;
	      while(paymentNo<=termInYears*12)
	      {
	    	  if(LocalDate.now().compareTo(approvedDate.plusMonths(paymentNo))>=0)
	    		  status = "PAID";
	    	  else
	    		  status="PENDING";
	    	  
	    	  double interest = beginningbalance*interestRate/1200;
	    	  double principal = monthlyPayment-interest;
	    	  double endingbalance = beginningbalance - principal;
	    	  EmiClass e = new EmiClass(approvedDate.plusMonths(paymentNo),d.format(beginningbalance),d.format(monthlyPayment),d.format(principal),d.format(interest),d.format(Math.abs(endingbalance)),status);
	    	  emi.add(e);
	    	  paymentNo++;
	    	  beginningbalance = endingbalance;
	      }
		return emi;
	}


}
