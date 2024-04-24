import React, { Suspense } from 'react'
import "slick-carousel";
import "slick-carousel/slick/slick-theme.css";
import chevrons from './assets/chevrons.svg'

import loader from "./assets/truck.gif"
const MylazyCOmponent = React.lazy(()=>import("./MyLazyComponent"))
const Hero = React.lazy(()=>import("./screens/Hero"))
const About = React.lazy(()=>import("./screens/About"))
// const SecondComponent = React.lazy(()=>import("./SecondComponent"))
function App() {

  return (
    <div className=' '>

    <Suspense fallback={<div className='flex justify-center items-center w-full h-screen '>
      <img src={loader} alt="loader" className='w-52 h-52 object-contain ' />
    </div>}>
    <Hero />
    <About />
    <div className='bg-primary rounded-lg w-12 animate-pulse h-12 flex items-center justify-center fixed bottom-7 right-10'>
    <img src={chevrons} alt="chevron " className='w-10 h-10' />
    </div>
    </Suspense>
    </div>
  )
}

export default App
