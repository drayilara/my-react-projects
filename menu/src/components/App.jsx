import React from 'react';
import Header from "./Header";
import Categories from "./Categories";
import Menu from "./Menu";
import menuData from "../data";



function App() {
  let [menu, setMenu] = React.useState(allMenu());

  function menuAndProps(meal){
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

  function allMenu() {
    return menuData.map(meal => (
       menuAndProps(meal)
     ))
  }

  function filterMenu(e) {
    e.persist();
    let { textContent:requestedMeal } = e.target;
    let filteredMenu;

      if(requestedMeal === "all") {
          filteredMenu = allMenu();
      }else{
          filteredMenu = menuData.map(meal => {
            if(meal.category === requestedMeal) { 
              return menuAndProps(meal);
            }
          })
      }    
    return setMenu(filteredMenu);
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
