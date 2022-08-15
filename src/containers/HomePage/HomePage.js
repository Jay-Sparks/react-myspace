import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLocation } from "react-router-dom";

// Styling
import style from './HomePage.module.css';

// Containers
import Project from '../Project/Project.js';
import Experience from '../Experience/Experience.js';

//Components
import NavigationItems from '../../components/Navigation/NavigationItems';
import Logo from '../../components/Logo/Logo';
import Contact from '../Contact/Contact';

// 3D model(s)
import Painting from '../../components/3dModels/ScenePainting';

function HomePage() {
  const [ welcomeTime, setWelcomeTime ] = useState();
  useEffect(() => {
    setWelcomeTime(getDateTime());
  }, []);

  const getDateTime = () => {
    const date = new Date();
    const hour = date.getHours();
    console.log(date);
    console.log(hour);
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

  const { hash } = useLocation();
  console.log(hash);

  return (
    <>
      <div className={style.HomePage}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <div className={style.NavBar}>
          <NavigationItems />
        </div>
        <section id="home">
          <div className={style.topContainer}>
            
            <div className={style.contentWrapper}>
              <div className={style.Content}>
                <h2>👋 Good {welcomeTime}</h2>
                <h2>I'm Jay Spencer</h2>
                <h1>A creative front-end <br/>
                web developer</h1>
              </div>
            </div>
            <Canvas className={style.Canvas} >
              <OrbitControls enableZoom={false} enablePan={false} />
              <Painting />
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
