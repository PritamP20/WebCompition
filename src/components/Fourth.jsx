import React from 'react'
import FourthBg from '../assets/Bgs/FooterBg.jpg'
import face from '../assets/My Icons/facebook.png'

const Fourth = () => {
  return (
    <div className='m-auto p-5 d-flex flex-column gap-5 vh-100 vw-100 align-content-center align-items-center' style={{
        backgroundImage:
          `url(${FourthBg})`
      }}>
        <div className='col-9 d-flex'>
        <div className='d-flex gap-5 justify-content-center' style={{paddingTop:'200px'}}>            
          <img className='col-4' src={face} alt="" />
        </div>
        <div className='d-flex gap-5 justify-content-center' style={{paddingTop:'200px'}}>            
          <img className='col-4' src={face} alt="" />
        </div>
        <div className='d-flex gap-5 justify-content-center' style={{paddingTop:'200px'}}>            
          <img className='col-4' src={face} alt="" />
        </div>
        <div className='d-flex gap-5 justify-content-center' style={{paddingTop:'200px'}}>            
          <img className='col-4' src={face} alt="" /> 
        </div>
        </div>
      </div>
  )
}

export default Fourth
