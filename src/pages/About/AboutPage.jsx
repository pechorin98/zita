import React, { useEffect, useState } from 'react';
import styles from './about.module.css';
import Type1CompWithAnimation from '../../components/mid/type2Comp/Type1CompWithAnimation';
import Type2CompImgAnimation from '../../components/mid/type2Comp/Type2CompWithAnimation ';
import Type3CompWithAnimation from '../../components/mid/type3Comp/Type3CompWithAnimation';
import Type3Comp from '../../components/mid/type3Comp/Type3Comp';
import Type5Comp from '../../components/mid/type5Comp/Type5Comp';
import Type6Comp from '../../components/mid/type6Comp/Type6Comp';
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();

    const [windowsWith, setWindowsWith] = useState(null);


    useEffect(() => {
        const updateVideoSrc = () => {
            setWindowsWith(window.innerWidth);
        };

        updateVideoSrc();
        window.addEventListener('resize', updateVideoSrc);
        console.log("shot fired")
        console.log(windowsWith)
        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [windowsWith]);

    return (
        <section>
            {/* Who We are component*/}
            <section className={styles.servus}>
                <Type1CompWithAnimation title={t('about_us.who_we_are.title')}
                    text={t('about_us.who_we_are.description')} noButton alt="Zita Aydınlatma Görsel"
                    src="/pages/about/facAbout.webp" size={windowsWith} version="containerLeftTextAbout"
                    imgStyle={{ "width": "400px", "borderRadius": "12px" }} styleContent={{ "width": "60%" }} />
            </section>
            {/*Mission & Vision component*/}
            <section className={styles.servus}>
                <Type3CompWithAnimation title1={t('mission.title')} title2={t('vision.title')}
                    text1={t('mission.description')} text2={t('vision.description')}
                    size={windowsWith} src="/pages/about/aboutVideo.mp4" Component={Type6Comp} />
            </section>
            {/* Our Commitment to quality*/}
            <section className={styles.servus} style={{ "backgroundColor": "#f3f4f6", "paddingTop": "50px", "paddingBottom": "50px" }}>
                <Type3CompWithAnimation Component={Type5Comp} title={t('about_us.commitment.title')}
                    introText={t('about_us.commitment.statement')} size={windowsWith} whatVersion="titleNormal"
                    subTitle1={t('about_us.commitment.features1')} subTitle2={t('about_us.commitment.features2')}
                    subTitle3={t('about_us.commitment.features3')} subText1={t('about_us.commitment.subFeature1')}
                    subText2={t('about_us.commitment.subFeature2')} subText3={t('about_us.commitment.subFeature3')}
                    src="/pages/about/commitSrc.jpg" imgStyle={{ "borderRadius": "12px" }}  alt="Zita Aydınlatma Görsel"/>
            </section>
            {/*What we offer component*/}
            <section className={styles.servus} >
                <Type3CompWithAnimation Component={Type5Comp} title={t('about_us.offerings.title')} size={windowsWith}
                    introText={t('about_us.offerings.statement')} subTitle1={t('about_us.offerings.features1')}
                    subTitle2={t('about_us.offerings.features2')} subTitle3={t('about_us.offerings.features3')}
                    subText1={t('about_us.offerings.subFeature1')} subText2={t('about_us.offerings.subFeature2')}
                    subText3={t('about_us.offerings.subFeature3')} whatVersion="titleUp" src="/pages/about/ultra.webp" alt="Zita Aydınlatma Görsel" />
            </section>
            {/*global Reach Component*/}
            <section className={styles.servus}>
                <Type2CompImgAnimation src1="/pages/about/export.webp" src2="" src3="" size={windowsWith}
                    version="wrapper" isButton={false} contextContainerVersion="contextContainer" imgContainerVersion="imgContainerExport"
                    text={t('about_us.global_reach.description')} title={t('about_us.global_reach.title')} alt="Zita Aydınlatma Görsel"/>
            </section>
            {/*Sertifications Component*/}
            <section className={styles.servus}>
                <Type3CompWithAnimation Component={Type3Comp} title={t('about_us.certifications.title')} size={windowsWith} version="containerLeftText"
                    text={t('about_us.certifications.des1')} text2={t('about_us.certifications.des2')} src="/pages/about/belgeler.webp" alt="Zita Aydınlatma Görsel"/>
            </section>
        </section>
    )

}
export default About;