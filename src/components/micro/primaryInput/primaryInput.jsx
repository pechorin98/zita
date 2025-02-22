import React from 'react';
import styles from './primaryInput.module.css';

function PrimaryInput({ label, id, ...props }) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id} className="labelText" style={{"display":"block","marginBottom":"8px"}}>{label}</label>
            <input type="text" id={id} className={styles.input} {...props} />
        </div>
    );
}

export default PrimaryInput;