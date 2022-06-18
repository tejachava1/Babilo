package com.screens.babilo.serviceImpl;

import com.screens.babilo.dao.ScheduleDao;
import com.screens.babilo.dataentity.Schedule;
import com.screens.babilo.service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Date;
import java.util.List;
@Service
public class SchedulerServiceImpl implements SchedulerService {

    @Autowired
    private ScheduleDao scheduleDao;


    @Override
    public void addSchedule(Schedule schedule) {
        scheduleDao.saveAndFlush(schedule);
    }

    @Override
    public List<Schedule> getSchedules() {

        List<Schedule> scheduleList = scheduleDao.getScheduleInfo();
        for (Schedule sc: scheduleList
             ) {
            System.out.println(sc.toString());
        }
        return scheduleList;
    }

    @Override
    public void updateSchedule(Schedule schedule) {
        Integer scheduleId = schedule.getScheduleId();
        Integer movieId = schedule.getMovieId();
        Integer theaterId = schedule.getTheaterId();
        String time = schedule.getTime();
        Date date = schedule.getDate();
        Integer seatAvailable = schedule.getSeatAvailable();
        scheduleDao.updateScheduleInfo(scheduleId,movieId,theaterId,time,date,seatAvailable);
    }
}
