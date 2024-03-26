import React from 'react'
import SecondBg from '../assets/Bgs/HogwartsOnFire.jpg'
import logo from '../assets/Houses/MafloyHouseEWW.png'
import logo2 from '../assets/Houses/Griffindor.png'
import logo3 from '../assets/Houses/Huffelpuff.png'
import logo4 from '../assets/Houses/RavenClaw.png'


const Second = () => {
  return (
    <div className='d-flex flex-column vh-100 vw-100 align-content-center align-items-center' style={{
        backgroundImage:
          `url(${SecondBg})`
      }}>
        <div className='col-9'>
        <h1 className='p-lg-5 d-flex justify-content-center align-content-center text-white align-items-center' >About Harry Potter</h1>
        <div className='d-flex gap-5 fs-3' style={{paddingTop:'100px'}}>            
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae natus obcaecati saepe ipsa nisi laboriosam repellendus magni alias vero, numquam cum dignissimos, fugiat dicta iste, quae rerum animi placeat aliquid nulla quibusdam neque accusamus. Maxime fugit voluptas iusto, culpa quas deserunt odio similique nulla quidem enim laboriosam et rerum ad! Placeat labore omnis earum eum debitis facere quos pariatur?</p>
        </div>
        <div className='d-flex gap-5 ps-5 ms-5'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>
            <div>
                <img src={logo3} alt="" />
            </div>
            <div>
                <img src={logo4} alt="" />
            </div>
        </div>
        </div>
      </div>
  )
}

export default Second
