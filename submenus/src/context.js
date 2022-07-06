import React, { useState, useContext, createContext, useEffect } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {

    let [ hoverAndProduct, setHoverAndProduct ] = useState({
            hover : false,
            product : ""
    });

    let [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    let [ showSidebar, setShowsidebar ] = useState(false);

    

    useEffect(
        () => {
            window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        }
    , [])

    let contextValue = {
        hoverAndProduct : hoverAndProduct,
        setHoverAndProduct : setHoverAndProduct,
        windowWidth : windowWidth,
        setWindowWidth : setWindowWidth,
        showSidebar : showSidebar,
        setShowsidebar : setShowsidebar
    }



    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

// consume context;
const useConsumeAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useConsumeAppContext }