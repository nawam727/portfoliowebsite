import React, { useEffect, useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiBook, BiHomeAlt, BiUser } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Assuming each section has an 'id'
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveNav(`#${section.id}`);
        }
      });

      // Check if scroll position is at the top of the page
      if (scrollPosition === 0) {
        setActiveNav('#');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <BiHomeAlt />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
