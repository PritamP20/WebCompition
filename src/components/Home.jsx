import React from 'react'
import HomeBg from '../assets/Bgs/HogwartsDining.jpg'
import './Home.css'
import logo from '../assets/My Icons/WBlogo.png'

const Home = () => {
  return (
    <div className='bg1 vh-100 vw-100 text-white' style={{
      backgroundImage:
        `url(${HomeBg})`
    }}>
      <div>
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid ">
      <a class="" href="#"> <img className='col-2 p-0' src={logo} alt="" /> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse d-flex gap-3 navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto d-flex gap-4 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white fs-3" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-3" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-3" href="#">House</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-3" href="#">Courses</a>
          </li>
        </ul>
      </div>

      <form class="d-flex" role="search">
          <button class="btn btn-outline-success" type="submit">Apply Now</button>
        </form>
  </div>
</nav>
      </div>

      <div className='m-auto p-5 d-flex flex-column gap-5 vh-100 vw-100 align-content-center align-items-center'>
        <div className='col-5'>
        <h1 className='p-lg-5 d-flex justify-content-center align-content-center align-items-center' >Wisard website cookies</h1>
        <div className='d-flex gap-5' style={{paddingTop:'250px'}}>            
          <button type="button" class="btn btn-warning " style={{marginRight:'53%'}}>Warning</button>
          <button type="button" class=" btn btn-warning ms-lg-5">Warning</button>
        </div>
        </div>
      </div>
    </div>

    // <div  style={{
    //   backgroundImage:
    //     `url(${HomeBg})`
    // }}>
    //   hello
    // </div>
  )
}

export default Home
