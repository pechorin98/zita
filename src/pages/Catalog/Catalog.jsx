import React from "react";
import styles from './catalog.module.css';
import PdfIframeViewer from '../../components/macro/PdfPresenter/PdfPresenter';

function Catalog(){

return(
    <section>
        <PdfIframeViewer pdfUrl="/pdfs/zitaKatalog.pdf"/>
    </section>
)

};
export default Catalog;