import React from 'react';
import styles from './type2.module.css';
import PrimaryButton from '../../micro/primaryDesktopButton/PrimaryButton';


function Type2Comp({ src1, src2, src3, text, title, isButton, buttonText, buttonRoute, version, imgContainerVersion, contextContainerVersion, imgStyle1, imgStyle2, imgStyle3, route1, route2, route3 }) {

    return (
        <section className={styles[version]}>
            <section className={styles.container}>
                <div className={styles[contextContainerVersion]}>
                    <h1 className='titleText' style={{ "marginBottom": "24px"}}>{title}</h1>
                    <p className='paraText' style={{ "marginBottom": "32px" }}>{text}</p>
                </div>
                <div className={styles[imgContainerVersion]}>
                    <a  className={styles.imgContainerLink} href={route1} target='_blank'><img src={src1} loading="lazy" alt="Zita aydınlatma sertifika veya katolog görselleri" style={imgStyle1} /></a>
                    {src2 !== "" && <a href={route2} target='_blank' className={styles.imgContainerLink} ><img loading="lazy"  src={src2} alt="Zita aydınlatma sertifika veya katolog görselleri" style={imgStyle2} /></a>}
                    {src3 !== "" && <a href={route3} target='_blank' className={styles.imgContainerLink} ><img loading="lazy" src={src3}  alt="Zita aydınlatma sertifika veya katolog görselleri" style={imgStyle3} /></a>}
                </div>
                <div style={{ "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "48px" }}>
                    {isButton && <PrimaryButton text={buttonText} navRoute={buttonRoute} />}
                </div>
            </section>
        </section>
    );

};
export default Type2Comp;