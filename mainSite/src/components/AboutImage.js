import React from 'react';
import faceImage from '../images/ProfilePictureTwo.jpg'


const AboutImage =()=>{
    return(
        <div style={{color:"white"}}>
            <img className="aboutImage" src={faceImage} alt="picture of my face... I am very pretty"/>
            <div className ="typewritter">Name : <span className="cyberColor">Tristan Elliott</span></div>
            <div className ="typewritter">Age : <span className="cyberColor">25</span></div>
            <div className ="typewritter">Location: <span className="cyberColor">New Brunswick, Canada</span></div>
            <div className ="typewritter">Intrests: <span className="cyberColor">Java, C++, mobile and backend development</span></div>
            <div className ="typewritter"> Twitter: <a href="https://twitter.com/TristAndroidDev" 
            target="_blank" rel="noopener noreferrer"><span className="cyberColor" >@TristAndroidDev</span></a></div>
            <div className ="typewritter">Special Ability: <span className="cyberColor">
                Starting at documentation for long periods of time
                </span>
                </div>
            
        </div>
    )
}

export default AboutImage

