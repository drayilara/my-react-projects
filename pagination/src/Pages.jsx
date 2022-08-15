import React, { useMemo } from "react";
import Page from "./Page";
import { usePaginationContext } from "./Context";

const Pages = () => {
    let { loadPage } = usePaginationContext();

    let startingPage = 1;
    let maxPageLength = 11;

    const generatePages = useMemo(() => {
        let pages = [];
        while(startingPage < maxPageLength) {
                pages.push(startingPage);
                startingPage++;
        }
        return pages;
    }, []);


    return (
        <>
            <div id="page-section">
                <div className="pages-box">
                    <div className="move prev"
                    onClick={(e) => loadPage(e)}
                    >Prev</div>
                    {generatePages.map((page) => {
                        return <Page key={page}  page={page}/>
                    })}
                    <div className="move next"
                    onClick={(e) => loadPage(e)}
                    >Next</div>
                </div>
            </div>
        </>
    )
}

export default Pages;