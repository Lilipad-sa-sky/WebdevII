//IMPORTS
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
//WHEN USER SCROLLS 50PX THEN THE NAVBAR TURNS BLACK FOR VISIBILITY
    const [sticky, setSticky] = useState(false);
    useEffect(() =>{
      window.addEventListener("scroll", () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return (
    //LINKING IT SO THEY CAN VIEW THE OTHERPAGES
    <nav className= {`'container' ${sticky? "blacknav" : ""}`}>
        <ul>
            <li><Link to="/" style={{textDecoration: "none", color: "inherit"}}>Home</Link></li>
            <li><Link to="/daily-life" style={{textDecoration: "none", color: "inherit"}}>Daily Life</Link></li>
            <li><Link to="/emperors" style={{textDecoration: "none", color: "inherit"}}>Emperors</Link></li>
            <li><Link to="/mythology" style={{textDecoration: "none", color: "inherit"}}>Mythology</Link></li>
            <li><Link to="/architecture" style={{textDecoration: "none", color: "inherit"}}>Architecture</Link></li>
            <li><Link to="/military" style={{textDecoration: "none", color: "inherit"}}>Military</Link></li>
            <li><Link to="/signup" style={{textDecoration: "none", color: "inherit"}}>Log In / Sign Up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
//END
//NEVER USING REACT AGAIN I HATE THIS