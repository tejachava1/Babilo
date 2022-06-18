package com.screens.babilo.controller;

import com.screens.babilo.dao.TheaterDao;
import com.screens.babilo.dataentity.Schedule;
import com.screens.babilo.dataentity.Theater;
import com.screens.babilo.serviceImpl.TheaterServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/theater")
public class TheaterController {

    @Autowired
    private TheaterServiceImpl theaterService;

    @PostMapping("/theaterReg")
    public ResponseEntity<HttpStatus> theaterRegistration(@RequestBody Theater theater){
        theaterService.addTheater(theater);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/theatersInfo")
    public ResponseEntity<List<Theater>> theatersList() throws Exception {
        try{
            List<Theater> theaters = theaterService.getTheaaters();
            return new ResponseEntity<>(theaters,HttpStatus.OK);
        }catch (Exception e){
            throw new Exception(e.getLocalizedMessage());
        }
    }

    @PutMapping("/theaterUpdate")
    public ResponseEntity<HttpStatus> scheduleUpdate(@RequestBody Theater theater) throws Exception {
        try {
            theaterService.updateTheater(theater);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            throw new Exception(e.getLocalizedMessage());
        }
    }
}
