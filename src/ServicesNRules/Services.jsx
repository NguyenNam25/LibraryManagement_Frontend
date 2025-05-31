import React, { useState } from "react";
import {Document, Page} from 'react-pdf'
import pdf from "../pdf/78.pdf"


export default function Services(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }
    
    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {({ numPages, pageNumber, loading }) => (
                    <div>
                        <Page pageNumber={pageNumber} />
                        {loading ? <div>Loading...</div> : null}
                    </div>
                )}
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}