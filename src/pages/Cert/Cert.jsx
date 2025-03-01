import React from 'react';
import styles from './Cert.module.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {useTranslation} from 'react-i18next';

function Cert() {

    const { lng } = useParams();
    const {t} = useTranslation();

    return (
        <section className={styles.wrapper}>
            <Helmet>
                <title>Zita Aydınlatma - Certifications</title>
                <meta name="description" content="View the certifications of Zita Aydınlatma. Explore our certifications to ensure the quality and standards of our lighting products." />
                <meta name="keywords" content="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting, Certifications, EMC, PTC, RoHS, ISO" />
            </Helmet>
            <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "32px", "flexDirection": "column", "rowGap": "16px" }}>
                <h1 className='titleText'>{t('certifications.title')}</h1>
                <p className='paraText'>{t('certifications.instruction')}</p>
            </div>
            <section className={styles.container}>
                <a href="/pdfs/emc.pdf"><img className={styles.imgContainer} src="/envImg/emcser.webp" alt="Zita aydınlatma sertifika" /></a>
                <a href="/pdfs/ptc.pdf"><img className={styles.imgContainer} src="/envImg/ptcser.webp" alt="Zita aydınlatma sertifika" /></a>
                <a href={"/pdfs/Rohs.pdf" }><img className={styles.imgContainer} src="/envImg/RoHSser.webp" alt="Zita aydınlatma sertifika" /></a>
                <a href="/pdfs/ISO9001.pdf"><img className={styles.imgContainer} src="/envImg/certifikaxd.webp" alt="Zita aydınlatma sertifika" /></a>
            </section>
        </section>
    )
};
export default Cert;
