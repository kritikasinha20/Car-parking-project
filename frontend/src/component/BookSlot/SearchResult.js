import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import axios from 'axios'
import React, { Component } from 'react';
import SlotsDisplay from './SlotsDisplay';
import {data} from './BookSlot';

const SearchResult = () => {
    //const [requests,setRequests] = useState([]);
    console.log(data);
    console.log("data coming here is :", data.pass);
    return (
            (data.pass).map(req =>
            <Grid item lg={5} sm={4} xs={12}>
              <Link to = {`/bookingView/${req._id}`} style = {{textDecoration:'none',color:'inherit'}}> 
             <SlotsDisplay req={req}/>
             </Link>
           </Grid>)
          
    )
}

export default SearchResult;