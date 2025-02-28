import React, { useRef, useState } from 'react';
import styles from './contactPage.module.css';
import PrimaryButton from '../../components/micro/primaryDesktopButton/PrimaryButton';
import PrimaryInput from '../../components/micro/primaryInput/primaryInput';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

function Contact() {
    const navigate = useNavigate();
    const { lng } = useParams();
    const { t } = useTranslation();
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm(
            'service_po4cqtw',  // Your EmailJS service ID
            'template_1nxr06m', // Your EmailJS template ID
            form.current,
            '83wmmCiOBRr8vH8-4' // Your Public Key
        )
            .then(() => {
                setMessage('Email sent successfully! ✅');
                form.current.reset();
                setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
            })
            .catch((error) => {
                setMessage('Failed to send email. ❌');
                console.error('EmailJS Error:', error);
            });
    };

    return (
        <section className={styles.wrapper}>
            <Helmet>
                <title>İletişim |  Zita Aydınlatma Müşteri Hizmetleri</title>
                <meta name="description" content="Dış mekan, bahçe ve iç mekan aydınlatma çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin. Fiyat teklifi almak ve fabrikamızı ziyaret etmek için bizi arayın." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.zitaaydinlatma.com.tr/contact" />
            </Helmet>
            <section className={styles.formContainer}>
                <div className={styles.formTitleContainer}>
                    <h1 className="titleText" style={{ marginBottom: "16px" }}>{t("contact.title")}</h1>
                    <p className="paraText" style={{ marginBottom: "32px" }}>{t('contact.text')}</p>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className={styles.InputContainer}>
                    <PrimaryInput label={t('contact.Full Name')} name="user_name" required />
                    <PrimaryInput label={t('contact.Company Name')} name="company_name" />
                    <PrimaryInput label={t('contact.E-Mail Address')} name="user_email" type="email" required />
                    <PrimaryInput label={t('contact.Phone Number')} name="user_phone" />
                    <PrimaryInput label={t('contact.Subject')} name="subject" />

                    <div>
                        <label htmlFor="msg" style={{ display: "block", marginBottom: "8px" }} className="labelText">
                            {t('contact.Message')}
                        </label>
                        <textarea name="message" id="msg" className={styles.textArea} required></textarea>
                    </div>

                    <div style={{ marginTop: "32px" }}>
                        <button type="submit" className={styles.submitBtn}>
                            Submit <img src="/envImg/sendIcon.png" alt="sendIcon" className={styles.icon} />
                        </button>
                    </div>
                </form>

                {/* Success/Error Message */}
                {message && <p className={styles.statusMessage}>{message}</p>}
            </section>

            {/* Contact Information Section */}
            <section className={styles.infoContainer}>
                <h1 className="titleText" style={{ marginBottom: "16px" }}>{t('contact.Contact Informations')}</h1>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactBox}>
                        <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{ transform: "scale(1.8)" }} />
                        <span className="text-sm">
                            Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
                            Küçükçekmece/İstanbul
                        </span>
                    </div>
                    <div className={styles.contactBox}>
                        <Phone className="h-6 w-6 flex-shrink-0" />
                        <span className="text-sm">(0212) 678 37 90</span>
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
                <div className={styles.wpContainer}>
                    <div>
                        <h1 className='titleText'>{t('contact.heading')}</h1>
                        <p className='paraText'>{t('contact.wpText')}</p>
                    </div>
                    <div className={styles.wpBox}>
                        <a href="https://wa.me/905337425329" target="_blank" className={styles.whatsappButton}>
                            <img src="/envImg/wpIcon.png" alt="Zita Aydınlatma Whatsapp İletişim Butonu" />
                        </a>
                        <p style={{"marginTop":"20px"}}className="paraText">+905337425329</p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <a href="/pdfs/zitaKatalog.pdf" target='_blank'>
                        <img
                            src="/pages/products/catalog.webp"
                            alt="Zita Aydınlatma Katalog"
                            className={styles.img1}

                        />
                    </a>
                </div>
            </section>
        </section>
    );
}

export default Contact;
