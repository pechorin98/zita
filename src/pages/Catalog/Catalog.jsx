import React from "react";
import styles from './catalog.module.css';
import PdfViewer from "../../components/macro/PdfPresenter/PdfPresenter";

function Catalog(){

return(
    <section>
        <PdfViewer pdfUrl="/pdfs/zitaKatalog.pdf"/>
    </section>
)

};
export default Catalog;