import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Policy.module.css";

const Policy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.policyContainer}>
      <h1 className={styles.policyTitle}>{t("cookie_policy.title")}</h1>

      {/* Iterate through policy sections */}
      {Object.entries(t("cookie_policy.sections", { returnObjects: true })).map(
        ([key, section]) => (
          <div key={key} className={styles.policySection}>
            <h2 className={styles.policySectionTitle}>{section.title}</h2>
            {section.content && (
              <p className={styles.policyText}>{section.content}</p>
            )}

            {/* Render list items if available */}
            {section.data_list && (
              <ul className={styles.policyList}>
                {section.data_list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {/* Render browser cookie settings if available */}
            {section.browsers && (
              <ul className={styles.policyList}>
                {Object.entries(section.browsers).map(([browser, instruction]) => (
                  <li key={browser}>
                    <strong>{browser.toUpperCase()}:</strong> {instruction}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Policy;
