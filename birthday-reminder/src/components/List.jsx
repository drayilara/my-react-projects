import React from 'react';

const List = (props) => {
  return (
    <> 
      <article className="person">
        <img src={props.image} alt={props.name} />
        <div className='section'>
          <h4>{props.name}</h4>
          <p>{props.age}</p>
        </div>
      </article>            
    </>
  );
};

export default List;