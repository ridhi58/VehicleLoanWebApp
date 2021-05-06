package com.lti.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "APPROVED_LOANS")
public class Approved implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "APPROVED_LOAN_ID")
	private int loanId;

	@Column(name = "EMI_AMOUNT")
	private double emi;

	@Column(name = "EMI_STARTING_DATE")
	@Temporal(TemporalType.DATE)
	private Date emidate;

	// MAPPING
	// Account Mapping
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ACCOUNT_NUMBER")
	@JsonIgnoreProperties(allowGetters = true)
	private Account account;
	
	// Loan Application Mapping
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "CHASSIS_NUMBER")
	@JsonProperty(access = Access.WRITE_ONLY)
	private LoanAppTable loanapp;

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	// CONSTRUCTORS
	public Approved() {
	}

	public Approved(double emi, Date emidate) {
		super();
		this.emi = emi;
		this.emidate = emidate;
	}

	// GETTERS AND SETTERS
	public double getEmi() {
		return emi;
	}

	public void setEmi(double emi) {
		this.emi = emi;
	}

	public Date getEmidate() {
		return emidate;
	}

	public void setEmidate(Date emidate) {
		this.emidate = emidate;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public LoanAppTable getLoanapp() {
		return loanapp;
	}

	public void setLoanapp(LoanAppTable loanapp) {
		this.loanapp = loanapp;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "Approved [loanId=" + loanId + ", emi=" + emi + ", emidate=" + emidate + "]";
	}

}
