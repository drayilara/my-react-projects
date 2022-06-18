import React, { useEffect, useState } from 'react';
import Card from "./Card";
import Heading from "./Heading";


function App() {

  let [fetchedTours, setFetchedTours] = useState([]);

  async function getTours() {
        const toursUrl = 'https://course-api.com/react-tours-project';
        await fetch(toursUrl)
        .then(response => response.json())
        .then(toursData => setFetchedTours(toursData))
        .catch(err => console.log(err));
  }

  useEffect(
    () => {
      let ignore = false;

      !ignore && getTours();

      return () => ignore = true;
    }
  ,[]);

  let Cards = () => fetchedTours.map(tour => 
     (
    <Card 
      key ={tour.id}
      image ={tour.image}
      info={tour.info}
      name={tour.name}
      price={tour.price}
    />
    )
  )

  return (
    <main>
      <section>
        <Heading />
        {Cards()}
      </section>
    </main>
        
  )
}

export default App


// const url = 'https://course-api.com/react-tours-project'