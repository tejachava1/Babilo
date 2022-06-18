package com.screens.babilo.util;

public class BabiloQueries {
    public static final String BABILO_SCHEDULE_INFO = " select a.*,movieName,theaterName from schedule a left join Movie_Registration b on  a.movieId = b.movieId left join Theater_Registration c on a.theaterId = c.theaterId ";

    public static final String BABILO_MOVIE_UPDATE = " update Movie_Registration set movieName = :movieName, movieDescription=:movieDesc,movieDirector=:movieDirector,movieRating=:movieRating,moviePrice=:moviePrice where movieId=:movieId ";
    public static final String BABILO_SCHEDULE_UPDATE = " update Schedule set seatAvailable = :seatAvailable,date = :date,movieId = :movieId,theaterId = :theaterId,time = :time where scheduleId = :scheduleId ";
    public static final String BABILO_THEATER_UPDATE = " UPDATE Theater_Registration set theaterLocation = :theaterLocation, theaterName=:theaterName where theaterId=:theaterId ";
}
