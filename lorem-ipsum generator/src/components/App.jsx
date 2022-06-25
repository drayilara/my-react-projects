import React from "react"
import Heading from "./Heading";
import Form from "./Form";
import lorem from "../data";

function App() {

    let [requestedParagraphs, setRequestedParagraphs] = React.useState(0);
    let [dataToDisplay, setDataToDisplay] = React.useState([]);


    function handleInput(e) {
        let { value } = e.target;
        setRequestedParagraphs(value);
    }

    function submitForm(e) {
        e.preventDefault();
        let data;

        if(requestedParagraphs <= 0) {
          data = lorem.slice(0,1);
        }

        if(requestedParagraphs > 0 && requestedParagraphs <= 8) {
          data = lorem.slice(0, requestedParagraphs);
        }

        if(requestedParagraphs > 8) {
          data = lorem;
        }
        
        setDataToDisplay(data);
    }

  return (
    <section className="section-center">
    <Heading />
    <Form 
      submitForm={submitForm}
      handleInput={handleInput}
      requestedParagraphs={requestedParagraphs}
    />

    <article className="lorem-text">
      {dataToDisplay.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </article>
    </section>
    
  )
}

export default App;
