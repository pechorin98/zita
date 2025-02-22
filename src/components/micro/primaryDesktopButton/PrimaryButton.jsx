import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton({navRoute,text,style,onClick}){

    return(
        <a href={navRoute} className={styles.primaryButton} style={style}>{text}</a>
    )

};
export default PrimaryButton;