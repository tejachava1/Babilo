package com.screens.babilo.service;

import com.screens.babilo.dataentity.Theater;

import java.util.List;


public interface TheaterService {

    public void addTheater(Theater theater);

    public List<Theater> getTheaaters();

    void updateTheater(Theater theater);
}
