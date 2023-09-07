import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from './manImage.png'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red,grey } from '@mui/material/colors';
import {  CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const usestyles = makeStyles({
    container:{
      height:340,
      margin:10,
      marginTop:20,
      borderRadius:10,
      display:'flex',
      flexDirection:'column',
      '& > *':{
          padding:'0 5px 5px 5px'
      },
      border:'10px #d3ced',
      alignItems:'left',
      
    },
    image:{
      height:150,
      width:'80%'
 
    },
    text:{
     fontfamily: 'Open Sans',
    
     fontweight: 400
    }
 
 })
 const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const ManagerList = ({req}) => {
    const classes = usestyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <div>
             <Card sx={{ maxWidth: 300,bgcolor: grey[100]}} >
           <CardActionArea>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        title = "Manager"
        />
         <img className={classes.image} src = {Image} />
           <CardContent>
        
        <Typography  style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Manager Name:{req.firstName}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Email: {req.email} </Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Contact:{req.contact}</Typography>
       
      </CardContent>

      </CardActionArea>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <IconButton/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography  style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Date Of Birth:{req.dateOfBirth}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Aadhar: {req.aadhar} </Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Residence:{req.residence}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Alternative number:{req.alternative}</Typography>
        </CardContent>
      </Collapse>
      </Card>
        </div>
    )
}

export default ManagerList
