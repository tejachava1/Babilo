package com.screens.babilo.dao;

import com.screens.babilo.dataentity.Schedule;
import com.screens.babilo.util.BabiloQueries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.Date;
import java.util.List;

@Repository
public interface ScheduleDao extends JpaRepository<Schedule,Integer> {
    @Query(value = BabiloQueries.BABILO_SCHEDULE_INFO, nativeQuery = true)
    public List<Schedule> getScheduleInfo();
    @Transactional
    @Modifying
    @Query(value = BabiloQueries.BABILO_SCHEDULE_UPDATE, nativeQuery = true)
    void updateScheduleInfo(Integer scheduleId, Integer movieId, Integer theaterId, String time, Date date, Integer seatAvailable);
}
