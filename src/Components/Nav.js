import React, { useState } from "react"
import '../Style/Nav.css'
import {Link} from 'react-router-dom'
import { FiHome,FiUsers,FiLayers,FiPhone } from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineClose} from "react-icons/md"

function Nav(){
  const [show, setShow] = useState(false);
  const toggleButton=()=>{   //receiving post parameter from onClick.
    if(show){
      setShow(false);
    }else{
      setShow(true);
    }
  }
  return (
    <div className='nav-body'>
        <div className='nav'>
                <div className="name">VishalJx<span id='dot'>.</span></div>
                <ul className="nav-menu-list">
                    <li><FiHome color='white' /><Link className='list-items' smooth to='/'>Home</Link></li>
                    <li><FiUsers color='white'/><Link className='list-items' smooth to='/about'>About</Link></li>
                    <li><FiLayers color='white'/><Link className='list-items' smooth to='/projects'>Project</Link></li>
                    <li><FiPhone color='white'/><Link className='list-items' smooth to='/contact'>Contact</Link></li>
                </ul>
                <a href='#null' className='toggle-button' onClick={()=>toggleButton()}>
                    <GiHamburgerMenu/>
                </a>
        </div>

        {
          show &&(
            <div>
                <ul className="ham-list">
                  <li><FiHome  className="ham-icon" color='white' /><Link className='ham-item' to='/' onClick={()=>setShow(false)}>Home</Link></li>
                  <li><FiUsers className="ham-icon"  color='white' /><Link className='ham-item' to='/about' onClick={()=>setShow(false)}>About</Link></li>
                  <li><FiLayers  className="ham-icon" color='white' /><Link className='ham-item' to='/projects' onClick={()=>setShow(false)}>Project</Link></li>
                  <li><FiPhone className="ham-icon"  color='white' /><Link className='ham-item' to='/contact' onClick={()=>setShow(false)}>Contact</Link></li>
              </ul>
              <div className="close-ham" onClick={()=>toggleButton()}>
                <span><MdOutlineClose/></span>
              </div>
            </div>
          )
        }



    </div>
  )
};

export default Nav;
