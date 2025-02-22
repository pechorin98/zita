import React from 'react';
import styles from './type5Comp.module.css';

function Type5Comp({ whatVersion, title, introText, subTitle1, subTitle2, subTitle3, subText1, subText2, subText3, size, imgStyle, src, alt }) {

    return (
        <section className={styles.wrapper}>
            {whatVersion === 'titleUp' && (
                <div className={styles.upContext}>
                    <h1 className='titleText'>{title}</h1>
                    <p className='paraText'>{introText}</p>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    {whatVersion === "titleNormal" && (
                        <div className={styles.normalContext}>
                            <div>
                                <h1 className='titleText'>{title}</h1>
                                <p className='paraText'>{introText}</p>
                            </div>
                        </div>
                    )}
                    {size <= 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle}  loading='lazy'/>}
                    <ul className={styles.listContainer}>
                        <li>
                            <div className={styles.countContainer}>
                                <p className='paraText'>{subTitle1}</p>
                                <div style={{ margin: "0", padding: "0" }}>
                                    <p className='subText'>{subText1}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.countContainer}>
                                <p className='paraText'>{subTitle2}</p>
                                <div style={{ margin: "0", padding: "0" }}>
                                    <p className='subText'>{subText2}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.countContainer}>
                                <p className='paraText'>{subTitle3}</p>
                                <div style={{ margin: "0", padding: "0" }}>
                                    <p className='subText'>{subText3}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {size > 1024 && <img src={src} alt={alt} className={styles.imgStyle} style={imgStyle} loading='lazy' />}
            </div>
        </section>
    );
}

export default Type5Comp;