package com.screens.babilo.serviceImpl;

import com.screens.babilo.dao.TheaterDao;
import com.screens.babilo.dataentity.Theater;
import com.screens.babilo.service.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService {

    @Autowired
    private TheaterDao theaterDao;

    @Override
    public void addTheater(@NotNull Theater theater) {
        theaterDao.saveAndFlush(theater);
    }

    @Override
    public List<Theater> getTheaaters() {
        List<Theater> theaters = theaterDao.findAll();
        return theaters;
    }

    @Override
    public void updateTheater(Theater theater) {
        Integer theaterId = theater.getTheaterId();
        String theaterName = theater.getTheaterName();
        String theaterLocation = theater.getTheaterLocation();
        theaterDao.updateTheater(theaterId,theaterName,theaterLocation);
    }

}
