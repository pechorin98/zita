import React from 'react';
import styles from './BurgerMenuIcon.module.css';

function BurgerMenuIcon({ isOpen, onClick, isScrolled }) {
  return (
    <div 
      className={`${styles.menuButtonContainer} ${isScrolled ? styles.scrolled : ''}`} 
      onClick={onClick}
    >
      <div className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} />
    </div>
  );
}

export default BurgerMenuIcon;