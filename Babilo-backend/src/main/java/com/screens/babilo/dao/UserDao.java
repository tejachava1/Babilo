package com.screens.babilo.dao;

import com.screens.babilo.dataentity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User,Integer> {


    public Optional<User> findByEmailId(String emailId);
}
