package com.screens.babilo.service;

import com.screens.babilo.dataentity.User;

public interface UserService {

    public void addUser(User user);

    void checkLogin(String emailId, String password);
}
