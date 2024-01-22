import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Main from './components/Main'
import Slider from './components/Slider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full flex justify-center min-w-screen'>
      <Navbar></Navbar>
      <div className='flex items-center flex-col mt-40'>      <Main></Main>
      <Gallery></Gallery>
      <Slider></Slider>
      </div>
    </div>
  )
}

export default App
