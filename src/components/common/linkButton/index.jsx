import React from "react";
import styles from './styles.module.css'

export const LinkButton = ({ link, text, svg }) => (
    <a target="_blank" rel="noopener noreferrer" href={link} className={styles.link}>
        <span>{text}</span>{svg()}
    </a>
)