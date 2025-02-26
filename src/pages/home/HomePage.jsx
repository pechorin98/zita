import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import PrimaryButton from '../../components/micro/primaryDesktopButton/PrimaryButton';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Type3CompWithAnimation from '../../components/mid/type3Comp/Type3CompWithAnimation';
import Type2CompWithAnimation from '../../components/mid/type2Comp/Type2CompWithAnimation ';
import Type1CompWithAnimation from '../../components/mid/type2Comp/Type1CompWithAnimation';
import { Helmet } from 'react-helmet';
import Type7Comp from '../../components/mid/type7Comp/type7Comp';

function Home() {

    const { t } = useTranslation();
    const { lng } = useParams();

    const [videoSrc, setVideoSrc] = useState('/pages/home/banner.mp4');
    const [windowsWith, setWindowsWith] = useState(null);

    useEffect(() => {
        const updateVideoSrc = () => {
            setWindowsWith(window.innerWidth);
            if (window.innerWidth < 768) {
                setVideoSrc('/pages/home/mobilbanner.mp4');
            } else {
                setVideoSrc('/pages/home/banner.mp4');
            }
        };

        updateVideoSrc();
        window.addEventListener('resize', updateVideoSrc);
        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [windowsWith]);

    return (
        <section>
            <Helmet>
                <title>Zita Aydınlatma |  Lighting for Homes & Businesses</title>
                <meta name="description" content="Welcome to Zita Aydınlatma. Discover our high-quality lighting solutions for your home and business." />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {/*Banner*/}
            <section style={{ "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "backgroundColor": "black" }}>
                <video autoPlay muted playsInline className={styles.bannerVideo} preload='auto'>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </section>
            <div style={{ "marginTop": "20px", "display": "flex", "justifyContent": "center", "alignItems": "center" }} className={styles.bannerBtnContainer}>
                <PrimaryButton text="Learn More!" navRoute={`/${lng}/Product`} />
            </div>
            {/*Product Component*/}
            <section>
                <Type1CompWithAnimation title={t('home.products.title')}
                    version="containerLeftText"
                    text={t('home.products.description')}
                    buttonText={t('home.products.button')} buttonUrl="/pdfs/zitaKatalog.pdf"
                    src="/envImg/katalogv2.webp" imgStyle={{ "width": "500px" }} size={windowsWith} style={{ "marginTop": "50px" }} isBlank/>
            </section>
            {/*About Us Component*/}
            <section>
                <Type1CompWithAnimation title={t('home.about_us.title')}
                    text={t('home.about_us.description')} version="containerRightText"
                    buttonText={t('home.about_us.button')} buttonUrl={`/${lng}/About`}
                    src="/envImg/logo.webp" imgStyle={{ "marginTop": "122px", "marginRight": "50px" }} size={windowsWith} />
            </section>
            {/*Certifications Component*/}
            <section style={{ "marginTop": "100px" }}>
                <Type2CompWithAnimation title={t('home.certifications.title')}
                    text={t('home.certifications.description')} buttonRoute={`/${lng}/Certifications`}
                    src2="/envImg/ptcser.webp" src3="/envImg/emcser.webp" src1="/envImg/RoHSser.webp" isButton
                    buttonText={t('home.certifications.button')} version="wrapper" imgContainerVersion="imgContainer" />
            </section>
            {/*Contact Component*/}
            <section className={styles.contactContainer} style={{ "display": "none" }}>
                <Type1CompWithAnimation title={t('home.contact.title')}
                    text={t('home.contact.description')} buttonText={t('home.contact.button')} src="" version="containerLeftText"
                    buttonUrl={`/${lng}/Contact`} size={windowsWith} />
            </section>
            <section>
                <Type3CompWithAnimation Component={Type7Comp} title={t('home.contact.title')}
                    text={t('home.contact.description')} buttonText={t('home.contact.button')} src="" version="containerLeftText"
                    buttonUrl={`/${lng}/Contact`} size={windowsWith} />
            </section>
        </section>
    )
};
export default Home;
