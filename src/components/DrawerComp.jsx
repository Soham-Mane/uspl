import React, {useState} from 'react'
import {Drawer, IconButton,List,ListItemIcon,ListItemButton,ListItemText,Button} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const DrawerComp = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
      <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
      <List>
        <ListItemButton>
          <ListItemIcon sx={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent:'center', alignItems:'center'}}>
            <ListItemText>Product</ListItemText>
            <ListItemText>About Us</ListItemText>
            <ListItemText>Services</ListItemText>
            <ListItemText>Download</ListItemText>
            <ListItemText>Contact</ListItemText>
<Button sx={{ borderRadius: '25px', padding: '0.8em', backgroundColor: '#FF6C22'}} variant="contained">User Login</Button>
                <Button  sx={{ borderRadius: '25px', padding: '0.8em', backgroundColor: '#FF6C22'}} variant="contained">User Signup</Button>
          </ListItemIcon>
        </ListItemButton>
      </List>
      </Drawer>
      <IconButton sx={{marginLeft: "auto"}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp; 
