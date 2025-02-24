import React, { useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import 'pdfjs-dist/web/pdf_viewer.css';

// PDF.js worker dosyasını tanımla (public klasöründe tanımladığın worker)
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

function PdfJsViewer({ pdfUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        // Container'ı temizle
        containerRef.current.innerHTML = '';

        // Ölçeklendirme faktörü
        const scale = 1.5;

        // Tüm sayfaları döngü ile render et
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
          const page = await pdf.getPage(pageNumber);
          const viewport = page.getViewport({ scale });
          
          // Yeni bir canvas oluştur
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Responsive görünüm için stil ayarları
          canvas.style.maxWidth = '100%';
          canvas.style.height = 'auto';
          canvas.style.marginBottom = '10px';

          // Canvas'ı container'a ekle
          containerRef.current.appendChild(canvas);

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;
        }
      } catch (error) {
        console.error('PDF render hatası:', error);
      }
    };

    renderPdf();
  }, [pdfUrl]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '10px' 
      }}
    />
  );
}

export default PdfJsViewer;
