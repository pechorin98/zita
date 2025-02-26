import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import i18n from '../../../i18n';
import styles from './languageBtn.module.css';


function LanguageBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lng } = useParams(); // URL'deki mevcut dil kodunu alıyoruz

  const changeLanguage = (newLanguage) => {
    if (newLanguage !== lng) {
      // URL'deki mevcut dil segmentini yeni dil ile değiştiriyoruz
      const newPath = location.pathname.replace(`/${lng}`, `/${newLanguage}`);
      i18n.changeLanguage(newLanguage);
      navigate(newPath);
    }
  };
  const [languageText, setLanguageText] = useState('');
  const [languageImg, setLanguageImg] = useState('');

  useEffect(() => {
    switch (lng) {
      case 'de':
        setLanguageText('Deutsch');
        setLanguageImg('/lngImg/ger.png');
        break;
      case 'en':
        setLanguageText('English');
        setLanguageImg('/lngImg/eng.png');
        break;
      case 'fr':
        setLanguageText('Français');
        setLanguageImg('/lngImg/fr.png');
        break;
      case 'tr':
        setLanguageText('Türkçe');
        setLanguageImg('/lngImg/tr.png');
        break;
      default:
        setLanguageText('');
        setLanguageImg('');
    }
  }, [lng]);
  return (
    <div className={styles.languageContainer}>
      <div className={styles.languageButton}>
        <div style={{  display: "flex", alignItems: "center", justifyContent: "space-between","paddingLeft":"7.5%","paddingRight":"7.5%"}}>
          <p className="subTextLan">{languageText}</p>
          {languageImg && <img src={languageImg} alt={languageText} style={{ width: "24px", marginLeft: "8px", objectFit: "contain" }} />}
        </div>
        <div className={styles.languageList}>
          <button onClick={() => changeLanguage('en')} className={styles.languageItem}>
            <div style={{ "display": "flex", "justifyContent": "space-between" }}>
              <p>English</p>
              <img src="/lngImg/eng.png" alt="" style={{ "width": "24px", "objectFit": "contain" }} />
            </div>
          </button>
          <button onClick={() => changeLanguage('fr')} className={styles.languageItem}>
            <div style={{ "display": "flex", "justifyContent": "space-between" }}>
              <p>Français</p>
              <img src="/lngImg/fr.png" alt="" style={{ "width": "24px", "objectFit": "contain" }} />
            </div>
          </button>
          <button onClick={() => changeLanguage('de')} className={styles.languageItem}>
            <div style={{ "display": "flex", "justifyContent": "space-between", }}>
              <p>Deutsch</p>
              <img src="/lngImg/ger.png" alt="" style={{ "width": "24px", "objectFit": "contain" }} />
            </div>
          </button>
          <button onClick={() => changeLanguage('tr')} className={styles.languageItem}>
            <div style={{ "display": "flex", "justifyContent": "space-between" }}>
              <p>Türkçe</p>
              <img src="/lngImg/tr.png" alt="" style={{ "width": "24px", "objectFit": "contain" }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageBtn;
