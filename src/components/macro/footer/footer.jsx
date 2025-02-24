import React, { memo, useMemo } from 'react';
import styles from './footer.module.css';
import MyMap from '../../../services/myMapFooter';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useParams } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const { lng } = useParams();

    // Memoize values to prevent unnecessary re-renders
    const translationValues = useMemo(() => ({
        contactTitle: t('home.contact.title'),
        quickLinks: t('footer.quick_links'),
        legalPolicy: t('footer.legal_and_social_and_cookie_policy'),
        certifications: t('footer.certifications'),
        aboutUs: t('home.about_us.title'),
        products: t('home.products.title'),
        contact: t('home.contact.title'),
        productsButton: t('home.products.button'),
    }), [t]);

    return (
        <section className={styles.wrapper}>
            <section className={styles.container}>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5857663704087!2d28.752782577068793!3d41.056186871343826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3e78ee75c0f%3A0x163a476e01cea62a!2sZita%20Aydinlatma!5e0!3m2!1sen!2str!4v1740427130669!5m2!1sen!2str" className={styles.map}></iframe>
                    <h1 className="footerSectionTitle" style={{ marginTop: "24px" }}>
                        ZİTA ELK. AYDINLATMA SAN. ve TİC.LTD.ŞTİ.
                    </h1>
                    <small className="footerSmallTitle">
                        ZİTA ELEKTRİK AYDINLATMA SANAYİ ve TİCARET LİMİTED ŞİRKETİ
                    </small>
                </div>

                <div className={styles.otherBox}>
                    {/* Contact Information */}
                    <div style={{ width: "30%" }} className={styles.contactContainer}>
                        <h4 className="footerTitle">{translationValues.contactTitle}</h4>
                        <div className={styles.contactWrapper}>
                            <div>
                                <div className={styles.contactBox}>
                                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{ transform: "scale(2)" }} />
                                    <span className="text-sm">
                                        Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
                                        Küçükçekmece/İstanbul
                                    </span>
                                </div>
                            </div>
                            <div className={styles.contactBox}>
                                <Phone className="h-6 w-6 flex-shrink-0" />
                                <span className="text-sm">(0212) 678 37 90</span>
                            </div>
                            <div className={styles.contactBox}>
                                <Phone className="h-6 w-6 flex-shrink-0" />
                                <span className="text-sm">+90 533 742 53 29 (WhatsApp)</span>
                            </div>
                            <div className={styles.contactBox}>
                                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                                <span className="text-sm">zitaaydinlatma@hotmail.com</span>
                            </div>
                            <div className={styles.contactBox}>
                                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                                <span className="text-sm">info@zitaaydinlatma.com.tr</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h1 className="footerTitle">{translationValues.quickLinks}</h1>
                        <div className={styles.quickContainer}>
                            <a className="text-smLink" href={`/${lng}/About`}>{translationValues.aboutUs}</a>
                            <a className="text-smLink" href={`/${lng}/Product`}>{translationValues.products}</a>
                            <a className="text-smLink" href={`/${lng}/Contact`}>{translationValues.contact}</a>
                            <a className="text-smLink" href="/">{translationValues.productsButton}</a>
                        </div>
                    </div>

                    {/* Legal & Social Links */}
                    <div className={styles.lawContainer}>
                        <h1 className="footerTitle">{translationValues.legalPolicy}</h1>
                        <div className={styles.policyContainer}>
                            <a className="text-smLink" href="">Cookie Policy</a>
                            <a className="text-smLink" href="">{translationValues.certifications}</a>
                            <div className={styles.linksContainer}>
                                <a href="https://www.facebook.com/AydinlatmaZita"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Facebook page">
                                    <Facebook />
                                </a>

                                <a href="https://www.linkedin.com/company/zitalighting/"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our LinkedIn page">
                                    <Linkedin />
                                </a>

                                <a href="https://www.instagram.com/zitalighting/"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Instagram page">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

// Wrap in React.memo() to prevent unnecessary renders
export default memo(Footer);
