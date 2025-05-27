import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Initialize PDF.js worker with local worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs',import.meta.url,).toString();

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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <a 
          href="/Liu_Evan_Resume_APRIL2025.pdf" 
          download 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mb-8"
        >
          Download CV
        </a>
      </div>
      
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white p-4">
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
          className="flex justify-center w-full"
        >
          {numPages && (
            <Page 
              pageNumber={1} 
              scale={width > 786 ? 1.5 : 0.8} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={Math.min(width * 0.9, 800)}
              className="mx-auto"
            />
          )}
        </Document>
      </div>
    </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 dark:text-gray-400">
          {numPages && <span>Page 1 of {numPages}</span>}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          If the PDF does not load, please <a href="/Liu_Evan_Resume_APRIL2025.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">click here</a> to open it directly.
        </p>
      </div>
    </div>
  );
}

export default Resume;
