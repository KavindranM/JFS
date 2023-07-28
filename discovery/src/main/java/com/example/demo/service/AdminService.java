package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.AdminRepository;
import com.example.demo.entity.Admin;

@Service
public class AdminService {
	@Autowired
	 AdminRepository repo;
	public List<Admin> getDetails(){
		return repo.findAll();
	}
	public Admin saveDetails(Admin u) {
		return repo.save(u);
	}
		public Optional<Admin>getStud(Long id){
			return repo.findById(id);
		}
		public Optional<Admin>putStud(Long id){
			return repo.findById(id);
		}
		public String updateDetails(Admin u)
		{
			repo.save(u);
			return "updated";
		}
		public  String deleteDetails(Long id)
		{
			repo.deleteById(id);
			return "deleted";
		}
	

}





	

