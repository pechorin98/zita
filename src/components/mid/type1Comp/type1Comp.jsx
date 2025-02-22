import React from 'react';
import styles from './type1Comp.module.css';
import PrimaryButton from '../../micro/primaryDesktopButton/PrimaryButton';
import MyMap from '../../../services/myMap';

function Type1Comp({ version, buttonText, title, text, src, alt, buttonUrl, imgStyle, size ,style,noButton,styleContent}) {


    return (
        <section className={styles.wrapper} style={style}>
            <section className={styles[version]}>
                {size > 900 && (src !== "" ? <img src={src} alt="Zita aydınlatma Görseli" className={styles.imgStyle} style={imgStyle} loading='lazy' /> : <MyMap />)}
                <div className={styles.contextCol} style={styleContent}>
                    <h1 className='titleText' style={{ "marginBottom": "24px" }}>{title}</h1>
                    {size < 900 && (src !== "" ? <img src={src} alt="Zita aydınlatma Görseli" className={styles.imgStyle} style={imgStyle} loading='lazy'/> : <MyMap />)}
                    {/*Mobil için olan layout düzenlemesi p elementi için global cssdedir*/}
                    <p className='paraText' style={{ "marginBottom": "32px" }}>{text}</p>
                    {!noButton && <PrimaryButton text={buttonText} navRoute={buttonUrl} />}
                </div>
            </section>
        </section>
    )

};  
export default Type1Comp;