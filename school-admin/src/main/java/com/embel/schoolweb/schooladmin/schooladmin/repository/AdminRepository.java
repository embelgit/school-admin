package com.embel.schoolweb.schooladmin.schooladmin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.embel.schoolweb.schooladmin.schooladmin.entity.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Long> {

}
