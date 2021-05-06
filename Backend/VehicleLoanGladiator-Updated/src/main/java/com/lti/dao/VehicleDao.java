package com.lti.dao;

import java.util.List;

import com.lti.model.Account;
import com.lti.model.AdminDetails;
import com.lti.model.Approved;
import com.lti.model.LoanAppTable;
import com.lti.model.UserAdvanced;
import com.lti.model.UserBasic;

public interface VehicleDao {
	
	// ADMIN
	// REGISTER
	public void adminRegister(AdminDetails admin);
	
	// ADMIN
	// MODIFY
	public void modifyLoanApplicationStatus(LoanAppTable loanapp);
	public void ApprovedLoan(Approved approved);
	
	// ADMIN
	// VIEW
	public AdminDetails showAdminDetailsByEmail(String email);
	public List<UserBasic> showAllUserRegistrationDetails();
	public Account getAccountByEmail(String email);
	public List<LoanAppTable> showAllAcceptedLoanApplications();
	public List<LoanAppTable> showAllRejectedLoanApplications();
	public List<UserBasic> showAllApprovedUsers();
	public List<UserBasic> showAllRejectedUsers();
	public List<UserBasic> showAllPendingUsers();

	// USER
	// REGISTER
	public void userRegister(UserBasic userbasic);
	public void ApplyLoan(LoanAppTable loanapp);
	
	// USER
	// MODIFY
	public void passwordReset(UserBasic userbasic);
	public void editUserDetails(UserAdvanced user);
	
	
	// USER
	// VIEW
	public UserBasic showUserRegistrationInformation(String email);
	public UserAdvanced showUserDetailsInformation(String email);
	public List<LoanAppTable> showAllLoanApplication(String email);
	public LoanAppTable showLoanApplicationByChassis(String chassisNo);
	public List<Approved> showAllApprovedByEmail(String email);
	public List<LoanAppTable> showAllRejectedByEmail(String email);
	public Approved showApprovedByLoanId(int loanId);

}
