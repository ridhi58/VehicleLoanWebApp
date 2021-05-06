package com.lti.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "ACCOUNT")
public class Account implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ACCOUNT_NUMBER")
	private long acc_no;

	public long getAcc_no() {
		return acc_no;
	}

	public void setAcc_no(long acc_no) {
		this.acc_no = acc_no;
	}

	// User Advanced Mapping
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "USER_DETAILS_ID")
	@JsonProperty(access = Access.WRITE_ONLY)
	private UserAdvanced user;

	// Approved Loan Table Mapping
	@OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Approved> loans;

	// CONSTRUCTORS
	public Account() {
	}

	public Account(long acc_no) {
		super();
		this.acc_no = acc_no;
	}

	// GETTERS AND SETTERS
	public UserAdvanced getUser() {
		return user;
	}

	public void setUser(UserAdvanced user) {
		this.user = user;
	}

	public Set<Approved> getLoans() {
		return loans;
	}

	public void setLoans(Set<Approved> loans) {
		this.loans = loans;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "Account [acc_no=" + acc_no + ", user=" + user + "]";
	}

}
