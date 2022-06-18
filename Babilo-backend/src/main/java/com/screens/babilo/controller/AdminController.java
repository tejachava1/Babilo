package com.screens.babilo.controller;

import com.screens.babilo.dataentity.Admin;
import com.screens.babilo.serviceImpl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminServiceImpl adminService;

    @PostMapping("/adminReg")
    public ResponseEntity<HttpStatus> adminRegistration(@RequestBody Admin admin){
            adminService.addAdmin(admin);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
