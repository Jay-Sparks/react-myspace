import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Styling
import style from './HomePage.module.css';

// Containers
// import SkillsView from '../Skills/Skills.js';
import Project from '../Project/Project.js';
import Experience from '../Experience/Experience.js';


//Components
import Contact from '../Contact/Contact';

// 3D model(s)
import Painting from '../../components/3dModels/ScenePainting';

function HomePage() {

  const [ welcomeTime, setWelcomeTime ] = useState();
  const [ scale, setScale ] = useState(0.88);


  useEffect(() => {
    setWelcomeTime(getDateTime());
     mediaQuery(x);
  }, []);

  const getDateTime = () => {
    const date = new Date();
    const hour = date.getHours();
    let welcomeMessage = "";
    if (hour > 0 && hour < 12) {
      welcomeMessage = "Morning";
    } else if (hour >= 12 && hour <= 17) {
      welcomeMessage = "Afternoon";
    } else {
      welcomeMessage = "Evening";
    }
    return welcomeMessage;
  };

  
  function mediaQuery(x) {
    if (x.matches) {
      setScale(0.69);
    } else {
      setScale(0.88);
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
 
  x.addEventListener("change", mediaQuery);


  return (
    <>

      <div className={style.HomePage}>
        
        <section id="home">
          <div className={style.topContainer}>
            <div className={style.contentWrapper}>
              <div className={style.Content}>
                <h2>Good {welcomeTime}! <span role="img" aria-label="wave">👋</span></h2>
                <h2>I'm Jay Spencer,</h2>
                <h2>A creative front-end <br/>
                web developer</h2>
              </div>
            </div>
            
            <Canvas className={style.Canvas} >
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.35}/>
              <Painting paintScale={scale}/>
            </Canvas>
            
          </div>
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default HomePage;
