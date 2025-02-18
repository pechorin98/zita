import react from 'react';
import styles from './type4Comp.module.css';

function Type4Comp({ version, title, text, src, alt, imgStyle, size, style, text2, text3 }) {

    return (
        <section className={styles.wrapper} style={style}>
            <section className={styles[version]}>
                {size > 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle} />}
                <div className={styles.contextCol}>
                    <h1 className='titleText' style={{ "marginBottom": "48px" }}>{title}</h1>
                    {size <= 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle} />}
                    {/*Mobil için olan layout düzenlemesi p elementi için global cssdedir*/}
                    <div className={styles.textContainer}>
                        <p className='paraText'>{text}</p>
                        <p className='paraText'>{text2}</p>
                        <p className='paraText'>{text3}</p>
                    </div>
                </div>
            </section>
        </section>
    );

};
export default Type4Comp;