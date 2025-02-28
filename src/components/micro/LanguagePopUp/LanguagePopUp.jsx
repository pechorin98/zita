import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import i18n from "../../../i18n";

const LanguagePopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lng } = useParams();
  const [showPopup, setShowPopup] = useState(isOpen);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setShowPopup(false); // Hide pop-up if user already selected a language
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    if (newLanguage !== lng) {
      const newPath = location.pathname.replace(`/${lng}`, `/${newLanguage}`);
      i18n.changeLanguage(newLanguage);
      navigate(newPath);
    }
    localStorage.setItem("selectedLanguage", newLanguage); // Save user's choice
    setShowPopup(false);
    onClose();
  };

  if (!showPopup) return null; // If pop-up is closed, don't render it

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#010101",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "300px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
      }}>
        <h2 style={{ marginBottom: "20px", color: "white" }} className="titleText">Select Your Language</h2>

        <button onClick={() => changeLanguage("en")} style={buttonStyle}>
          <div style={buttonInner}>
            <p>English</p>
            <img src="/lngImg/eng.png" alt="English" style={imgStyle} />
          </div>
        </button>

        <button onClick={() => changeLanguage("fr")} style={buttonStyle}>
          <div style={buttonInner}>
            <p>Français</p>
            <img src="/lngImg/fr.png" alt="Français" style={imgStyle} />
          </div>
        </button>

        <button onClick={() => changeLanguage("de")} style={buttonStyle}>
          <div style={buttonInner}>
            <p>Deutsch</p>
            <img src="/lngImg/ger.png" alt="Deutsch" style={imgStyle} />
          </div>
        </button>

        <button onClick={() => changeLanguage("tr")} style={buttonStyle}>
          <div style={buttonInner}>
            <p>Türkçe</p>
            <img src="/lngImg/tr.png" alt="Türkçe" style={imgStyle} />
          </div>
        </button>

        <button onClick={() => { setShowPopup(false); onClose(); }} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
};

// 🔥 INLINE STYLES
const buttonStyle = {
  background: "none",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  transition: "background 0.3s ease"
};

const buttonInner = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%"
};

const imgStyle = {
  width: "24px",
  marginLeft: "10px"
};

const closeButtonStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "10px 20px",
  marginTop: "15px",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "background 0.3s ease"
};

export default LanguagePopup;
