import React from "react";
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

  return (
    <div className={styles.languageContainer}>
      <div className={styles.languageButton}>
        <p className="subTextLan">Select Language</p>
        <div className={styles.languageList}>
          <button onClick={() => changeLanguage('en')} className={styles.languageItem}>English</button>
          <button onClick={() => changeLanguage('fr')} className={styles.languageItem}>Français</button>
          <button onClick={() => changeLanguage('de')} className={styles.languageItem}>Deutsch</button>
          <button onClick={() => changeLanguage('tr')} className={styles.languageItem}>Türkçe</button>
        </div>
      </div>
    </div>
  );
}

export default LanguageBtn;
