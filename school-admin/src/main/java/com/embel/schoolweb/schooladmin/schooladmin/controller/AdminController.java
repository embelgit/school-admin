package com.embel.schoolweb.schooladmin.schooladmin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.embel.schoolweb.schooladmin.schooladmin.entity.AdminEntity;
import com.embel.schoolweb.schooladmin.schooladmin.entity.UserEntity;
import com.embel.schoolweb.schooladmin.schooladmin.service.AdminService;
import com.embel.schoolweb.schooladmin.schooladmin.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import antlr.collections.List;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService repoAdminService;
	
	@Autowired
	private UserService repoUserService;
	
	  @GetMapping("/") 
	  public ModelAndView openAdmin()
	  {
		  //System.out.println("CALLED"); 
		  return new ModelAndView("index");
	  }
	  @GetMapping("/userpage") 
	  public ModelAndView openUser()
	  {
		 // System.out.println("CALLED"); 
		  return new ModelAndView("user");
	  }
	 
	  @RequestMapping(value = "/addstudadmin", method=RequestMethod.POST, headers = "Accept=*/*", consumes = "application/json")
	  public AdminEntity addAdmin(@RequestBody AdminEntity studadmin) throws JsonMappingException, JsonProcessingException  
	  {		  
		  System.out.println("studadmin"+studadmin);
		  //ObjectMapper mapper = new ObjectMapper();
		  //AdminEntity ae=mapper.readValue(Jsonobj, AdminEntity.class);
		  //return mapper.writeValueAsString(ue);
		  //System.out.println("studuser"+ae);
		  AdminEntity stud = null;
		  stud = repoAdminService.addStudAdmin(studadmin);
		  return stud;
	  }
	  
	  @RequestMapping(value = "/addstuduser", method=RequestMethod.POST, headers = "Accept=*/*", consumes = "application/json")
	  public UserEntity addUser(@RequestBody UserEntity studuser) throws JsonMappingException, JsonProcessingException 
	  {		
		  System.out.println("studuser"+studuser);
		  //ObjectMapper mapper = new ObjectMapper();
		  //UserEntity ue=mapper.readValue(Jsonobj, UserEntity.class);
		  
		  //return mapper.writeValueAsString(ue);
		  //System.out.println("studuser"+ue);
		  UserEntity studU = null;
		  studU = repoUserService.addStudUser(studuser);
		 return studU;
	  }
	

}
