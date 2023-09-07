import React from 'react'
import Navbar2 from '../UserStyles/Navbar2'
import { Grid } from '@material-ui/core'
import ManagerLists from '../Admin/ManagerFile/ManagerLists'
const ApprovedManager = () => {
    return (
        <div>
            <Navbar2/>
            <br/>
            <Grid container item lg={12} sm={8} xs={12}>
         
            <ManagerLists/>
            </Grid>
           
        </div>
    )
}

export default ApprovedManager
