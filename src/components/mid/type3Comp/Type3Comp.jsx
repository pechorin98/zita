import React from 'react';
import styles from './Type3Comp.module.css';

function Type3Comp({ version, title, text, src, alt, imgStyle, size, style, text2 }) {

    return (
        <section className={styles.wrapper} style={style}>
            <section className={styles[version]}>
                {size > 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle} />}
                <div className={styles.contextCol}>
                    <h1 className='titleText' style={{ "marginBottom": "48px" }}>{title}</h1>
                    {size <= 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle} />}
                    {/*Mobil için olan layout düzenlemesi p elementi için global cssdedir*/}
                    <div className={styles.textContainer}>
                        <p className='paraText' >{text}</p>
                        <p className='paraText'>{text2}</p>
                    </div>
                </div>
            </section>
        </section>
    );

};
export default Type3Comp;