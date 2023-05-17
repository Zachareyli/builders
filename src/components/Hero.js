import React from 'react';
import MovingText from 'react-moving-text'


const Hero = () => {
  return (
    <>
    <div className="HeroWrapper">
      <div className="HeroBg">
        <h1 className="HeroHeading">Neil The <span><MovingText type="typewriter"
  dataText={[
  'Great',
  'Fantastic',
  'Incredible',
  'Efficient'
]} /></span>Handy Man </h1>
          <p className="HeroText"><span><MovingText
  type="pulse"
  duration="2000ms"
  delay="2s"
  direction="normal"
  timing="ease-out"
  iteration="infinite"
  fillMode="none">
  Neil's Work is Good Work
</MovingText></span></p>
      </div>
    </div>
    </>
  )
}

export default Hero