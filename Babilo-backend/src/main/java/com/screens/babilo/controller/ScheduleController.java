package com.screens.babilo.controller;

import com.screens.babilo.dataentity.Movie;
import com.screens.babilo.dataentity.Schedule;
import com.screens.babilo.serviceImpl.SchedulerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    @Autowired
    private SchedulerServiceImpl schedulerServiceImpl;

    @PostMapping("/scheduleReg")
    public ResponseEntity<HttpStatus> addSchedule(@RequestBody Schedule schedule) {
        schedulerServiceImpl.addSchedule(schedule);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/schedulerInfo")
    public ResponseEntity<List<Schedule>> scheduleList() throws Exception {
        try {
            List<Schedule> schedules = schedulerServiceImpl.getSchedules();
            return new ResponseEntity<>(schedules, HttpStatus.OK);
        } catch (Exception e) {
            throw new Exception(e.getLocalizedMessage());
        }
    }

    @PutMapping("/scheduleUpdate")
    public ResponseEntity<HttpStatus> scheduleUpdate(@RequestBody Schedule schedule) throws Exception {
        try {
            schedulerServiceImpl.updateSchedule(schedule);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            throw new Exception(e.getLocalizedMessage());
        }
    }
}
