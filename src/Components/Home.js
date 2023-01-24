import React from "react"
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub,AiOutlineTwitter} from "react-icons/ai";
import {Link} from 'react-router-dom'
import Typewriter from "typewriter-effect";
import '../Style/Home.css'
import About from "./About.js"
function Home(){

  return (
    <div className='home-body' id="home">
      <div className='home'>
        <div className='intro'>
            <div id='intro1'>MYSELF</div>
            <div id='intro2'>VISHAL JAISWAL</div>
        </div>
        <div id='am'>
            <span>
              I'm a student as well as a{'\u00A0'}
            </span> 
              <Typewriter 
                  options={{
                    strings: ['Full Stack Developer', 'Tech Enthusiast'],
                    autoStart: true,
                    loop: true,
                  }}
                />
        </div>
        <div className='social' >
            <ul className='social-list'>
                  <li><a className='linkedin' id='social-media-icons'  href='https://www.linkedin.com/in/vishal-jaiswal-214661226/' target='_blank' rel="noreferrer"><AiOutlineLinkedin /></a></li>
                  <li><a className='instagram'id='social-media-icons'  href='https://www.instagram.com/https.vishal.jx/' target='_blank' rel="noreferrer"><AiOutlineInstagram /></a></li>
                  <li><a className='github' id='social-media-icons' href='https://github.com/VishalJx' target='_blank' rel="noreferrer"><AiOutlineGithub /></a></li>
                  <li><a className='twitter'id='social-media-icons'  href='https://twitter.com/https_vishaljx' target='_blank' rel="noreferrer"><AiOutlineTwitter/></a></li>
            </ul>
        </div>
        <span id='more-button'>
              <Link id="about-link-2" to='about' >More about me</Link>
        </span>
      </div>
      <About/>
    </div>
  )
};

export default Home;
