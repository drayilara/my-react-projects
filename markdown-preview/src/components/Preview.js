import React from "react";
import Markdown from "marked-react";

const Preview = ({ content }) => {    
    return (
        <article>
            <h3>Preview</h3>
            <div className="preview">
                <Markdown>{content.marked}</Markdown>
            </div>    
        </article>
    )
}

export default Preview;