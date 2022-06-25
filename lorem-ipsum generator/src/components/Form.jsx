import React from "react";

export default function Form({submitForm, handleInput, requestedParagraphs}) {

    return (
        <form className="lorem-form">
            <label htmlFor="amount">Paragraphs</label>
            <input 
            type="number" 
            name="amount" 
            id="amount"
            onChange={(e) => handleInput(e)}
            value={requestedParagraphs}
            ></input>

            <button 
            type="submit" 
            className="btn" 
            onClick={(e) => submitForm(e)}
            >Generate</button>
        </form>
    )
}