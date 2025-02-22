import React from "react";
import styles from './type6Comp.module.css';

function Type6Comp({ size, title1, title2, text1, text2, src }) {


    return (
        <section className={styles.wrapper}>
            {size > 1024 && (
                <section className={styles.container}>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentBox}>
                            <h1 className="titleText" style={{"marginBottom":"16px"}}>{title1}</h1>
                            <p className="paraText">{text1}</p>
                        </div>
                        <div className={styles.contentBox}>
                            <h1 className="titleText" style={{"marginBottom":"16px"}}>{title2}</h1>
                            <p className="paraText">{text2}</p>
                        </div>
                    </div>
                    <video autoPlay muted playsInline loop className={styles.videoContainer} preload="auto">
                        <source src={src}  type="video/mp4" />
                    </video>
                </section>
            )}{size <= 1024 && (
                <section className={styles.container}>
                    <div className={styles.contentBox}>
                        <h1 className="titleText" >{title1}</h1>
                        <p className="paraText">{text1}</p>
                    </div>
                    <video autoPlay muted playsInline loop className={styles.videoContainer} preload="auto">
                        <source src={src}  type="video/mp4"/>
                    </video>
                    <div className={styles.contentBox}>
                        <h1 className="titleText">{title1}</h1>
                        <p className="paraText">{text1}</p>
                    </div>
                </section>
            )}
        </section>
    );

};
export default Type6Comp;