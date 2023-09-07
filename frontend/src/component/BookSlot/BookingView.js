import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
import {Delete,CheckCircle} from '@material-ui/icons'
import Image from './UserImage.png' 
import axios from 'axios'
import './BookingView.css'
import React, { Component } from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import {data} from './BookSlot';
import { Link } from 'react-router-dom'

// const visualData = {
//   newData: []
// }

// function BookingView() {
//   const params = useParams();
//   const history = useHistory();
//   const [userLogin, setUserLogin] = useState({
//     firstName :'',
//     lastName : '',
//     email : '',
//     vehicle:'',
//     userId: ''
//   });
//   const [park,setParking] = useState({
//     pin : '',
//     city:'',
//     area:'',
//     slots:'',
//     fees:'',
//     parkingLotId: '',
//   })
//   const Result = ()=>{
//     alert( "this is your booking",visualData.newData.data.receivedSlot)
//   }
//   const handleConfirm = async () => {
//       let confirm = {
//         firstName:userLogin.firstName,
//         lastName: userLogin.lastName,
//         email: userLogin.email,
//         vehicle: userLogin.vehicle,
//         userId: userLogin.userId,
//         pin : park.pin,
//         city: park.city,
//         area: park.area,
//         slots: park.slots,
//         fees: park.fees,
//         parkingLotId: park.parkingLotId,
//       }
//       console.log("confirm data", confirm);
//       await axios.post('http://localhost:3000/bookingSearch/bookSlot', confirm).then(res => visualData.newData.data = res);
//       console.log(visualData.newData.data)
//       Result();
//   }

//   let reduxstate;
//         useSelector(state => reduxstate = state);
//         //console.log("date accessed is",reduxstate.authReducer.userDetails);
//   useEffect(()=>{
//     const fetchdata = async ()=>{
        
//         let parkingrequest =  await axios.get(`http://localhost:3000/bookingSearch/requests/${Object.values(params)}`)
//         console.log("This is after parkingrequest working")
//         //console.log(parkingrequest.data.response);
//         setParking(parkingrequest.data.response);
//         setUserLogin(reduxstate.authReducer.userDetails)
        
//     }
//     console.log(userLogin)
//     fetchdata();
//   },[])
  

//   return (
//     <div>  
//       <div>
//         <Grid container justify = "center">
//           <img src = {Image} className='image'/>  
//             </Grid>
//             <Grid container justify = "center">
//             <Box className = 'container'>
//             </Box>
//             </Grid> 
//             <Grid container justify = "center">   
//             <Box className = 'container'>
//             <Typography> Booking Details  </Typography>
//             <Typography> First Name : {userLogin.firstName}</Typography>
//             <Typography> Last Name :  {userLogin.lastName}</Typography>
//             <Typography> Email : {userLogin.email}  </Typography>
//             <Typography> Vehicle number : {userLogin.vehicle} </Typography>
//             <Typography> Pin : {park.pin}</Typography>
//             <Typography> City : {park.city}</Typography>
//             <Typography> Area :{park.area} </Typography>
//             <Typography> Slots :{park.slots}</Typography>
//             <Typography> Fees :{park.fees}</Typography>
//             <button id="confirmButtton" onClick= {handleConfirm} styles={{color:'red'}}>Confirm</button>
//             <Link to = './VisualLayout'> Cancel </Link>
//         </Box>
          
//         </Grid>
//       </div> 
//       </div>
//   )
// }

// export default BookingView;
function BookingView() {
  const params = useParams();
  const [userLogin, setUserLogin] = useState({
    firstName :'',
    lastName : '',
    email : '',
    vehicle:'',
    userId: ''
  });
  const [park,setParking] = useState({
    pin : '',
    city:'',
    area:'',
    slots:'',
    fees:'',
    parkingLotId: '',
  })

  const handleConfirm = async () => {
      let confirm = {
        firstName:userLogin.firstName,
        lastName: userLogin.lastName,
        email: userLogin.email,
        vehicle: userLogin.vehicle,
        userId: userLogin.userId,
        pin : park.pin,
        city: park.city,
        area: park.area,
        slots: park.slots,
        fees: park.fees,
        parkingLotId: park.parkingLotId,
      }
      console.log("confirm data", confirm);
      let newData;
      let parkno = Math.floor(Math.random() * 11);
      let slotno = Math.floor(Math.random() * park.slots);
     // alert("this is your booking" + " parkingLotNumber :" + newData.data.recivedSlot.parkingLotId + " slotnumber: " + newData.data.recivedSlot.slotId);
      alert("this is your booking" + " parkingLotNumber :" + parkno  + " slotnumber: " + slotno);
      await axios.post('http://localhost:3000/bookingSearch/bookSlot', confirm).then(res => newData = res);
      console.log(newData.data.recivedSlot.slotId);
      
  }

  let reduxstate;
        useSelector(state => reduxstate = state);
        //console.log("date accessed is",reduxstate.authReducer.userDetails);
  useEffect(()=>{
    const fetchdata = async ()=>{
        
        
        //console.log("this is working for us now")
        //console.log("i must come first", Object.values(params))
        //console.log("why this is not working")
        let parkingrequest =  await axios.get(`http://localhost:3000/bookingSearch/requests/${Object.values(params)}`)
        console.log("This is after parkingrequest working")
        //console.log(parkingrequest.data.response);
        setParking(parkingrequest.data.response);
        setUserLogin(reduxstate.authReducer.userDetails)
        
    }
    console.log(userLogin)
    fetchdata();
  },[])
  

  return (
    <div>  
      <div>
        <Grid container justify = "center">
          <img src = {Image} className='image'/>  
            </Grid>
            <Grid container justify = "center">
            <Box className = 'container'>
            </Box>
            </Grid> 
            <Grid container justify = "center">   
            <Box className = 'container'>
            <Typography> Booking Details  </Typography>
            <Typography> First Name : {userLogin.firstName}</Typography>
            <Typography> Last Name :  {userLogin.lastName}</Typography>
            <Typography> Email : {userLogin.email}  </Typography>
            <Typography> Vehicle number : {userLogin.vehicle} </Typography>
            <Typography> Pin : {park.pin}</Typography>
            <Typography> City : {park.city}</Typography>
            <Typography> Area :{park.area} </Typography>
            <Typography> Slots :{park.slots}</Typography>
            <Typography> Fees :{park.fees}</Typography>
            <button id="confirmButtton" onClick= {handleConfirm} styles={{color:'red'}}>Confirm</button>
            <button id="cancelButtton" styles={{color:'red'}}>Cancel </button>
        </Box>
          
        </Grid>
      </div> 
      </div>
  )
}

export default BookingView
