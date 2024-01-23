import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import {Grid, Typography, Toolbar, AppBar, Tabs,Tab, Box, Button,useTheme,useMediaQuery} from '@mui/material';
import logo from "../images/logo.png";
import DrawerComp from './DrawerComp';
const Navbar = () => {
    const theme=useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const [value,setValue]=useState();
  return (
    <>
  <AppBar position='sticky'>
    <Toolbar style={{ height: '80px', backgroundColor: 'white' }} >
        {isMatch ? (
            <>
            <Grid item xs={2}>
                <img width={200}  src={logo} />
            </Grid>
         <DrawerComp /> 
        </>
        )       
       : (
<Grid container spacing={1} style={{ display: 'flex', alignItems: 'center'}}>
            <Grid item xs={2}>
                <img width={150}  src={logo} />
            </Grid>
        <Grid item xs={6}>
            <Tabs 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e,val)=>setValue(val)}
            >
                <Tab label="Home" />
                <Tab label="About us" />
                <Tab label="Services" />
                <Tab label="Download" />
                <Tab label="Contact" />
            </Tabs>

                </Grid>
        <Grid item xs={1}/>
        <Grid item xs={3}>
            <Box>
                {/* <Button sx={{marginLeft: 'auto', borderRadius: '25px', padding: '0.8em', backgroundColor: ''}} variant="contained">Register User</Button> */}
                {/* <Button  sx={{marginLeft: 1, borderRadius: '25px', padding: '0.8em', backgroundColor: ''}} variant="contained">User Signup</Button> */}
           <Link to="/register"><button className='xl:w-40  h-12 bg-[#51087E] hover:bg-purple-700	 my-3 w-full rounded-full font-bold text-white'>
        Register User
        </button>
           </Link> 
       
            </Box>
        </Grid>
        </Grid>
       )
       
       
        }
       
    </Toolbar>
  </AppBar>
    </>
  )
}

export default Navbar
