import React from 'react'
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Carausol from "../components/Carousel";
import Service from "../components/Service";
import Tech from "../components/Tech";
import About from "../components/About";

const Herosection = () => {
  return (
    <div>
      <Hero/>
            <Projects />
            <Carausol />
            <About />
            <Service />
            <Tech />
    </div>
  )
}

export default Herosection
