import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton({navRoute,text,style,blank}){

    return(
        <a href={navRoute} className={styles.primaryButton} style={style} target={blank && '_blank'}>{text}</a>
    )

};
export default PrimaryButton;