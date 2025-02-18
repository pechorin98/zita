import React,{useState,useEffect} from 'react';
import styles from './home.module.css';
import PrimaryButton from '../../components/micro/primaryDesktopButton/PrimaryButton';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Type2CompWithAnimation from '../../components/mid/type2Comp/Type2CompWithAnimation ';
import Type1CompWithAnimation from '../../components/mid/type2Comp/Type1CompWithAnimation';

function Home() {

    const {t} = useTranslation();
    const {lng} = useParams();

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
        console.log("shot fired")
        console.log(windowsWith)
        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [windowsWith]);

    return (
        <section>
            {/*Banner*/}
            <section style={{ "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "backgroundColor": "black" }}>
                <video autoPlay muted className={styles.bannerVideo}>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </section>
            <div style={{"marginTop":"20px","display":"flex","justifyContent":"center","alignItems":"center"}} className={styles.bannerBtnContainer}>
                <PrimaryButton text="Learn More!" navRoute={`/${lng}/Product`} />
            </div>
            {/*Product Component*/}
            <section>
                <Type1CompWithAnimation title={t('home.products.title')}
                version="containerLeftText"
                text={t('home.products.description')}
                buttonText={t('home.products.button')}
                src="/envImg/katalogv2.webp" imgStyle={{"width":"500px"}} size={windowsWith} style={{"marginTop":"50px"}}/>
            </section>
            {/*About Us Component*/}
            <section>
                <Type1CompWithAnimation title={t('home.about_us.title')}
                text={t('home.about_us.description')} version="containerRightText"
                buttonText={t('home.about_us.button')} buttonUrl={`/${lng}/About`}
                src="/envImg/logo.png" imgStyle={{"marginTop":"122px","marginRight":"50px"}} size={windowsWith} />
            </section>
            {/*Certifications Component*/}
            <section>
                <Type2CompWithAnimation title={t('home.certifications.title')}
                text={t('home.certifications.description')}
                src2="/envImg/ptcser.webp" src3="/envImg/emcser.webp" src1="/envImg/RoHSser.png" isButton 
                buttonText={t('home.certifications.button')} version="wrapper" imgContainerVersion="imgContainer"/>
            </section>
            {/*Contact Component*/}
            <section className={styles.contactContainer}>
                <Type1CompWithAnimation title={t('home.contact.title')}
                text={t('home.contact.description')} buttonText={t('home.contact.button')} src="" version="containerLeftText"
                buttonUrl={`/${lng}/Contact`} size={windowsWith}/>
            </section>
        </section>
    )

};
export default Home;