package com.lti.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "USER_DETAILS")
public class UserAdvanced implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "USER_DETAILS_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;

	@Column(name = "USER_ADDRESS")
	private String address;

	@Column(name = "USER_STATE")
	private String state;

	@Column(name = "USER_CITY")
	private String city;

	@Column(name = "USER_PIN_CODE")
	private String pin;

	@Column(name = "USER_EMPLOYMENT_TYPE")
	private String emptype;

	@Column(name = "USER_SALARY")
	private double salary;

	@Column(name = "USER_AADHAR_URL")
	private String aadhar;

	@Column(name = "USER_PAN_URL")
	private String pan;

	@Column(name = "USER_SALARYSLIP_URL")
	private String salarySlip;

	@Column(name = "USER_ADDRESSPROOF_URL")
	private String addressProof;

	// User Basic Mapping
	@OneToOne(mappedBy = "userdetails", fetch = FetchType.LAZY)
	private UserBasic userregister;

	// Loan Application Mapping
	@OneToMany(mappedBy = "user")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<LoanAppTable> loanapp;

	// Account Mapping
	@OneToOne(mappedBy = "user")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Account account;

	public void addLoan(LoanAppTable l) {
		loanapp.add(l);
	}

	// CONSTRUCTORs
	public UserAdvanced() {
	}

	public UserAdvanced(String address, String state, String city, String pin, String emptype, double salary,
			String aadhar, String pan, String addressProof, String salarySlip) {
		super();
		this.address = address;
		this.state = state;
		this.city = city;
		this.pin = pin;
		this.emptype = emptype;
		this.salary = salary;
		this.aadhar = aadhar;
		this.pan = pan;
		this.addressProof = addressProof;
		this.salarySlip = salarySlip;
	}

	// GETTERS AND SETTERS
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getEmptype() {
		return emptype;
	}

	public void setEmptype(String emptype) {
		this.emptype = emptype;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public String getPan() {
		return pan;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getAddressProof() {
		return addressProof;
	}

	public void setAddressProof(String addressProof) {
		this.addressProof = addressProof;
	}

	public String getSalarySlip() {
		return salarySlip;
	}

	public void setSalarySlip(String salarySlip) {
		this.salarySlip = salarySlip;
	}

	public Set<LoanAppTable> getLoanapp() {
		return loanapp;
	}

	public void setLoanapp(Set<LoanAppTable> loanapp) {
		this.loanapp = loanapp;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "UserAdvanced [userId=" + userId + ", address=" + address + ", state=" + state + ", city=" + city
				+ ", pin=" + pin + ", emptype=" + emptype + ", salary=" + salary + ", aadhar=" + aadhar + ", pan=" + pan
				+ ", addressProof=" + addressProof + ", salarySlip=" + salarySlip + "]";
	}

}
