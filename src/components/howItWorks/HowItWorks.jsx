import React from 'react';
import './howitWorks.css';
import HowItWorksImage from '../../assets/howitworks/howitworks.png'; 
import Play from '../../assets/howitworks/play_circle.png'; 

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h3 className="how-it-works-heading">How parkqwik works?</h3>
      <div className="how-it-works-image">
        <img src={HowItWorksImage} alt="How ParkQwik Works" />
        <div className='how-it-works-play'>
            <img src={Play} alt="Play Button" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
