import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { authenticateStudent } from '../../service/api';


const Contaner = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
`

const InputBox = styled(Box)`
    width: 80%;
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: #fbfbfb;
`

const Icon = styled(AddCircleIcon)`
    color: #1976D2;
`

const studentInitialValues = {
    batch: '',
    firstname: '',
    lastname: '',
    email: '',
    college: '',
    status: '',
    dsa: '',
    webd: '',
    react: '',
    interview: '',
    results: ''
  }

const Container = () => {
    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = useState(studentInitialValues);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const onInputChange = (e) => {
        setSubmit({ ...submit, [e.target.name]: e.target.value});
        console.log(submit);
      }
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
    };
    const navigate = useNavigate();
    const submitUser = async () => {
    try {
        let res = await authenticateStudent(submit);
        if (res.status === 200) {
            setOpen(false);
        }else{
        return(
            <Box>
            User ALready Registered
            </Box>
        )
        }
    } catch (error) {
        console.log(error);
    }
    }

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
    <Contaner>
        <InputBox>
            <Icon onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <DialogTitle>Student Data</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Batch"
                    name='batch'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First Name"
                    name='firstname'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Last Name"
                    name='lastname'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    name='email'
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="College"
                    name='college'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Status"
                    name='status'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="DSA Score"
                    name='dsa'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Web D Score"
                    name='webd'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="React Score"
                    name='react'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                {/* <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Interview"
                    name='interview'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                /> */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Result"
                    name='results'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => submitUser()}>Submit</Button>
                </DialogActions>
            </Box>
        </Dialog>
            <Typography component='h3'>Add Student Data</Typography>
        </InputBox>
    </Contaner>
    </>
  )
}

export default Container