import React from 'react';
import Header from "./Header";
import Categories from "./Categories";
import Menu from "./Menu";
import menuData from "../data";



function App() {
  let [menu, setMenu] = React.useState(showAllMenu());

  function showAllMenu() {
    return menuData.map(meal => (
       <Menu 
       key = {meal.id}
       title = {meal.title}
       category = {meal.category}
       price = {meal.price}
       img = {meal.img}
       description = {meal.desc}
     />
     ))
}


  function filterMenu(e) {
    e.persist();
    let requestedMeal = e.target.textContent;
    
    let filteredMenu = menuData.map(meal => {
      if(requestedMeal === "all") {
        return showAllMenu();
      }
      if(meal.category === requestedMeal) {
        
        return (
          <Menu 
          key = {meal.id}
          title = {meal.title}
          category = {meal.category}
          price = {meal.price}
          img = {meal.img}
          description = {meal.desc}
            />
          )
      }
    })
    setMenu(filteredMenu);
  }

  return (
    <main>
      <section className="menu section">
      <Header />
      <Categories filterMenu = {filterMenu} />
      <div className="section-center">
      {menu}
      </div>  
      </section>
    </main>
  )
}

export default App;
