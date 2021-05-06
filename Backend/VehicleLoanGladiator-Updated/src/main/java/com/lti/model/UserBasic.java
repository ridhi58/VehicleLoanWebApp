package com.lti.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "USER_REGISTRATION")
public class UserBasic implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "USER_EMAIL")
	private String email;

	@Column(name = "USER_FULL_NAME")
	private String name;

	@Column(name = "USER_GENDER")
	private String gender;

	@Column(name = "USER_PHONE_NUMBER")
	private String mobile;

	@Column(name = "USER_AGE")
	private int age;

	@Column(name = "USER_PASSWORD")
	private String password;

	// User Advanced Mapping
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "USER_DETAILS_ID")
	@JsonIgnoreProperties(allowGetters = true)
	private UserAdvanced userdetails;

	// CONSTRUCTORS
	public UserBasic() {
	}

	public UserBasic(String email, String name, String gender, String mobile, String password, int age) {
		super();
		this.email = email;
		this.name = name;
		this.gender = gender;
		this.mobile = mobile;
		this.password = password;
		this.age = age;
	}

	// GETTERS AND SETTERS
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public UserAdvanced getUserdetails() {
		return userdetails;
	}

	public void setUserdetails(UserAdvanced userdetails) {
		this.userdetails = userdetails;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "UserBasic [email=" + email + ", name=" + name + ", gender=" + gender + ", mobile=" + mobile
				+ ", password=" + password + ", age=" + age + "]";
	}

}
