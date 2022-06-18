package com.screens.babilo.serviceImpl;

import com.screens.babilo.dao.UserDao;
import com.screens.babilo.dataentity.User;
import com.screens.babilo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserDao userDao;

    @Override
    public void addUser(@NotNull User user) {
        if (userDao.findByEmailId(user.getEmailId()).isPresent()) throw new RuntimeException("Error at addUser:EmailId already Exist");
        else userDao.saveAndFlush(user);
    }

    @Override
    public void checkLogin(String emailId, String password) {

    }
}
