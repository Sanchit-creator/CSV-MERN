import React from 'react'
import Error from '../Error';

const Home = () => {

  const userInfo = localStorage.getItem("userInfo");
  return (
  <>
    {
      userInfo ? 
      <div>Home</div> : 
      <Error />
    }
  </>  
  )
}

export default Home