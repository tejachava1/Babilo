import React, { useState,useEffect } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminHeader from "../Header/adminHeader";
import './addmovie.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import moment from "moment";

import { EditRoadTwoTone } from "@mui/icons-material";
function Schedule(props) {
const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [theaters, setTheaters] = useState([]);
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9090/schedule/schedulerInfo').then((response) => {
            console.log(response.data);
            setSchedules(response.data)

        }).catch((error) => {

        });
        axios.get('http://localhost:9090/movie/movieInfo').then((response) => {
          console.log(response.data);
          setMovies(response.data)

      }).catch((error) => {

      });
      axios.get('http://localhost:9090/theater/theatersInfo').then((response) => {
        console.log(response.data);
        setTheaters(response.data)

    }).catch((error) => {

    });
       },[]);
useEffect(()=> {
  if(schedules&&movies&&theaters) {

    let schedulesnew = []
    for(var i=0; i<=schedules.length-1;i++){
      let schedulenew = {
        date: "",
        movieId: 0,
        movieName:'',
        theaterName: '',
        scheduleId: 0,
        seatAvailable: 0,
        theaterId: 0,
        time: ""
      }



      // if(movies[i]?.movieId === schedules[i]?.movieId && theaters[i]?.theaterId === schedules[i]?.theaterId){
      //   schedulenew.date = schedules[i]?.date;
      //   schedulenew.time = schedules[i]?.time;
      //   schedulenew.movieId=schedules[i]?.movieId;
      //   schedulenew.movieName=movies[i]?.movieName;
      //   schedulenew.theaterId=schedules[i]?.theaterId;
      //   schedulenew.theaterName= theaters[i]?.theaterName;
      //   schedulenew.scheduleId= schedules[i]?.scheduleId;
      // }
      schedulesnew.push(schedulenew);
      console.log(schedulesnew)

    }
  
 

  }
  console.log(schedules)


},[schedules && movies && theaters])
    const editMovie = (schedule) => {
        let data = {
            ...schedule,
            edit: true
        }
        navigate('/addSchedule', { state: data });
    }

    
    const addMovie = () => {
        let data = {
            edit: false
        }
        navigate('/addSchedule', { state: data });
    }
    return(
        <div>
             <AdminHeader />
             <div className="tablemodel">
             <Button variant="contained" className="float" onClick={()=> addMovie()}>Add Movie</Button>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell align="left">Theater Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time&nbsp;</TableCell>
            <TableCell align="left">Seats Available&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((movie) => (
            <TableRow
              key={movie.movieId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }

             }}
             onClick={() => editMovie(movie)}
            >
              <TableCell component="th" scope="movie">
                {movie.movieId}
              </TableCell>
              <TableCell align="left">{movie.theaterId}</TableCell>
              <TableCell align="left">{moment(movie.date).format('DD-MM-YYYY')}</TableCell>
              <TableCell align="left">{movie.time}</TableCell>
              <TableCell align="left">{movie.seatAvailable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        </div>

    )

}

export default Schedule;