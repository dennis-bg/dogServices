import React from "react";
import { createPortal } from "react-dom";
import {  NavLinks } from '../../navlinks'
import { CloseSVG } from '../../../../svgs/close';
import styles from './styles.module.css';

export const MenuPanel = ({ handleClose }) => {

    return (
        <>
        {createPortal(
            <div className={styles.panel}>
                <div onClick={handleClose}><CloseSVG/></div>
                <NavLinks handleClose={handleClose}/>
            </div>
        , document.getElementById('portal'))}
        </>
    )
}