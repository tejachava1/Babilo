package com.screens.babilo.serviceImpl;

import com.screens.babilo.dao.MovieDao;
import com.screens.babilo.dataentity.Movie;
import com.screens.babilo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieDao movieDao;

    @Override
    public void addMovie(@NotNull Movie movie) {
        movieDao.saveAndFlush(movie);
    }

    @Override
    public List<Movie> getMovies() {
        return movieDao.findAll();
    }

    @Override
    public void updateMovie(Movie movie) {
        Integer movieId = movie.getMovieId();
        String movieName = movie.getMovieName();
        String movieDesc = movie.getMovieDescription();
        Integer movieRating = movie.getMovieRating();
        String movieDirector = movie.getMovieDirector();
        BigDecimal moviePrice = movie.getMoviePrice();
        movieDao.updateMovieInfo(movieId,movieName,movieDirector,movieDesc,movieRating,moviePrice);

    }

}
