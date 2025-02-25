import React from 'react';
import styles from './type1Comp.module.css';
import PrimaryButton from '../../micro/primaryDesktopButton/PrimaryButton';
import MyMap from '../../../services/myMap';

function Type1Comp({ version, buttonText, title, text, src, alt, buttonUrl, imgStyle, size, style, noButton, styleContent }) {
    return (
        <section className={styles.wrapper} style={style}>
            <section className={styles[version]}>
                {size > 900 && (src ? <img src={src} alt="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting" className={styles.imgStyle} style={imgStyle} loading='lazy' /> : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5857663704087!2d28.752782577068793!3d41.056186871343826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3e78ee75c0f%3A0x163a476e01cea62a!2sZita%20Aydinlatma!5e0!3m2!1sen!2str!4v1740427130669!5m2!1sen!2str" className={styles.map}></iframe>)}
                <div className={styles.contextCol} style={styleContent}>
                    <h1 className='titleText' style={{ marginBottom: '24px' }}>{title}</h1>
                    {size < 900 && (src ? <img src={src} alt="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting" className={styles.imgStyle} style={imgStyle} loading='lazy' /> : <MyMap/>)}
                    <p className='paraText' style={{ marginBottom: '32px' }}>{text}</p>
                    {!noButton && <PrimaryButton text={buttonText} navRoute={buttonUrl} />}
                </div>
            </section>
        </section>
    );
}

export default Type1Comp;   