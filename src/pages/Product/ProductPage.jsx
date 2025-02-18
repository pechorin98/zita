import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import { useTranslation } from 'react-i18next';
import Type2CompImgAnimation from '../../components/mid/type2Comp/Type2CompWithAnimation ';
import Type3CompWithAnimation from '../../components/mid/type3Comp/Type3CompWithAnimation';
import { useParams } from 'react-router-dom'
import Type3Comp from '../../components/mid/type3Comp/Type3Comp';
import Type4Comp from '../../components/mid/type4Comp/Type4Comp';

function Product() {

    const { t } = useTranslation();
    const { lng } = useParams();

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
            {/*katalog Componentı*/}
            <section>
                <Type2CompImgAnimation title={t('products.catalogue.title')}
                    text={t('products.catalogue.description')} src1="/pages/products/catalog.jpg"
                    src2="/pages/products/catalogp1.jpg" src3="/pages/products/catalogp2.jpg" version="wrapperheader" imgContainerVersion="imgContainer" />
            </section>
            {/*UV Component*/}
            <section>
                <Type3CompWithAnimation title={t('products.uv_protection.title')}
                    text={t('products.uv_protection.features1')} text2={t('products.uv_protection.features2')}
                    src="/pages/products/uvImg.webp" size={windowsWith} version="containerLeftText" Component={Type3Comp} />
            </section>
            {/*ABC and PC material*/}
            <section>
                <Type3CompWithAnimation title={t('products.materials.title')}
                    text={t('products.materials.features1')} text2={t('products.materials.features2')}
                    text3={t('products.materials.features3')} Component={Type4Comp} version="containerLeftText" src="/pages/products/absIcon.webp"
                    size={windowsWith} />
            </section>
            {/*Socket Component*/}
            <section>
                <Type3CompWithAnimation title={t('products.sockets.title')}
                    text={t('products.sockets.features1')} text2={t('products.sockets.features2')} size={windowsWith}
                    text3={t('products.sockets.features3')} version="containerLeftText" Component={Type4Comp} src="/pages/products/socketIcon.png" />
            </section>
            {/*Sertifika Components*/}
            <Type2CompImgAnimation title={t('products.certifications.title')}
                text={t('products.certifications.description')} imgContainerVersion="imgContainerIcon" contextContainerVersion="contextContainer"
                src1="/pages/products/ceIcon.png" src2="/pages/products/rohs.png" src3="/pages/products/ısoIcon.webp" version="wrapperSigle" isButton
                buttonText={t('home.certifications.button')} />
        </section>
    );
}

export default Product;