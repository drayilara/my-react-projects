import React from 'react';
import Card from "./Card";
import Heading from "./Heading";


function App() {

  let [fetchedTours, setFetchedTours] = React.useState([]);

  async function getTours() {
        const toursUrl = 'https://course-api.com/react-tours-project';
        await fetch(toursUrl)
        .then(response => response.json())
        .then(toursData => setFetchedTours(toursData))
        .catch(err => console.log(err));
  }

  React.useEffect(
    () => {
      let ignore = false;

      !ignore && getTours();

      return () => ignore = true;
    }
  ,[]);

  function deleteCard(e, cardId) {
    e.persist();
    if(e.target.id === cardId) {
      return setFetchedTours(prev => {
            return prev.filter(tour => tour.id !== cardId);
      });
    }
}

  let Cards = () => fetchedTours.map(tour => 
     (
    <Card 
      key={tour.id}
      cardId={tour.id}
      image={tour.image}
      info={tour.info}
      deleteCard={deleteCard}
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