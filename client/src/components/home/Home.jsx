import React from 'react'
import Error from '../Error';
import Container from './Container';

const Home = () => {

  const userInfo = localStorage.getItem("userInfo");
  return (
  <>
    {
      userInfo ? 
      <Container /> : 
      <Error />
    }
  </>  
  )
}

export default Home