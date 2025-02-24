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
                <title>Zita Aydınlatma - Contact Us</title>
                <meta name="description" content="Get in touch with Zita Aydınlatma. Contact us for any inquiries, support, or feedback. We are here to help you with your lighting needs." />
                <meta name="keywords" content="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting, Contact, Support, Inquiries" />
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

                <div className={styles.imgContainer}>
                    <img
                        src="/pages/products/catalog.jpg"
                        alt="Zita Aydınlatma Katalog"
                        className={styles.img1}
                        onClick={() => navigate(`/${lng}/Catalog`)}
                    />
                </div>
            </section>
        </section>
    );
}

export default Contact;
