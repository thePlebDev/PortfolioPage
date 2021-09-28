import React from 'react';


const Projects =()=>{

    return(
        <div style={{height:"100vh"}} id="projects">
            <h1  className="glitchText">
            <span aria-hidden="true">Projects</span>
                Projects
            <span aria-hidden="true">Projects</span>
            </h1>

            <div style={{color:"white"}}>
                <div class ="typewritter">Name: <span class="cyberColor">Calving Tracker</span></div>
                <div class ="typewritter">Technology: <span class="cyberColor">Android</span></div>
                <div class ="typewritter">About: <span class="cyberColor">A Android app to help farmers track calves during calving season</span></div>
                <div class ="typewritter">Status: <span class="cyberColor">Live</span></div>
                <div class ="typewritter"> Code: <a href="https://github.com/thePlebDev/Calf-tracker/tree/master" target="_blank" rel="noopener noreferrer"><span class="cyberColor" >GitHub</span></a></div>
                <div class ="typewritter"> Link: <a href="https://play.google.com/store/apps/details?id=com.elliottSoftware.ecalvingtracker" target="_blank" rel="noopener noreferrer"><span class="cyberColor" >Google Play Store</span></a></div>
             </div>

             <div style={{color:"white","margin-top":"60px"}}>
                <div class ="typewritter">Name: <span class="cyberColor">Dev.to blog posts</span></div>
                <div class ="typewritter">Technology: <span class="cyberColor">Android, Java and computer science</span></div>
                <div class ="typewritter">About: <span class="cyberColor">I write text based tutorials on Android, Java and computer science</span></div>
                <div class ="typewritter"> Link: <a href="https://dev.to/theplebdev" target="_blank" rel="noopener noreferrer"><span class="cyberColor" >Dev.to blog profile</span></a></div>
                
             </div>

        </div>
    )
}

export default Projects