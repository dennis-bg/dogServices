import React from "react";
import { Link } from 'react-scroll';
import styles from './styles.module.css';

export const NavLinks = ({ handleClose }) => {

    const handleLiClick = (e) => {
        if(e.target.localName === 'a'){
          return;
        }
        e.target.children[0].click();
      }

    return (
        <nav className={styles.navLinks}>
            <ul>
                <li onClick={e => handleLiClick(e)}>
                  <Link activeClass={styles.active} to="booking" smooth={true} offset={-65} duration={1000} spy={true} onClick={handleClose}>Book</Link>
                </li>
                <li onClick={e => handleLiClick(e)}>
                  <Link activeClass={styles.active} to="gallery" smooth={true} offset={-65} duration={1000} spy={true} onClick={handleClose}>Gallery</Link>
                </li>
                <li onClick={e => handleLiClick(e)}>
                  <Link activeClass={styles.active} to="projects" smooth={true} offset={-65} duration={1000} spy={true} onClick={handleClose}>Community</Link>
                </li>
                <li onClick={e => handleLiClick(e)}>
                  <Link activeClass={styles.active} to="contact" smooth={true} offset={-65} duration={1000} spy={true} onClick={handleClose}>Contact</Link>
                </li>           
            </ul>
        </nav>
    )
    
}