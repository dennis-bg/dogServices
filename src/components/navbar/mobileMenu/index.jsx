import React, { useState } from "react";
import { HamburgerMenu } from '../../../svgs/hamburger-menu';
import { MenuPanel } from "./menuPanel";
import styles from './styles.module.css'

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <HamburgerMenu/>
            </div>
            {isOpen && <MenuPanel handleClose={toggleMenu}/>}
        </>
        
    )
}