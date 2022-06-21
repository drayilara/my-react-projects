import React from "react";
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Person({ image, name, title, quote }) {
    return (
        <>
        <div className="section-center">
            <article>
                <img className="person-img" src={image} alt={name}/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"/>
                <button className="prev">
                <FiChevronLeft />
                </button>
                <button className="next">
                <FiChevronRight />
                </button>
            </article>
        </div>
        </>
        
    )
}