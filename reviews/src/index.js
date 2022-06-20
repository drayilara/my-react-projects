import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";

let root = document.getElementById('root');

ReactDOM.render(
<React.StrictMode>
<main>
    <section className="container">
    <App />
    </section>
</main> 
</React.StrictMode>,
  root);
