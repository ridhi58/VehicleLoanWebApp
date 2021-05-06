package com.lti.dto;

public class UserRegisterDto {
private String email;
private String name;
private String gender;
private String mobile;
private int age;

public UserRegisterDto() {}
public UserRegisterDto(String email, String name, String gender, String mobile, int age) {
	super();
	this.email = email;
	this.name = name;
	this.gender = gender;
	this.mobile = mobile;
	this.age = age;
}
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
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}


}
