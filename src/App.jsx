import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';
import Articles from './components/articles/Articles';
import Preloader from './components/preloader/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Education />
          <Articles />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
