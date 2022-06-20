import React from 'react';

export default function Categories({filterMenu}) {
    return (
        <>
            <div className="btn-container">
            <button type="submit" className="filter-btn" onClick={(e) => filterMenu(e)}>all</button>
            <button type="submit" className="filter-btn" onClick={(e) => filterMenu(e)}>breakfast</button>
            <button type="submit" className="filter-btn" onClick={(e) => filterMenu(e)}>lunch</button>
            <button type="submit" className="filter-btn" onClick={(e) => filterMenu(e)}>shakes</button>
            </div>
        </>
    )
}
