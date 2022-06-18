import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "../Header/header";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import moment from "moment";

function UserDashboard(props) {
    const navigate = useNavigate();
    const [schedules, setSchedules] = useState([]);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [movieSchedules, setMovieSchedules] = useState([]);
    const [calPrice, setCalPrice] = useState(0);
    const [theaters, setTheaters] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [vertical, setVertical] = React.useState('top');
    const [horizontal, setHorizontal] = React.useState('right');
    const [scheduleTime, setScheduleTime] = useState({});
    const [seatsSelected, setSeatsSelected] = useState(0);
    const [theater, setTheater] = useState({})
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
    }, []);

    const handleInputChange = (e) => {
        console.log(movie)
        setSeatsSelected(e.target.value);
        let price= movie.moviePrice*e.target.value;
        setCalPrice(price)

    };

    const handleCancel = (event) => {
      
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let data= {
            movieName: movie.movieName,
            theaterName: theater.theaterName,
            location:theater.theaterLocation
        }

    //     axios.post('http://localhost:9090/movie/movieReg', movie).then((response) => {
    //         if (response.status == 201) {
    //             handleClick();

    //         }

    //     }).catch((error) => {
    //         console.log(error)
    //         handleClickError();

    //     })
    // };
    navigate('/Payment', {state: data});
    }
    const handleClick = () => {
        setOpen(true);

    };

    const handleClickError = () => {
        setErrorOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleChangeMovie = (event) => {
        setMovie(event.target.value);
    };
    const handleChangeTheater = (event) => {
        setTheater(event.target.value);
    }
    let moviesselctions = null;
    useEffect(() => {
        if(movie&&theater){
            console.log(movie);
            console.log(schedules);
            let movieSchedule = [];
            for(var i=0; i<= schedules.length; i++){
                if(movie.movieId === schedules[i]?.movieId && theater.theaterId === schedules[i]?.theaterId) {
                    movieSchedule.push(schedules[i]);
                }
            }
            setMovieSchedules(movieSchedule);
        }

    }, [movie&&theater]);

    useEffect(() => {
        console.log(movieSchedules)
        if(movieSchedules.length > 0 ){
            returnMenu(movieSchedules)
        }


    }, [movieSchedules]);


    const returnMenu = (schedules) => {
        return(
            schedules.map((schedule,index)=> 
            <MenuItem key={index} value={schedule} >{moment(schedule?.date).format('DD-MM-YYYY')}-{schedule?.time}</MenuItem>

            )

        )

    }
    const handleChangeTime = (event) => {
        console.log(event.target.value)
        setScheduleTime(event.target.value);
    };
    return (
        <div>
            <Header />
            {
                open ? <Stack sx={{ width: '100%' }} spacing={2} className='float-right'>
                    <Alert severity="success">This is a success alert — check it out!</Alert>

                </Stack>
                    :
                    ""
            }

            {
                errorOpen ? <Stack sx={{ width: '100%' }} spacing={2} className='float-right'>
                    <Alert severity="error">Network Error!</Alert>

                </Stack>
                    :
                    ""
            }
            <div className="form-middle">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <fieldset>
                        <legend className="legendTitle">Book Movie</legend>



                        <Grid container spacing={2}>
                            <Grid item md={6}>
                            <div className="">
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="theater-label">Select A Movie</InputLabel>

                                        <Select
                                            labelId="theater-label"
                                            id="theater_id"
                                            label="Theater"
                                            value={movie}
                                            onChange={handleChangeMovie}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>

                                            {movies.map((movie, index) =>
                                                <MenuItem key={index} value={movie} >{movie.movieName}</MenuItem>
                                            )}



                                        </Select>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="theater-label">Select A Theater</InputLabel>

                                        <Select
                                            labelId="theater-label"
                                            id="theater_id"
                                            label="Theater"
                                            value={theater}
                                            onChange={handleChangeTheater}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>

                                            {theaters.map((theater, index) =>
                                                <MenuItem key={index} value={theater} >{theater.theaterName}-{theater.theaterLocation}</MenuItem>
                                            )}



                                        </Select>
                                    </FormControl>


                                </div>
                                <div className="">
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="theater-label">Select movie schedule</InputLabel>

                                        <Select
                                            labelId="theater-label"
                                            id="theater_id"
                                            label="Theater"
                                            value={scheduleTime}
                                            onChange={handleChangeTime}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                
                                            {returnMenu(movieSchedules)}


                                        </Select>
                                    </FormControl>



                                </div>
                                <div>
                                    <TextField
                                        id="outlined-required"
                                        label="Number of seats"
                                        name="movieDescription"
                                        value={seatsSelected}
                                        onChange={handleInputChange}
                                    />

                                </div>

                                <div>
                                    <TextField
                                    disabled
                                        id="outlined-required"
                                        label="Price"
                                        name="movieDescription"
                                        value={calPrice}
                                        onChange={handleInputChange}
                                    />

                                </div>
                          

                            </Grid>
                            <Grid item md={6}>
                            <div>
                                <p>Please Check the movie!</p>
                                <h6>Movie: {movie.movieName}</h6>
                                <h6>Theater: {theater.theaterName}-{theater.theaterLocation}</h6>
                                <h6>Date: {moment(scheduleTime.date).format('DD-MM-YYYY')}</h6>
                                <h6>Time: {scheduleTime.time}</h6>
                                <h6>Seats: {seatsSelected}</h6>
                                <h6>Price: {calPrice}</h6>

                            </div>
                        </Grid>
                        </Grid>
                        <Button spacing={2} className="float" variant="contained" onClick={handleSubmit}>Continue to payment</Button>
                        <Button spacing={2} className="float" variant="" onClick={handleCancel}>Cancel</Button>
                    </fieldset>
                </Box>
            </div>
        </div>
    )
}
export default UserDashboard;