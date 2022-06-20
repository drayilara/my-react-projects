import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from "../data";

export default function Reviews() {
    let [index, setIndex] = useState(0);

    let currentReview = reviews[index];
    let indexOfLastReview = reviews.length - 1

    function handleNextReview() {
        if(index < indexOfLastReview) {
            setIndex(prevIndex => (prevIndex + 1));
        }else{
            setIndex(0);
        }
    }

    function handlePreviousReview() {
        if(index > 0) {
            setIndex(prevIndex => (prevIndex - 1));
        }else{
            setIndex(indexOfLastReview);
        }
    }

    function handleRandomReview() {
        let randomReviewIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomReviewIndex);
    }


    return (
        <article className="review">
            <div className="img-container">
                <img src={currentReview.image} alt={currentReview.name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{currentReview.name}</h4>
            <p className="job">{currentReview.job}</p>
            <p className="info">{currentReview.text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={handlePreviousReview}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={handleNextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={handleRandomReview}>Surprise me</button>
        </article>
    )
}


