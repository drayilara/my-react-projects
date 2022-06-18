import React from "react";


export default function Card(props) {
    return (
        <div className="single-tour">
            <article>
                <img src={props.image}  alt={props.name}/>
                <footer>
                    <div className="tour-info">
                        <h4>{props.name}</h4>
                        <h4 className="tour-price">{props.price}</h4>
                    </div>
                    <p>
                        {props.info}
                        <button>read more</button>
                    </p>
                    <button className="delete-btn">Not interested</button>
                </footer>
            </article>
        </div>
    )
}