package com.lti.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class MailServiceImpl {
	
	public boolean mailValidate(String to)
	{
		boolean isValid = false;
		try {
			InternetAddress in = new InternetAddress(to);
			in.validate();
			isValid = true;
		}
		catch(AddressException e)
		{}
		return isValid;
	}
	
	public void send(String to, String sub, String msg) {
		
		//PROPERTIES
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		// SESSION
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("wheels4hope.lti@gmail.com", "Wheels4Hope@lti");
			}
		});

		// MESSAGE
		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom("wheels4hope.lti@gmail.com");
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);
			message.setContent(msg, "text/html");
			// send message
			Transport.send(message);
			if (sub == "REGISTRATION SUCCESSFULL") {
				System.out.println("Registration Email Successfully sent to " + to);
			} else {
				System.out.println("One Time Password is sent successfully to " + to);
			}
		} 
		catch (MessagingException e) {
		}
	}
}
