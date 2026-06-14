import './hero.css'
import heroImg from '../../../assets/img.png'
import { useState } from 'react'

const Hero = () => {

  const [active, setActive] = useState('hire')

  return (
    <div className="hero">
      <div className="left">


        <div className="hero-toggle">
          <button className={active === 'hire' ? 'active' : ''} onClick={() => setActive('hire')}>HIRE TALENT</button>
          <button className={active === 'gethire' ? 'active' : ''} onClick={() => setActive('gethire')}>GET HIRED</button>
        </div>

       <h1>
        Work with the world's
        <br />
        best in <span>web design</span>
       </h1>

        <div className="hero-points">
          <p>✓ Generate your brief and receive proposals</p>
          <p>✓ Browse real-world design and development work</p>
          <p>✓ Hire top-rated freelancers and agencies</p>
        </div>

        <button className="cta-btn">Start Your Project Brief</button>

      </div>

      <div className="right">
        <img src={heroImg}/>
      </div>
    </div>
  )
}

export default Hero