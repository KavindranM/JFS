package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;

@RestController
	@CrossOrigin(origins="*")
@RequestMapping("/api/v1/user")
public class AdminController {

	
	
	
	@Autowired
	AdminService service;
	@GetMapping("/get")
	public List <Admin> getALL(){
		return service.getDetails();
	}

	@GetMapping("/get/{id}")
	public Optional<Admin> getById(@PathVariable Long id){
		return service.getStud(id);
	}
	@PostMapping("/post")
	public Admin create(@RequestBody Admin u) {
		return service.saveDetails(u);
	}
	@PutMapping("/edit/{id}")
	public String update(@RequestBody Admin u){
		return service.updateDetails(u);
	}
	@DeleteMapping("/del")
	public String delete(@RequestParam Long id) {
		return service.deleteDetails(id);
	} 
	

}
