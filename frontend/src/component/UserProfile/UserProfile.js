import React from 'react';
import style1 from './UserProfile.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../FrontPage/Navbar';
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
const UserProfile = () => {
    const [userLogin, setUserLogin] = useState({
        firstName :'',
        lastName : '',
        email : '',
        vehicle:'',
        userId:'',
        contact:'',
        gender:'',
        address:'',
        createdAt:'',
    
      });
      let reduxstate;
      useSelector(state => reduxstate = state);
      console.log("date accessed is",reduxstate.authReducer.userDetails);
useEffect(()=>{
  const fetchdata = async ()=>{
      
      setUserLogin(reduxstate.authReducer.userDetails)
      
  }
  console.log(userLogin)
  fetchdata();
},[])



    return (
        <div id={style1.main}>
            <Navbar/>

           

                <div className={style1.empProfile}>


                    <Row>

                        <Col md="4" sm="4" >
                            <div className={style1.profileimg, style1.clm1}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" className="img-fluid" alt="" />
                                <div className={style1.file}>
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </Col>

                        <Col md='8' sm="6" classname="clms">
                            <div className={style1.profilehead}>
                                <h5>
                                {userLogin.firstName}
                                </h5>
                                
                                <h6>
                                    Member Since: 
                                   {userLogin.createdAt}
                                </h6>
                                
                                <h6>Last Login: 13/10/2021 at 05:01 PM</h6>


                            </div>
                        </Col>



                    </Row>







                    <Row>

                        <Col md="4">
                            <div className={style1.profilework, style1.clm1}>
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Edit Profile" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Add Vehicle" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="FeedBack" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Report an Issue?" />


                            </div>
                           
                        </Col>
                        

                        <Col md="8">

                            <Row>

                                <Col md="6" className={style1.profiletab}>
                                    
                                </Col>
                                <Col className={style1.profiletab}>
                                
                                    
                                </Col>

                            </Row>

                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Name</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                <Typography>{userLogin.firstName} {userLogin.lastName}</Typography>
                                </Col>

                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab} >
                                    <label>Email</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>

                                <Typography>{userLogin.email}</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Phone</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                <Typography>{userLogin.contact}</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Gender</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                <Typography>{userLogin.gender}</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Residential Address</label>
                                </Col>
                                <Col  className={style1.profiletab}>
                                <Typography>{userLogin.address}</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Registered Vehicle No.</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                <Typography>{userLogin.vehicle}</Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Driving Licence Number</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                    <p>DL-90XXXXXXXXXXXX01</p>
                                </Col>
                            </Row>



                   
                        </Col>
                       
                        
                    </Row>



                </div>
            
        </div>



    );


}
export default UserProfile;
//Date date = object.getCreatedAt();
// DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
// String reportDate = df.format(date);