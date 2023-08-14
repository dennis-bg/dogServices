import React from "react";
import { Link } from 'react-scroll';
import { Container } from "../common/container";
import { NavLinks } from "./navlinks";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { MobileMenu } from "./mobileMenu";
import styles from './styles.module.css'
import { LogoSVG } from "../../svgs/logo";

export const Navbar = () => {

  const screenWidth = useWindowWidth();

  return (
        <div className={styles.navBar}>
              
          
          <Container>

            <div className={styles.links}>
                <Link activeClass={styles.active} to="hero" smooth={true} offset={-65} duration={1000}>
                  <LogoSVG/>
                </Link>

                {screenWidth > 1200 && <NavLinks/>}

            </div>
                    
            {screenWidth < 1200 && <MobileMenu/>}
          </Container>

        
      
      </div>
    )
}