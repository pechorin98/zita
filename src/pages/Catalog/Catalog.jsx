import React from "react";
import styles from './catalog.module.css';
import { Helmet } from 'react-helmet';
import PdfIframeViewer from '../../components/macro/PdfPresenter/PdfPresenter';

function Catalog() {

    return (
        <section>
            <Helmet>
                <title>Zita Aydınlatma - Catalog</title>
                <meta name="description" content="Browse the Zita Aydınlatma catalog to discover our wide range of high-quality lighting products. Find the perfect lighting solutions for your needs." />
                <meta name="keywords" content="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting, Catalog, Products" />
            </Helmet>
            <PdfIframeViewer pdfUrl="/pdfs/zitaKatalog.pdf" />
        </section>
    )

};
export default Catalog;