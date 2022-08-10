import React from "react";

const Markdown = ({ setContent, content }) => {
    
    return (
        <article>
            <h3>Write your Markdown here</h3>
            <textarea 
            type="text" 
            name="markdown"
            value={content.marked}
            onChange={(e) => {
                setContent(prev => {
                    return {
                        ...prev,
                        marked : e.target.value
                    }
                })
            }}
             />
        </article>
        
    )
}

export default Markdown;