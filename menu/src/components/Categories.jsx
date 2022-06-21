import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Categories({filterMenu, categories}) {
    return (
        <>
            <div className="btn-container" onClick={(e) => filterMenu(e)}>
            {categories.map(category => <button type="submit" name={category} key={uuidv4()} className="filter-btn">{category}</button>)}
            </div>
        </>
    )
}
