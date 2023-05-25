import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getInterview } from '../../service/api'


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
    const [interviewData, setInterviewData] = useState();

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
                <InputBox key={data._id}>
                    <Typography>Company: {data.company}</Typography>
                    <Typography>Date: {data.date}</Typography>
                    <Typography>Email: {data.email}</Typography>
                    <Typography>Result: {data.results}</Typography>
                </InputBox>
            )) : 'Nothing to show'
        }
    </Contaner>
  )
}

export default Show