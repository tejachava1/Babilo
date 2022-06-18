package com.screens.babilo.serviceImpl;

import com.screens.babilo.dao.AdminDao;
import com.screens.babilo.dataentity.Admin;
import com.screens.babilo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

@Service
public class AdminServiceImpl implements AdminService {
    
    @Autowired
    private AdminDao adminDao;

    @Override
    public void addAdmin(@NotNull Admin admin) {
       if (adminDao.findByEmailId(admin.getEmailId()).isPresent()) throw new RuntimeException("Error at addAdmin:EmailId already Exist");
       else adminDao.saveAndFlush(admin);
    }
}
