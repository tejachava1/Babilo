package com.screens.babilo.dao;

import com.screens.babilo.dataentity.Theater;
import com.screens.babilo.util.BabiloQueries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TheaterDao extends JpaRepository<Theater, Integer> {

    @Transactional
    @Modifying
    @Query(value = BabiloQueries.BABILO_THEATER_UPDATE,nativeQuery = true)
    void updateTheater(Integer theaterId, String theaterName, String theaterLocation);
}
