import React from "react"
import '../Style/About.css'
import Projects from "./Projects";

function About(){
  const js = require('../Images/javascript.png')
  const react = require('../Images/react.png')
  const html = require('../Images/html5.png')
  const css = require('../Images/css3.png')
  const bootstrap = require('../Images/bootstrap(1).png')
  const node = require('../Images/node-js.png')
  const express = require('../Images/express.png')
  const mongo = require('../Images/mongodb.png')
  const excel = require('../Images/excel-app.png')
  const photoshop = require('../Images/photoshop.png')
  const avatar = require('../Images/avatar.png')
  


  return (
        <div className="about-page" id='about'>
            <div className="about-head">
              <h1>About <span style={{color:'#00deda'}}>Me</span></h1>
            </div>
            <div className="fix">
              <div className='about-avatar'>
                  <div><img className="avatar" src={avatar}/></div>
                  <div className="about">
                    <h2>Hi, I'm Vishal</h2>
                    <h4>Full stack developer</h4>
                    <p>I am a Student and a Full-Stack developer based in Bhopal, India. I am a Computer Science Engineering undergraduate from IIIT-Bhopal. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Apart from webdev, I also love to explore the domain of Cybersecurity and AI .</p>
                  </div>
              </div>
              <div className="about-align">
                <div className="stack">
                  <div className="naam">Frontend</div>
                  <div className="skill">
                    <span><img className="skill-imgs" alt='none' src={js}/>JavaScript</span>
                    <span><img className="skill-imgs" alt='none' src={react}/>ReactJS</span>
                    <span><img className="skill-imgs" alt='none' src={html}/>HTML5</span>
                    <span><img className="skill-imgs" alt='none' src={css}/>CSS3</span>
                    <span><img className="skill-imgs" alt='none' src={bootstrap}/>Bootstrap</span>
                  </div>
                </div>
                <div className="stack">
                  <div className="naam">Backend</div>
                  <div className="skill">
                    <span><img className="skill-imgs" alt='none' src={node}/>NodeJS</span>
                    <span><img className="skill-imgs" alt='none' src={express}/>ExpressJS</span>
                    <span><img className="skill-imgs" alt='none' src={mongo}/>MongoDB</span>
                  </div>
                </div>
                  <div className="stack">
                    <div className="naam">Others</div>
                    <div className="skill">
                      <span><img className="skill-imgs" alt='none' src={excel}/>MS-Excel</span>
                      <span><img className="skill-imgs" alt='none' src={photoshop}/>Photoshop</span>
                    </div>
                  </div>
              </div>
          </div>
          <div className="resume"><a href=".pdf" className="resume-link">Resume</a><p style={{color:'white'}}>{'\u2794'}</p></div>
          <Projects/>
        </div>
  )
};

export default About;
