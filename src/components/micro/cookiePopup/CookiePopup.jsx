import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import styles from "./CookiePopup.module.css"; // Import styles
import { useTranslation } from 'react-i18next';

const CookiePopup = ({ navigate, lng }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [hidePopup, setHidePopup] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setShowPopup(true); // Show the popup if user hasn't made a choice
        } else if (cookieConsent === "accepted") {
            ReactGA.initialize("G-CY1N86K8X4"); // Enable tracking if accepted
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        ReactGA.initialize("G-CY1N86K8X4"); // Enable tracking
        setHidePopup(true);
        setTimeout(() => setShowPopup(false), 500); // Wait for animation to complete
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        ReactGA.ga("set", "anonymizeIp", true); // Disable tracking
        setHidePopup(true);
        setTimeout(() => setShowPopup(false), 500); // Wait for animation to complete
    };

    const showCookiePolicy = () => {
        navigate(`/${lng}/Policy`)
    };

    if (!showPopup) return null; // If user already chose, don't show popup

    return (
        <div className={`${styles.cookiePopup} ${hidePopup ? styles.hide : ''}`}>
            <p className="subTextCookie">{t("cookie_banner.message")}</p>
            <div className={styles.cookieContainer}>
                <button onClick={acceptCookies} className={styles.cookieButton}>
                    {t("cookie_banner.accept")}
                </button>
                <button onClick={showCookiePolicy} className={styles.cookieButton}>
                    {t("cookie_banner.policy")}
                </button>
                <button onClick={declineCookies} className={styles.cookieButton}>
                    {t("cookie_banner.decline")}
                </button>
            </div>
        </div>
    );
};

export default CookiePopup;