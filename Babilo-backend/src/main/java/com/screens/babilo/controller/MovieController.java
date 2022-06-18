package com.screens.babilo.controller;

import com.screens.babilo.dao.MovieDao;
import com.screens.babilo.dataentity.Movie;
import com.screens.babilo.serviceImpl.MovieServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieServiceImpl movieService;

    @PostMapping("/movieReg")
    public ResponseEntity<HttpStatus> MovieRegistration(@RequestBody Movie movie){
        movieService.addMovie(movie);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/movieInfo")
    public ResponseEntity<List<Movie>> movieList() throws Exception {
        try{
            List<Movie> movies = movieService.getMovies();
            return new ResponseEntity<>(movies,HttpStatus.OK);
        }catch (Exception e){
            throw new Exception(e.getLocalizedMessage());
        }
    }

    @PutMapping("/movieUpdate")
    public ResponseEntity<HttpStatus> movieUpdate(@RequestBody Movie movie) throws Exception {
        try{
            movieService.updateMovie(movie);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            throw new Exception(e.getLocalizedMessage());
        }

    }
}
