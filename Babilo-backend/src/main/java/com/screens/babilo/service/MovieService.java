package com.screens.babilo.service;

import com.screens.babilo.dataentity.Movie;

import java.util.List;

public interface MovieService {

    public void addMovie(Movie movie);

    public List<Movie> getMovies();

    void updateMovie(Movie movie);
}
