import React, { useState } from 'react';
import data from '../data';
import List from './List';
import Button from "./Button"


function App() {
  let [clicked, setClicked] = useState(false);

  const clearAll = () => {
      clicked ? setClicked(false) : setClicked(true);
  }


  return (
    
    <main>
      <section className='container'>
      {!clicked && <h3>5 birthdays today</h3>}
      {!clicked ? 
      data.map(person => ( 
      <List key={person.id} 
      image={person.image} 
      name={person.name} 
      age={person.age}    
      />)
      ) 
      : <h3>0 birthdays today</h3>
      }
      
      <Button clearAll={clearAll} clicked={clicked}/>
      </section> 
    </main>
  )
}

export default App;
