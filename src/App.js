import "./styles.css";
import React from 'react'

import { FaBars } from "react-icons/fa6";
import { IconName } from "react-icons/fa6";


import Navbar from "./components/Navbar";
import logo from "./img/logo2.png";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Fancysection from "./components/Fancysection";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function App() {
  return (
    <div className="App">
      <Navbar>
       <Logo src={logo} />
       <div className='link-container'>
       <a href="">Global</a>
       <a href="">Support</a>
       <Button title ={'Sign up'}  />
       <FaBars style={{
        color:'black',
        marginLeft:'25px',
        fontSize:'20px'
       }}/>
    
       
      
       </div>
      
    

        </Navbar>
        <div className="main-background">
          <div className='main-background-child' style={{
            marginBottom :'120px'}
          }>
            <p>The food you love, delivered fast</p>
            <Button title='Get the app'e='Get the app'ee='Get the app'e/>
          </div>
        </div>

     <Fancysection heading={'Make money with food delivery'}/>
    </div>
  );
}
