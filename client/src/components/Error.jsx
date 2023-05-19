import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled(Box)`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

const Error = () => {
  return (
    <Container><h1>
        Not Authorised 404
        <Link to='/'>Go Back</Link>
    </h1>
    </Container>
  )
}

export default Error