import React from "react";


export default function Card({cardId, image, info, deleteCard, name, price}) {
    let longInfo = info
    let shortInfo = longInfo.slice(0,200);

    let [infoLenght, setInfoLenght] = React.useState(longInfo);

    function handleInfoLenght() {
        infoLenght === longInfo ? setInfoLenght(shortInfo) : setInfoLenght(longInfo);
    }



    return (
        <div className="single-tour">
            <article>
                <img src={image}  alt={name}/>
                <footer>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">${price}</h4>
                    </div>
                    <p>
                        {infoLenght}
                        <button onClick={handleInfoLenght}>
                        {
                            infoLenght === longInfo ? "show less" : "show more..."
                        }
                        </button>
                    </p>
                    <button className="delete-btn" onClick={(e) => {deleteCard(e, cardId)}} id={cardId}>Not interested</button>
                </footer>
            </article>
        </div>
    )
}