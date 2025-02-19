import React from 'react';
import styles from './Cert.module.css';
import { useParams } from 'react-router-dom';

function Cert() {

    const {lng} = useParams();

    return (
        <section className={styles.wrapper}>
            <div style={{"display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"32px","flexDirection":"column","rowGap":"16px"}}>
                <h1 className='titleText'>Certifications</h1>
                <p className='paraText'>To view the certification file, please click on the corresponding image.</p>
            </div>
            <section className={styles.container}>
                <a href={`/${lng}/Emc`}><img className={styles.imgContainer} src="/envImg/emcser.webp" alt="Zita aydınlatma sertifika" /></a>
                <a href={`/${lng}/Ptc`}><img className={styles.imgContainer} src="/envImg/ptcser.webp" alt="Zita aydınlatma sertifika" /></a>
                <a href={`/${lng}/Rohs`}><img className={styles.imgContainer} src="/envImg/RoHSser.png" alt="Zita aydınlatma sertifika" /></a>
                <a href={`/${lng}/Iso`}><img className={styles.imgContainer} src="/envImg/certifikaxd.webp" alt="Zita aydınlatma sertifika" /></a>
            </section>
        </section>
    )
};
export default Cert;
