import React from "react";


export default function Card(props) {
    let longInfo = props.info
    let shortInfo = longInfo.slice(0,200);

    let [infoLenght, setInfoLenght] = React.useState(longInfo);

    function handleInfoLenght() {
        infoLenght === longInfo ? setInfoLenght(shortInfo) : setInfoLenght(longInfo);
    }



    return (
        <div className="single-tour">
            <article>
                <img src={props.image}  alt={props.name}/>
                <footer>
                    <div className="tour-info">
                        <h4>{props.name}</h4>
                        <h4 className="tour-price">${props.price}</h4>
                    </div>
                    <p>
                        {infoLenght}
                        <button onClick={handleInfoLenght}>
                        {
                            infoLenght === longInfo ? "show less" : "show more..."
                        }
                        </button>
                    </p>
                    <button className="delete-btn" onClick={(e) => {props.deleteCard(e, props.cardId)}} id={props.cardId}>Not interested</button>
                </footer>
            </article>
        </div>
    )
}