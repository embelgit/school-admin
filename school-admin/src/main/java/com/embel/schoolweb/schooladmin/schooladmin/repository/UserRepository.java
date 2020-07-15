package com.embel.schoolweb.schooladmin.schooladmin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.embel.schoolweb.schooladmin.schooladmin.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
