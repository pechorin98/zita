import React from 'react';
import styles from './pdfPresenter.module.css';
import PdfJsViewer from '../PdfJsViewer';

function PdfIframeViewer({ pdfUrl }) {
  
  return (
    <div className={styles.container}>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        className={styles.pdfIframe}
      />
    </div>
  );
}

export default PdfIframeViewer;