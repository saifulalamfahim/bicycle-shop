import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';
import './CardDetails.css';
import CircularProgress from '@material-ui/core/CircularProgress';







const CardDetail = () => {
   

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {_id} = useParams();
    const [details, setDetails] = useState([]);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
      setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOut = date;
      setSelectedDate(newDates);
    };

    useEffect(() => {
        const url = `http://localhost:5050/Curds`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(pd => {
                if(pd._id == _id) {setDetails(pd)}
            })
        })
       
    }, [])
     

    
    const handleOrdering = () => {
        const newOrder = {...selectedDate, ...details, ...loggedInUser}
        fetch('http://localhost:5050/addOrder', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    
    return (

        <div>
           {
                details.length === 0 && <CircularProgress className="snniper" />
            }
          <h3>Product Details</h3>
           <table>
                 <tr>
                    <th>Name</th>
                    <th>ProductCode</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{details.name}</td>
                    <td>{_id}</td>
                    <td>{details.price}</td>
                </tr>                 
          </table>  
          <br/><br/>
          <h3>Pick Your Order Time</h3>               

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="dd/MM/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>

     
      
      <NavLink to="/Orders"><Button type="button" onClick={handleOrdering} variant="contained" color="primary">Order Now</Button>
      </NavLink>


    </MuiPickersUtilsProvider>
        </div>
        
    );
};

export default CardDetail;