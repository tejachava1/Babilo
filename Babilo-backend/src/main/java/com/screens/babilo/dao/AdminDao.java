package com.screens.babilo.dao;

import com.screens.babilo.dataentity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminDao extends JpaRepository<Admin, Integer> {

    public Admin findByName(String name);

    Optional<Admin> findByEmailId(String emailId);
}
