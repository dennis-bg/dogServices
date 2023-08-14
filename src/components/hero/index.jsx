import React from "react";
import styles from './styles.module.css'
import { LogoSVG } from "../../svgs/logo";
import { HeroBottomLeftSVG } from "../../svgs/heroBottomLeft";
import { HeroTopRightSVG } from "../../svgs/heroTopRight";
import { LogoWithName } from "../../svgs/logoWithName";


export const Hero = () => (  
    <div className={styles.hero}>
        <div className={styles.center}>
            {/* <LogoSVG/>
            <h1>DENNIS GALINSKY</h1>
            <h2>DOG SERVICES</h2> */}
            <LogoWithName/>
        </div>
        <div className={styles.bottomLeft}>
            <HeroBottomLeftSVG/>
        </div>
        <div className={styles.topRight}>
            <HeroTopRightSVG/>
        </div>
    </div>
)