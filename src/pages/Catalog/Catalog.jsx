import React, { useEffect, useState } from "react";
import styles from './catalog.module.css';
import { Helmet } from 'react-helmet';
import PdfIframeViewer from '../../components/macro/PdfPresenter/PdfPresenter';
import PdfJsViewer from "../../components/macro/PdfJsViewer";

function Catalog() {
    const [windowsWith, setWindowsWith] = useState(null);

    useEffect(() => {
        const updateVideoSrc = () => {
            setWindowsWith(window.innerWidth);
        };

        updateVideoSrc();
        window.addEventListener('resize', updateVideoSrc);
        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [windowsWith]);

    return (
        <section>
            <Helmet>
                <title>Zita Aydınlatma - Catalog</title>
                <meta name="description" content="Browse the Zita Aydınlatma catalog to discover our wide range of high-quality lighting products. Find the perfect lighting solutions for your needs." />
            </Helmet>
            <object width="100%" height="400" data="/pdfs/zitaKatalog.pdf" type="application/pdf" ></object>
        </section>
    )
};

export default Catalog;

/*
        <section>
            <Helmet>
                <title>Zita Aydınlatma - Catalog</title>
                <meta name="description" content="Browse the Zita Aydınlatma catalog to discover our wide range of high-quality lighting products. Find the perfect lighting solutions for your needs." />
                <meta name="keywords" content="Zita, Aydınlatma, Lighting, LED, Lights, Home Lighting, Commercial Lighting, Catalog, Products" />
            </Helmet>
            {windowsWith <= 750 && <PdfJsViewer pdfUrl="/pdfs/zitaKatalog.pdf" />}
            {windowsWith > 750 && <PdfIframeViewer pdfUrl="/pdfs/zitaKatalog.pdf"/>}
        </section> */