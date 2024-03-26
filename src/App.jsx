import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='vw-100'>
      <Router>
      <Home/>
      <Second/>
      <Third/>
      <Fourth/>
    </Router>
    </div>
  )
}

export default App
