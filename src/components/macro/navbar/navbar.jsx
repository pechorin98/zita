import React, { memo, useState, useEffect } from 'react';
import styles from './navbar.module.css';
import BurgerMenuIcon from '../../micro/burgerMenu/BurgerMenuIcon';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { t } = useTranslation();
    const { lng } = useParams();

    // Scroll animasyonu için eklenen state'ler
    const [isScrolled, setIsScrolled] = useState(true);

    return (
        <>
            {/* Desktop Navbar */}
            <section className={styles.wrapper}>
                <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
                    <a href={`/${lng}/`}>
                        <img
                            src="/envImg/logo.png"
                            alt="Zita Lighting Logo"
                            className={`${isScrolled ? styles.logoScrolled : ''}`}
                            style={{ objectFit: "contain" }}
                        />
                    </a>
                    <div className={`${styles.linkContainer} ${isScrolled ? styles.navLinksHidden : ''}`}>
                        <a href={`/${lng}/Product`} className='navlink'>{t('home.products.title')}</a>
                        <a href={`/${lng}/About`} className='navlink'>{t('home.about_us.title')}</a>
                        <a href={`/${lng}/Contact`} className='navlink'>{t('home.contact.title')}</a>
                    </div>
                    <div className={styles.mobilContainer}>
                        <BurgerMenuIcon isOpen={isMenuOpen} onClick={toggleMenu} />
                    </div>
                    <div className={`${styles.menuBase} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
                        <div className={styles.sideNavbar}>
                            <img
                                src="/envImg/logo.png"
                                alt="Zita Lighting Logo"
                                style={{ width: "250px", marginTop: "30px", marginLeft: "20px" }}
                            />
                            <div className={styles.sideLinkContainer}>
                                <div style={{ width: "100%", borderBottom: "1px solid #222", paddingBottom: "5px" }}>
                                    <a href={`/${lng}/Product`} className='navlink'>Products</a>
                                </div>
                                <div style={{ width: "100%", borderBottom: "1px solid #222", paddingBottom: "5px" }}>
                                    <a href={`/${lng}/About`} className='navlink'>About Us</a>
                                </div>
                                <div style={{ width: "100%", borderBottom: "1px solid #222", paddingBottom: "5px" }}>
                                    <a href={`/${lng}/Contact`} className='navlink'>Contact</a>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                                <img
                                    src="/envImg/catalog.jpg"
                                    alt="Zita aydınlatma ürünleri kataloğu"
                                    style={{ width: "95%", borderRadius: "24px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(Navbar);
