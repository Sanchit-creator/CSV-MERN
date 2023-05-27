import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteInterview, getInterview } from '../../service/api'
import { useParams } from 'react-router-dom'


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
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    background-color: #fbfbfb;
`

const MainBox = styled(Box)`
    height: 100px;
    display: flex;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 80%;
`



const Show = () => {
    const [interviewData, setInterviewData] = useState();

    const handleClick = async (data) => {
        let response = await deleteInterview({id: data._id, email: data.email});
        console.log(data._id);        
    }
    // {id : data._id, student: data.student}

    useEffect(() => {
        const random = () => getInterview().then(function(result) {
            console.log(result.data);
            setInterviewData(result.data);
        })

        random();
    },[])
  return (
    <Contaner>
        {
            interviewData ? interviewData.map((data, key) => (
                <MainBox key={data._id}>
                    <InputBox>
                        <Typography>Company: {data.company}</Typography>
                        <Typography>Date: {data.date}</Typography>
                        <Typography>Email: {data.email}</Typography>
                        <Typography>Result: {data.results}</Typography>
                    </InputBox>
                    <InputBox>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => handleClick(data)}
                        >
                            Delete
                        </Button>
                    </InputBox>
            </MainBox>
            )) : 'Nothing to show'
        }
    </Contaner>
  )
}

export default Show