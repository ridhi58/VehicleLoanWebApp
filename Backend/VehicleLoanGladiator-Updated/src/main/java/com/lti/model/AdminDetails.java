package com.lti.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN_REGISTRATION")
public class AdminDetails implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ADMIN_EMAIL")
	private String email;

	@Column(name = "ADMIN_FULL_NAME")
	private String name;

	@Column(name = "ADMIN_PASSWORD")
	private String password;

	// CONSTRUCTORS
	public AdminDetails() {
	}

	public AdminDetails(String email, String name, String password) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	// TO-STRING
	@Override
	public String toString() {
		return "AdminDetails [email=" + email + ", name=" + name + ", password=" + password + "]";
	}
}
