import React from 'react';
import Question from './Question';
import questionsData from "../data";

function App() {
  
  let questions = questionsData.map(question => {
    let {id, title, info} = question
    return (
      <Question 
        key = {id}
        id = {id}
        title = {title}
        info = {info}
      />
    )
  })
  return (
    <main>
      <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
            {questions}
      </section>
      </div>   
    </main>
  )
}

export default App;
