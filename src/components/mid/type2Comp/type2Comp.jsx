import React from 'react';
import styles from './type2.module.css';
import PrimaryButton from '../../micro/primaryDesktopButton/PrimaryButton';

function Type2Comp({ src1, src2, src3, text, title, isButton, buttonText, buttonRoute, version, imgContainerVersion,contextContainerVersion }) {

    return (
        <section className={styles[version]}>
            <section className={styles.container}>
                <div className={styles[contextContainerVersion]}>
                    <h1 className='titleText' style={{ "marginBottom": "24px" }}>{title}</h1>
                    <p className='paraText' style={{ "marginBottom": "32px" }}>{text}</p>
                </div>
                <div className={styles[imgContainerVersion]}>
                    <img src={src1} alt="Zita aydınlatma sertifika veya katolog görselleri" />
                    {src2 !== "" && <img src={src2} alt="Zita aydınlatma sertifika veya katolog görselleri" />}
                    {src3 !== "" && <img src={src3} alt="Zita aydınlatma sertifika veya katolog görselleri" />}
                </div>
                <div style={{ "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "48px" }}>
                    {isButton && <PrimaryButton text={buttonText} navRoute={buttonRoute} />}
                </div>
            </section>
        </section>
    );

};
export default Type2Comp;