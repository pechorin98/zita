import React from 'react';
import styles from './contactPage.module.css';
import PrimaryButton from '../../components/micro/primaryDesktopButton/PrimaryButton';
import PrimaryInput from '../../components/micro/primaryInput/primaryInput';
import { useParams,useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

function Contact() {

    const navigate = useNavigate();
    const { lng } = useParams();
    const { t } = useTranslation();


    return (
        <section className={styles.wrapper}>
            <section className={styles.formContainer}>
                <div className={styles.formTitleContainer}>
                    <h1 className="titleText" style={{ "marginBottom": "16px" }}>{t("contact.title")}</h1>
                    <p className="paraText" style={{ "marginBottom": "32px" }}>{t('contact.text')}</p>
                </div>
                <form action="" className={styles.InputContainer}>
                        <PrimaryInput label={t('contact.Full Name')} />
                        <PrimaryInput label={t('contact.Company Name')} />
                        <PrimaryInput label={t('contact.E-Mail Address')} />
                        <PrimaryInput label={t('contact.Phone Number')} />
                        <PrimaryInput label={t('contact.Subject')} />
                        <div>
                            <label htmlFor="msg" style={{ "display": "block", "marginBottom": "8px" }} className="labelText">{t('contact.Message')}</label>
                            <textarea name="msg" id="msg" className={styles.textArea}></textarea>
                        </div>
                    <div style={{ "marginTop": "32px" }}>
                        <button className={styles.submitBtn}>Submit <img src="/envImg/sendIcon.png" alt="sendIcon"  className={styles.icon}/></button>
                    </div>
                </form>
            </section>
            <section className={styles.infoContainer}>
                <h1 className='titleText' style={{ "marginBottom": "16px" }}>{t('contact.Contact Informations')}</h1>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactBox}>
                        <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{"transform":"scale(1.8)"}}/>
                        <span className="text-sm">
                            Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
                            Küçükçekmece/İstanbul
                        </span>
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
                <div className={styles.imgContainer}>
                    <img src="/pages/products/catalog.jpg" alt="Zita Aydınlatma Katalog" className={styles.img1} onClick={() => navigate(`/${lng}/Catalog`)}/>
                </div>
            </section>
        </section>
    )
};
export default Contact;