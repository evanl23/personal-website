import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Section from './common/Section';

// Initialize PDF.js worker with local worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  
  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setLoadError(error);
    setIsLoading(false);
  }
  return (
    <Section 
      title="Resume"
    > 
    <div className="container mx-auto px-4">
      
    <div className="flex justify-center">
      <div className="w-full max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white p-4">
        {isLoading && (
          <div className="flex justify-center items-center h-[800px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {loadError && (
          <div className="text-center p-10 text-red-600">
            <p className="text-xl font-semibold">Error loading PDF</p>
            <p className="mt-2">Please make sure your PDF file is in the public directory.</p>
          </div>
        )}
        
        <Document file='/Liu_Evan_Resume_APRIL2025.pdf' onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}
          loading={null}
          className="flex justify-center"
        >
          {numPages && (
            <Page 
              pageNumber={1} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={Math.min(width * 0.9, 800)}
              className="mx-auto"
            />
          )}
        </Document>
      </div>
    </div>

      <div className="text-center mb-8 py-8">
        <a 
          href="/Liu_Evan_Resume_APRIL2025.pdf" 
          download 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 "
        >
          Download CV
        </a>
      </div>
    </div>
    </Section>
  );
}

export default Resume;
