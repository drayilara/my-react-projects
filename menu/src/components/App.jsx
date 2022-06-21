import React from 'react';
import Header from "./Header";
import Categories from "./Categories";
import Menu from "./Menu";
import menuData from "../data";



function App() {

  let [menu, setMenu] = React.useState(allMenu());
  let [categories] = React.useState(["all", ...dynamicallyGenerateCategoryFromData()]);

  function dynamicallyGenerateCategoryFromData() {
    return Array.from(new Set(menuData.map(meal => meal.category)));
  }

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
    let { name:requestedMeal } = e.target;
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
      <Categories filterMenu = {filterMenu} categories = {categories} />
      <div className="section-center">
      {menu}
      </div>  
      </section>
    </main>
  )
}

export default App;
