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
import LanguagePopup from '../../components/micro/LanguagePopUp/LanguagePopUp';

function Home() {
    const { t } = useTranslation();
    const { lng } = useParams();

    const [videoSrc, setVideoSrc] = useState('');
    const [windowsWith, setWindowsWith] = useState(window.innerWidth);
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    useEffect(() => {
        const updateVideoSrc = () => {
            const isMobile = window.innerWidth < 768;
            setVideoSrc(isMobile ? "/pages/home/mobilbanner.mp4" : "/pages/home/banner.mp4");
        };

        updateVideoSrc(); // Run immediately

        // 🔥 Fixes iPhone issue: Safari sometimes loads desktop first
        setTimeout(() => {
            updateVideoSrc();
        }, 100); // Small delay to ensure correct width

        window.addEventListener("resize", updateVideoSrc);
        return () => {
            window.removeEventListener("resize", updateVideoSrc);
        };
    }, []);

    return (
        <section>
            <Helmet>
                <title>Zita Aydınlatma | Bahçe Aydınlatma, Dış Mekan Aydınlatma ve Toptan Aydınlatma Çözümleri, İstanbul’da Aydınlatma Fabrikası</title>
                <meta name="description" content="Zita Aydınlatma, dış mekan ve bahçe aydınlatmada 10 yılı aşan tecrübe ve üretim. İstanbul’da %100 Yerli Üretim ürünlerimizi incelemek için sitemize göz atın." />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {windowsWith <= 1024 && (
                <div>
                    <LanguagePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
            )}

            {/* 🔥 Banner Section */}
            <section className={styles.bannerContainer}>
                <video
                    autoPlay
                    muted
                    playsInline
                    key={videoSrc} // 🔥 Forces video reload when src changes
                    className={styles.bannerVideo}
                    preload="auto"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </section>

            {/* 🔥 Learn More Button */}
            <div className={styles.bannerBtnContainer}>
                <PrimaryButton text={t('buttons.learn_more')} navRoute={`/${lng}/Product`} />
            </div>

            {/* 🔥 Product Section */}
            <section>
                <Type1CompWithAnimation 
                    title={t('home.products.title')}
                    version="containerLeftText"
                    text={t('home.products.description')}
                    buttonText={t('home.products.button')}
                    buttonUrl="/pdfs/zitaKatalog.pdf"
                    src="/envImg/katalogV2.webp"
                    imgStyle={{ width: "500px" }}
                    size={windowsWith}
                    style={{ marginTop: "50px" }}
                    isBlank
                />
            </section>

            {/* 🔥 About Us Section */}
            <section>
                <Type1CompWithAnimation 
                    title={t('home.about_us.title')}
                    text={t('home.about_us.description')}
                    version="containerRightText"
                    buttonText={t('home.about_us.button')}
                    buttonUrl={`/${lng}/About`}
                    src="/envImg/logo.webp"
                    imgStyle={{ marginTop: "122px", marginRight: "50px" }}
                    size={windowsWith}
                />
            </section>

            {/* 🔥 Certifications Section */}
            <section style={{ marginTop: "100px" }}>
                <Type2CompWithAnimation 
                    title={t('home.certifications.title')}
                    text={t('home.certifications.description')}
                    buttonRoute={`/${lng}/Certifications`}
                    src2="/envImg/ptcser.webp"
                    src3="/envImg/emcser.webp"
                    src1="/envImg/RoHSser.webp"
                    isButton
                    buttonText={t('home.certifications.button')}
                    version="wrapper"
                    imgContainerVersion="imgContainer"
                />
            </section>

            {/* 🔥 Contact Section */}
            <section className={styles.contactContainer} style={{ display: "none" }}>
                <Type1CompWithAnimation 
                    title={t('home.contact.title')}
                    text={t('home.contact.description')}
                    buttonText={t('home.contact.button')}
                    src=""
                    version="containerLeftText"
                    buttonUrl={`/${lng}/Contact`}
                    size={windowsWith}
                />
            </section>

            <section>
                <Type3CompWithAnimation 
                    Component={Type7Comp}
                    title={t('home.contact.title')}
                    text={t('home.contact.description')}
                    buttonText={t('home.contact.button')}
                    src=""
                    version="containerLeftText"
                    buttonUrl={`/${lng}/Contact`}
                    size={windowsWith}
                />
            </section>
        </section>
    );
};

export default Home;
