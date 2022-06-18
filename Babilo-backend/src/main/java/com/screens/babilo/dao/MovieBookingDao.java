package com.screens.babilo.dao;

import com.screens.babilo.dataentity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieBookingDao extends JpaRepository<Ticket,Integer> {
}
