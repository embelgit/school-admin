package com.embel.schoolweb.schooladmin.schooladmin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embel.schoolweb.schooladmin.schooladmin.entity.AdminEntity;
import com.embel.schoolweb.schooladmin.schooladmin.entity.UserEntity;
import com.embel.schoolweb.schooladmin.schooladmin.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public UserEntity addStudUser(UserEntity studuser)
    { 
    	System.out.println("Called Service User");
    	return userRepo.save(studuser);
    }

}
