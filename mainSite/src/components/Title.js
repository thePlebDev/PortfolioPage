import React from 'react'
import {Link} from "react-scroll";



const Title =()=>{

    return(
        <div style={{height:"100vh"}}>
        <div class="container" >
            <h1 class="title">Elliott Software</h1>
        </div>
        <div  class="subcontainer">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >
                <button class="hover-text">About</button>
                </Link>
                <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >
                <button class="hover-text">Projects</button>
                </Link>
            <a href="https://twitter.com/TristAndroidDev" target="_blank" rel="noopener noreferrer"> 
            <button class="hover-text">Contact</button>
            </a>
            
        </div>
        </div>
    )
}



export default Title