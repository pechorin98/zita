import { useEffect, useState } from "react";
import styles from "./PurchaseModal.module.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactPopup = ({ isOpen, onClose }) => {
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const { t } = useTranslation();
    const { lng } = useParams(); // opsiyonel, yönlendirme amaçlıysa

    const handleClose = () => {
        setIsAnimatingOut(true);
        setTimeout(() => {
            setIsAnimatingOut(false);
            onClose();
        }, 200);
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape" && isOpen) {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEscKey);
        return () => window.removeEventListener("keydown", handleEscKey);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen && !isAnimatingOut) return null;

    return (
        <div className={styles.overlay}>
            <div
                className={`${styles.backdrop} ${isAnimatingOut ? styles.fadeOut : styles.fadeIn
                    }`}
                onClick={handleClose}
            />

            <div
                className={`${styles.popup} ${isAnimatingOut ? styles.scaleOut : styles.scaleIn
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    onClick={handleClose}
                    className={styles.closeButton}
                    aria-label="Close popup"
                    style={{ cursor: "pointer" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>

                <div className={styles.header}>
                    <div className={styles.iconContainer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.icon}
                        >
                            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                            <path d="M16.5 9.4 7.55 4.24"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                            <circle cx="18.5" cy="15.5" r="2.5"></circle>
                            <path d="M20.27 17.27 22 19"></path>
                        </svg>
                    </div>

                    <h2 className={styles.title}>{t("purchase_modal.title")}</h2>
                </div>

                <p className={styles.content}>{t("purchase_modal.description")}</p>

                <div className={styles.actions}>
                    <div style={{ display: "flex", columnGap: "10px" }}>
                        <a
                            href="https://wa.me/905337425329"
                            className={styles.whatsappButton}
                            title="Text us via WhatsApp"
                        >
                            <span className={styles.whatsappText}>{t("purchase_modal.text_button")}</span>
                            <span className={styles.whatsappIcon}>
                                {/* WhatsApp SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="white"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M16.04 2.01c-7.84 0-14.2 6.36-14.2 14.2 0 2.5.66 4.94 1.9 7.09L2 30l6.91-1.77c2.07 1.14 4.4 1.74 6.77 1.74h.01c7.84 0 14.2-6.36 14.2-14.2s-6.36-14.2-14.2-14.2zm0 25.68h-.01c-2.01 0-3.98-.54-5.7-1.56l-.41-.24-4.1 1.05 1.1-4-.26-.42c-1.18-1.87-1.8-4.03-1.8-6.24 0-6.45 5.25-11.7 11.7-11.7s11.7 5.25 11.7 11.7-5.25 11.7-11.7 11.7zm6.42-8.77c-.35-.17-2.07-1.02-2.39-1.14-.32-.12-.55-.17-.78.18s-.9 1.14-1.1 1.37c-.2.22-.4.25-.75.08-.35-.17-1.48-.55-2.82-1.76-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.22-.35.32-.58.1-.22.05-.43-.03-.6-.08-.17-.78-1.87-1.07-2.55-.28-.68-.57-.58-.78-.58h-.67c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.35c.17.22 2.3 3.5 5.56 4.91.78.34 1.38.54 1.85.69.78.25 1.5.22 2.07.13.63-.095 2.07-.84 2.36-1.65.29-.82.29-1.52.2-1.65-.08-.13-.29-.2-.63-.37z" />
                                </svg>
                            </span>
                        </a>


                        <a href={`/${lng}/contact`} className={styles.primaryButton}>
                            {t("purchase_modal.call_button")}
                        </a>
                    </div>

                    <div
                        onClick={handleClose}
                        className={styles.secondaryButton}
                        style={{ marginTop: "10px" }}
                    >
                        {t("purchase_modal.maybe_later")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
