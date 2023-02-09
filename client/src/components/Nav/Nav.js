import React from "react";
import AppBar from '@mui/material/AppBar';
import "./Nav.css";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from "../../images/logo2.png";
// import useStyles from './styles';
// className={classes.appBar} 
 function Nav() {
  // const classes=useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
       position="static"
       color="inherit"
       className="b"
       >
        <Toolbar>
          
          <img href="#home"
           src={Logo}
           className="logo"
            alt="XharkTanl Logo" />
          <DarkModeIcon
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
            className="darkLogo"
          >
            
          </DarkModeIcon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;

