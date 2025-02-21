import React, { memo, useState, useMemo } from 'react';
import styles from './navbar.module.css';
import BurgerMenuIcon from '../../micro/burgerMenu/BurgerMenuIcon';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isScrolled, setIsScrolled] = useState(true);

    const { t } = useTranslation();
    const { lng } = useParams();

    // Memoizing translation values to prevent recalculations
    const translationValues = useMemo(() => ({
        home: t('home.home'),
        products: t('home.products.title'),
        aboutUs: t('home.about_us.title'),
        contact: t('home.contact.title'),
    }), [t]);

    // Memoizing links to prevent unnecessary re-renders
    const navLinks = useMemo(() => ({
        home: `/${lng}/`,
        products: `/${lng}/Product`,
        aboutUs: `/${lng}/About`,
        contact: `/${lng}/Contact`
    }), [lng]);

    return (
        <>
            {/* Desktop Navbar */}
            <section className={styles.wrapper}>
                <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
                    <a href={navLinks.home}>
                        <img
                            src="/envImg/logo.png"
                            alt="Zita Lighting Logo"
                            className={`${isScrolled ? styles.logoScrolled : ''}`}
                            style={{ objectFit: "contain" }}
                        />
                    </a>
                    <div className={`${styles.linkContainer} ${isScrolled ? styles.navLinksHidden : ''}`}>
                        <a href={navLinks.home} className='navlink'>{translationValues.home}</a>
                        <a href={navLinks.products} className='navlink'>{translationValues.products}</a>
                        <a href={navLinks.aboutUs} className='navlink'>{translationValues.aboutUs}</a>
                        <a href={navLinks.contact} className='navlink'>{translationValues.contact}</a>
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
                            <div className={styles.sideLinkContainer} style={{ marginTop: "40px" }}>
                                <div style={{ width: "100%" }}>
                                    <a href={navLinks.products} className='navlink'>Products</a>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <a href={navLinks.aboutUs} className='navlink'>About Us</a>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <a href={navLinks.contact} className='navlink'>Contact</a>
                                </div>
                            </div>
                            <div className={styles.imgContainer}>
                                <img
                                    src="/envImg/betterCatalog.png"
                                    alt="Zita aydınlatma ürünleri kataloğu"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Wrap in React.memo() to prevent unnecessary re-renders
export default memo(Navbar);
