import React from "react"
import '../Style/Projects.css'
import Contact from "./Contact"

function Projects(){
const book = require('../Images/books.jpg')
const portfolio = require('../Images/portfolio.jpg')
const emotions = require('../Images/emotions.jpg')
const insta = require('../Images/insta.jpg')
  return (
    <div className="block" id="projects">
       <div className="fit">
        <h1>Projects</h1>
            <div className="projects">
                <div className="block-1">
                <div className='project-top'>
                <div className="hovering">
                    <img className='project-image' src={portfolio} alt='none'></img>
                    <div className='project-bottom'>
                        <div className='project-name'>Devfolio</div>
                        <div className="description">
                            <p className="project-description">Devfolio is a personal portfolio website purely made using ReactJS and CSS.</p>
                            <ul className="project-tech-used">
                                <li className="tech-used">ReactJS</li>
                                <li className="tech-used">CSS</li>
                                <li className="tech-used">Formspree</li>
                            </ul>
                            <div className="project-link">
                            <a href='' target='_blank' rel="noreferrer">Live</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <div className="block-1">
              <div className='project-top'>
              <div className="hovering">
                <img className='project-image' src={book} alt='none'></img>
                <div className='project-bottom'>
                    <div className='project-name'>Book-CRUD</div>
                    <div className="description">
                        <p className="project-description">This is a simple website made to understand the concept of CRUD i.e. Create; Read; Update and Delete operations and their implementation using REST API.</p>
                        <ul className="project-tech-used">
                            <li className="tech-used">NodeJs</li>
                            <li className="tech-used">ReactJs</li>
                            <li className="tech-used">MongoDB</li>
                            <li className="tech-used">ExpressJS</li>
                            <li className="tech-used">Bootstrap</li>
                        </ul>
                        <div className="project-link">
                        <a href='https://book-crud-app.onrender.com/' target='_blank' rel="noreferrer">Live</a>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>


    <div className="block-1">
              <div className='project-top'>
              <div className="hovering">
                <img className='project-image' src={insta} alt='none'></img>
                <div className='project-bottom'>
                    <div className='project-name'>Insta-Clone</div>
                    <div className="description">
                    <p className="project-description">Insta-clone is a clone website made using MERN stack and user authentication is built using concept of JWT</p>
                    <ul className="project-tech-used">
                        <li className="tech-used">NodeJs</li>
                        <li className="tech-used">ReactJs</li>
                        <li className="tech-used">ExpressJS</li>                    
                        <li className="tech-used">MongoDB</li>
                        <li className="tech-used">JW</li>
                    </ul>
                    <div className="project-link">
                        <a href='https://thankful-shorts-tuna.cyclic.app/' target='_blank' rel="noreferrer">Live</a>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>

    <div className="block-1">
              <div className='project-top'>
              <div className="hovering">
                <img className='project-image' src={emotions} alt='none'></img>
                <div className='project-bottom'>
                    <div className='project-name'>YourEmotion</div>
                    <div className="description">
                    <p className="project-description">YourEmotion is a terminal based python application which identifies your emotion based on the your daily e-diary written by you and suggests movies.</p>
                    <ul className="project-tech-used">
                        <li className="tech-used">Python</li>
                    </ul>
                    <div className="project-link">
                        <a href='https://github.com/VishalJx/Emotion' target='_blank' rel="noreferrer">Live</a>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>


                
            </div>
        </div>
        <Contact/>
    </div>
  )
};

export default Projects;
