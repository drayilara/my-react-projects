import React, { useEffect } from 'react';
import Person from "./Person"
import Header from "./Header"
import people from "../data";


function App() {
  let [index, setIndex] = React.useState(0);
  let maxAllowedIndex = people.length - 1;

  let { image, name, title, quote } = people[index];

  function slider() {
    if(index === maxAllowedIndex) {
      setIndex(0);
      return;
    }

    if(index < maxAllowedIndex) {
      setIndex(prevIndex =>  prevIndex + 1);
      return;
    }
  }

  useEffect(
    () => {
      let intervalId = setInterval(() => {
        slider();
      }, 5000)
      return () => clearInterval(intervalId);
    } 
, [index])


  return (
    <>
      <section className="section">
      <Header />
      <Person image={image} name={name} title={title} quote={quote}/>
      </section>
    </>
  )
}

export default App;
