package com.embel.schoolweb.schooladmin.schooladmin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embel.schoolweb.schooladmin.schooladmin.entity.AdminEntity;
import com.embel.schoolweb.schooladmin.schooladmin.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepo;
		
    public AdminEntity addStudAdmin(AdminEntity studadmin)
    { 
    	System.out.println("Called Service Admin");
    	return adminRepo.save(studadmin);
    }

}
