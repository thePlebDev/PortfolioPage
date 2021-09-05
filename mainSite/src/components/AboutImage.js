import React from 'react';
import faceImage from '../images/ProfilePictureTwo.jpg'


const AboutImage =()=>{
    return(
        <div style={{color:"white"}}>
            <img class="aboutImage" src={faceImage} alt="picture of my face... I am very pretty"/>
            <div class ="typewritter">Name : <span class="cyberColor">Tristan Elliott</span></div>
            <div class ="typewritter">Age : <span class="cyberColor">25</span></div>
            <div class ="typewritter">Location: <span class="cyberColor">New Brunswick, Canada</span></div>
            <div class ="typewritter">Intrests: <span class="cyberColor">Hiking and software development</span></div>
            <div class ="typewritter"> Twitter: <a href="https://twitter.com/TristAndroidDev" target="_blank" rel="noopener noreferrer"><span class="cyberColor" >@TristAndroidDev</span></a></div>
            <div class ="typewritter">Special Ability: <span class="cyberColor">
                Starting at computer screens for long periods of time
                </span>
                </div>
            
        </div>
    )
}

export default AboutImage