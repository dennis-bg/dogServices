import React from "react";
import styles from './styles.module.css'

export const Container  = ({children}) => (
    <div className={styles.center}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);