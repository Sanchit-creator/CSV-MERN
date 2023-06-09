import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getStudents } from '../../redux/actions/studentActions'
import { useDispatch, useSelector } from 'react-redux'


const Contaner = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 5vh;
    height: 100%
`
const InputBox = styled(Box)`
    width: 80%;
    display: flex;
    justify-content: space-around;
    height: 100px;
    align-items: center;
    border: 1px solid black;
    background-color: #fbfbfb;
`




const Show = () => {

    const dispatch = useDispatch();
    const { students } = useSelector(state => state.getStudents);
    console.log(students);
    useEffect(() => {
        dispatch(getStudents())
    }, [dispatch])
  return (
    <Contaner>
        {
            students.map((student, key) => (
                <InputBox key={student._id}>
                    <Typography>Name: {student.firstname} {student.lastname}</Typography> 
                    <Typography>Batch: {student.batch}</Typography>
                    <Typography>Email: {student.email} </Typography>
                    <Typography>College: {student.college} </Typography>
                    <Typography>React Score: {student.react}</Typography>
                    <Typography>DSA Score: {student.dsa}</Typography>
                    <Typography>Web D Score: {student.webd}</Typography>
                    <Typography>Status: {student.status}</Typography>
                </InputBox>
            ))
        }
    </Contaner>
  )
}

export default Show