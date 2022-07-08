import React, { useState, useContext, createContext, useEffect, useRef } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    let [ hoverAndProduct, setHoverAndProduct ] = useState({
            hover : false,
            product : ""
    });

    let [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    let submenuRef = useRef(null);
    let isPositionOfSubmenu = useRef(0);
    
    let [ hoverSubmenu, setHoverSubmenu ] = useState(false);

    let [ showSidebar, setShowsidebar ] = useState(false);

    useEffect(
        () => {
            window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        }
    , [])
        
    return (
        <AppContext.Provider value={{
            hoverAndProduct : hoverAndProduct,
            setHoverAndProduct : setHoverAndProduct,
            windowWidth : windowWidth,
            setWindowWidth : setWindowWidth,
            showSidebar : showSidebar,
            setShowsidebar : setShowsidebar,
            submenuRef : submenuRef,
            isPositionOfSubmenu : isPositionOfSubmenu,
            hoverSubmenu : hoverSubmenu,
            setHoverSubmenu : setHoverSubmenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

// consume context;
const useConsumeAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useConsumeAppContext }