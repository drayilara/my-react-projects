import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title, info}) => {

  let [ showInfo, setShowInfo ] = React.useState(false)

    function toggleBtn() {
      setShowInfo(!showInfo);     
  }

  return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={toggleBtn}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>     
        </header>
        {showInfo && <p className="info">{info}</p>}
      </article>
  )
};

export default Question;
