import React,{useEffect,useState} from "react";
import PdfIframeViewer from "../../components/macro/PdfPresenter/PdfPresenter";
import PdfJsViewer from "../../components/macro/PdfJsViewer";

function Emc() {
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
            {windowsWith <= 750 && <PdfJsViewer pdfUrl="/pdfs/emc.pdf" />}
            {windowsWith > 750 && <PdfIframeViewer pdfUrl="/pdfs/emc.pdf"/>}
        </section>
    )

};
export default Emc; 