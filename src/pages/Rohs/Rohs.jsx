import React,{useState,useEffect} from "react";
import PdfViewer from "../../components/macro/PdfPresenter/PdfPresenter";
import PdfJsViewer from "../../components/macro/PdfJsViewer";

function Rohs() {
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
            {windowsWith <= 750 && <PdfJsViewer pdfUrl="/pdfs/Rohs.pdf" />}
            {windowsWith > 750 && <PdfIframeViewer pdfUrl="/pdfs/Rohs.pdf"/>}
        </section>
    )

};
export default Rohs; 