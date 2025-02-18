import react from 'react';
import styles from './footer.module.css';
import MyMap from '../../../services/myMapFooter';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { useParams } from 'react-router-dom';

function Footer() {

    const { t } = useTranslation();
    const { lng } = useParams();

    return (
        <section style={{ "marginTop": "180px" }} className={styles.wrapper}>
            <section className={styles.container}>
                <div>
                    <MyMap />
                    <h3 className='footerSectionTitle' style={{"marginTop":"24px"}}>ZİTA ELK. AYDINLATMA SAN. ve TİC.LTD.ŞTİ.</h3>
                    <small className='footerSmallTitle'>ZİTA ELEKTRİK AYDINLATMA SANAYİ ve TİCARET LİMİTED ŞİRKETİ</small>
                </div>
                <div className={styles.otherBox}>
                    <div style={{ "width": "30%" }} className={styles.contactContainer}>
                        <h4 className='footerTitle'>{t('home.contact.title')}</h4>
                        <div className={styles.contactWrapper}>
                            <div>
                                <div className={styles.contactBox}>
                                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{ "transform": "scale(2)" }} />
                                    <span className="text-sm">
                                        Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
                                        Küçükçekmece/İstanbul
                                    </span>
                                </div>
                            </div>
                            <div className={styles.contactBox} >
                                <Phone className="h-6 w-6 flex-shrink-0" />
                                <span className="text-sm">(0212) 678 37 90</span>
                            </div>
                            <div className={styles.contactBox} >
                                <Phone className="h-6 w-6 flex-shrink-0" />
                                <span className="text-sm">+90 533 742 53 29 (WhatsApp)</span>
                            </div>
                            <div className={styles.contactBox} >
                                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                                <span className="text-sm">zitaaydinlatma@hotmail.com</span>
                            </div>
                            <div className={styles.contactBox}>
                                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                                <span className="text-sm" >info@zitaaydinlatma.com.tr</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='footerTitle'>{t('footer.quick_links')}</h4>
                        <div className={styles.quickContainer}>
                            <a className="text-smLink" href={`/${lng}/About`}>{t('home.about_us.title')}</a>
                            <a className="text-smLink" href={`/${lng}/Product`}>{t('home.products.title')}</a>
                            <a className="text-smLink" href={`/${lng}/Contact`}>{t('home.contact.title')}</a>
                            <a className="text-smLink" href='/'>{t('home.products.button')}</a>
                        </div>
                    </div>
                    <div className={styles.lawContainer}>
                        <h4 className='footerTitle'>{t('footer.legal_and_social_and_cookie_policy')}</h4>
                        <div className={styles.policyContainer}>
                            <a className="text-smLink" href="">Cookie Policy</a>
                            <a className="text-smLink" href="">{t('footer.certifications')}</a>
                            <div className={styles.linksContainer}>
                                <a href="https://www.facebook.com/AydinlatmaZita" className={styles.socialIcon}><Facebook></Facebook></a>
                                <a href="https://www.linkedin.com/company/zitalighting/" className={styles.socialIcon}><Linkedin></Linkedin></a>
                                <a href="https://www.instagram.com/zitalighting/ " className={styles.socialIcon}><Instagram></Instagram></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )

};
export default Footer;