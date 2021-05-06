package com.lti.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


@Entity
@Table(name = "LOAN_APPLICATION")
public class LoanAppTable implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "CHASSIS_NUMBER")
	private String chassisNo;

	@Column(name = "USER_EXISTING_EMI")
	private double existingEMI;

	@Column(name = "LOAN_TENURE")
	private int tenure;

	@Column(name = "LOAN_INTEREST")
	private double interest;

	@Column(name = "LOAN_AMOUNT")
	private double amount;

	@Column(name = "LOAN_APPLICATION_DATE")
	@Temporal(TemporalType.DATE)
	private Date appdate=new Date();

	@Column(name = "LOAN_APPLICATION_STATUS")
	private String status="PENDING";

	@Column(name = "VEHICLE_BRAND")
	private String brand;

	@Column(name = "VEHICLE_COLOUR")
	private String colour;

	@Column(name = "VEHICLE_MODEL")
	private String model;

	@Column(name = "VEHICLE_TYPE")
	private int type;

	@Column(name = "VEHICLE_EXSHOWROOM_PRICE")
	private double exShowPrice;

	@Column(name = "VEHICLE_ONROAD_PRICE")
	private double onRoadPrice;

	// User Advanced Mapping
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "USER_DETAILS_ID")
	private UserAdvanced user;

	// Approved Loan Mapping
	@OneToOne(mappedBy = "loanapp", cascade = CascadeType.PERSIST)
	private Approved approved;

	// CONSTRUCTORS
	public LoanAppTable() {
	}

	public LoanAppTable(String chassisNo, double existingEMI, int tenure, double interest, double amount, String brand, String colour, String model, int type, double exShowPrice,
			double onRoadPrice) {
		super();
		this.chassisNo = chassisNo;
		this.existingEMI = existingEMI;
		this.tenure = tenure;
		this.interest = interest;
		this.amount = amount;
		this.brand = brand;
		this.colour = colour;
		this.model = model;
		this.type = type;
		this.exShowPrice = exShowPrice;
		this.onRoadPrice = onRoadPrice;
	}

	// GETTERS AND SETTERS
	public int getTenure() {
		return tenure;
	}

	public void setTenure(int tenure) {
		this.tenure = tenure;
	}

	public double getInterest() {
		return interest;
	}

	public void setInterest(double interest) {
		this.interest = interest;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getAppdate() {
		return appdate;
	}

	public void setAppdate() {
		this.appdate = new Date();
	}

	public UserAdvanced getUser() {
		return user;
	}

	public Approved getApproved() {
		return approved;
	}

	public void setApproved(Approved approved) {
		this.approved = approved;
	}

	public void setUser(UserAdvanced user) {
		this.user = user;
	}

	public String getChassisNo() {
		return chassisNo;
	}

	public void setChassisNo(String chassisNo) {
		this.chassisNo = chassisNo;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColour() {
		return colour;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public double getExistingEMI() {
		return existingEMI;
	}

	public void setExistingEMI(double existingEMI) {
		this.existingEMI = existingEMI;
	}

	public double getExShowPrice() {
		return exShowPrice;
	}

	public void setExShowPrice(double exShowPrice) {
		this.exShowPrice = exShowPrice;
	}

	public double getOnRoadPrice() {
		return onRoadPrice;
	}

	public void setOnRoadPrice(double onRoadPrice) {
		this.onRoadPrice = onRoadPrice;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "LoanAppTable [chassisNo=" + chassisNo + ", existingEMI=" + existingEMI + ", tenure=" + tenure
				+ ", interest=" + interest + ", amount=" + amount + ", appdate=" + appdate + ", status=" + status
				+ ", brand=" + brand + ", colour=" + colour + ", model=" + model + ", type=" + type + ", exShowPrice="
				+ exShowPrice + ", onRoadPrice=" + onRoadPrice + "]";
	}

}
