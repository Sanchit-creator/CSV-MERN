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
import { authenticateInterview } from '../../service/api';
import ShowInterview from './ShowInterview';


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
    company: '',
    date: '',
    email: '',
    results: ''
  }

const Interview = () => {
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
    });
    };
    const navigate = useNavigate();
    const submitUser = async () => {
    try {
        let res = await authenticateInterview(submit);
        if (res.status === 200) {
            setOpen(false);
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
                <DialogTitle>Interview Data</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Company"
                    name='company'
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Date"
                    name='date'
                    placeholder='DD/MM/YYYY'
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
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onInputChange(e)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Results"
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
            <Typography component='h3'>Add Interview Data</Typography>
        </InputBox>
    </Contaner>
    <ShowInterview />
    </>
  )
}

export default Interview