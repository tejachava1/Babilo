package com.screens.babilo.dao;

import com.screens.babilo.dataentity.Movie;
import com.screens.babilo.util.BabiloQueries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

public interface MovieDao extends JpaRepository<Movie,Integer> {

    @Transactional
    @Modifying
    @Query(value = BabiloQueries.BABILO_MOVIE_UPDATE,nativeQuery = true)
    void updateMovieInfo(Integer movieId,String movieName, String movieDirector, String movieDesc, Integer movieRating, BigDecimal moviePrice);
}
