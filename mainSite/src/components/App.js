import React from 'react';
import "../styles/index.scss";

import Title from './Title';
import Projects from './Projects';
import About from './About'



const App = ()=>{
    return(
        <>
        <Title/>
        <About/>
        <Projects/>
        </>
    )
}

export default App