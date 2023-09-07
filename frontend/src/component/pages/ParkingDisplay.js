import React from 'react'
import Navbar2 from '../UserStyles/Navbar2'
import ParkingLots from '../Admin/ParkingFile/ParkingLots'
import { Grid } from '@material-ui/core'
const ParkingDisplay = () => {
    return (
        <div>
            <Navbar2/>
            <br/>
            <Grid container item lg={12} sm={8} xs={12}>
            <ParkingLots/>
         
         </Grid>
            
        </div>
    )
}

export default ParkingDisplay
