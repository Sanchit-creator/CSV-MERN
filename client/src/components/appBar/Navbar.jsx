import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [first, setfirst] = useState('Interview')
  const navigate = useNavigate();
  const InterviewPage = () => {
    navigate('/interview')
    setfirst('Student')
  }

  const HomePage = () => {
    navigate('/home')
    setfirst('Interview')
  }

  const userInfo = localStorage.getItem("userInfo");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {
            userInfo &&
            <>
              {
                first === "Interview" ?
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}onClick={InterviewPage}>
                  {first}
                </Typography> :
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}onClick={HomePage}>
                  {first}
                </Typography>
              }
            </>
          }
          {userInfo && <Button color="inherit"
            onClick={() => {
              localStorage.removeItem("userInfo");
              navigate('/')
            }}
          >Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar