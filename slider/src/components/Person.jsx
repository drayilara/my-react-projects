import React from "react";
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import people from "../data";

export default function Person() {
  let [index, setIndex] = React.useState(0);
  let maxAllowedIndex = people.length - 1;

  let { image, name, title, quote } = people[index];


  React.useEffect(
    () => {    
      let intervalId = setInterval(() => {

        // let article = document.querySelector("article");
        // let classList = article.classList

        // switch(article.className) {
        //   case "" : classList.add("activeSlide")
        //   break;

        //   case "activeSlide" :  classList.remove("activeSlide");
        //                         classList.add("nextSlide");
        //   break;

        //   // case "activeSlide" : classList.remove(article.className);
        //   //                      classList.add("lastSlide");
        //   // break;

        //   // case "lastSlide" : classList.remove(article.className);
        //   //                     classList.add("nextSlide");
        //   // break;

        //   // case "nextSlide" : classList.remove(article.className)
        //   //                     classList.add("activeSlide");
        //   // break;


        //   default : console.log(`The current class name is ${article.className}`)
        // }

        if(index === maxAllowedIndex) {
          setIndex(0);
          return;
        }
    
        if(index < maxAllowedIndex) {
          setIndex(prevIndex =>  prevIndex + 1);
          return;
        }
            
      }, 2000)
      return () => clearInterval(intervalId);
    } 
, [index]);

    return (
        <>
        <div className="section-center">
            <article>
                <img className="person-img" src={image} alt={name}/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"/>
                <button className="prev">
                <FiChevronLeft />
                </button>
                <button className="next">
                <FiChevronRight />
                </button>
            </article>
        </div>
        </>    
    )
}