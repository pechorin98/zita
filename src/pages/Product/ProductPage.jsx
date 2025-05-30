import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import { useTranslation } from 'react-i18next';
import Type2CompImgAnimation from '../../components/mid/type2Comp/Type2CompWithAnimation ';
import Type3CompWithAnimation from '../../components/mid/type3Comp/Type3CompWithAnimation';
import { useParams } from 'react-router-dom'
import Type3Comp from '../../components/mid/type3Comp/Type3Comp';
import Type4Comp from '../../components/mid/type4Comp/Type4Comp';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PrimaryButton from '../../components/micro/primaryDesktopButton/PrimaryButton';
import  ContactPopup from '../../components/macro/PurchaseModal/PurchaseModal';

function Product() {

    const { t } = useTranslation();
    const { lng } = useParams();
    const navigate = useNavigate();

    const [windowsWith, setWindowsWith] = useState(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsPopupOpen(true)
        },1000)
    },[])

    useEffect(() => {
        const updateVideoSrc = () => {
            setWindowsWith(window.innerWidth);
        };

        updateVideoSrc();
        window.addEventListener('resize', updateVideoSrc);
        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [windowsWith]);

    return (
        <section style={{ "overflowX": "hidden" }}>
            <Helmet>
                <title>Ürünlerimiz | Bahçe ve Dış Mekan Aydınlatma Çözümleri - Zita Aydınlatma</title>
                <meta name="description" content="Zita Aydınlatma, dış mekan ve bahçe aydınlatma çözümlerinde güvenilir üreticinizdir. Avrupa standartlarına uygun, su geçirmez, orijinal ABS gövdeli ve sararmalara karşı UV korumalı aydınlatma ürünleri." />
                <link rel="canonical" href="https://www.zitaaydinlatma.com.tr/products" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            {/*katalog Componentı*/}
            <section>
                <Type2CompImgAnimation title={t('products.catalogue.title')}
                    text={t('products.catalogue.description')} src1="/envImg/katalogMain.webp"
                    src2="/pages/products/catalogp1.webp" src3="/pages/products/catalogp2.webp" version="wrapperheader" imgContainerVersion="imgContainer"
                    navigate={navigate} route1="/pdfs/zitaKatalog.pdf" route2="/pdfs/zitaKatalog.pdf" route3="/pdfs/zitaKatalog.pdf" />
            </section>
            {/*UV Component*/}
            <section>
                <Type3CompWithAnimation title={t('products.uv_protection.title')}
                    text={t('products.uv_protection.features1')} text2={t('products.uv_protection.features2')}
                    src="/pages/products/uvImg.webp" size={windowsWith} version="containerLeftText" Component={Type3Comp} />
            </section>
            {/*ABC and PC material*/}
            <section style={{ "backgroundColor": "#f3f4f6", "paddingBottom": "20px" }}>
                <Type3CompWithAnimation title={t('products.materials.title')}
                    text={t('products.materials.features1')} text2={t('products.materials.features2')}
                    text3={t('products.materials.features3')} Component={Type4Comp} version="containerLeftText" src="/pages/products/absIcon.webp"
                    size={windowsWith} />
            </section>
            {/*Socket Component*/}
            <section>
                <Type3CompWithAnimation title={t('products.sockets.title')}
                    text={t('products.sockets.features1')} text2={t('products.sockets.features2')} size={windowsWith} imgStyle={{ "width": "500px" }}
                    text3={t('products.sockets.features3')} version="containerLeftText" Component={Type4Comp} src="/pages/products/socketIcon.webp" />
            </section>
            {/*Sertifika Components*/}
            <section className={styles.certContainer}>
                <div className={styles.certWrapper}>
                    <h1 className='titleText'>{t('products.certifications.title')}</h1>
                    <p className='paraText'>{t('products.certifications.description')}</p>
                    <div className={styles.imgContainer}>
                        <img src="/pages/products/cekucuk.webp" alt="Zita Aydınlatma Güvenlik ve Kalite Sertifikaları" loading='lazy' />
                        <img src="/pages/products/rohskucuk.webp" alt="Zita Aydınlatma Güvenlik ve Kalite Sertifikaları" loading='lazy' />
                        <img src="/pages/products/isokucuk.webp" alt="Zita Aydınlatma Güvenlik ve Kalite Sertifikaları" loading='lazy' />
                    </div>
                    <PrimaryButton text={t('home.certifications.button')} navRoute={`/${lng}/Certifications`} />
                </div>
            </section>
        </section>
    );
}

export default Product;
/*            <Type2CompImgAnimation title={t('products.certifications.title')}
                text={t('products.certifications.description')} imgContainerVersion="imgContainerIcon" contextContainerVersion="contextContainer"
                src1="/pages/products/cekucuk.webp" src2="/pages/products/rohskucuk.webp" src3="/pages/products/isokucuk.webp" version="wrapperSigle" isButton
                buttonText={t('home.certifications.button')} buttonRoute={`/${lng}/Certifications`} /> */