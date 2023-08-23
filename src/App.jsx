import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from 'react';



function App() {
  const [currentFood, setCurrentFood] = useState(foodsJson)


  function deleteFood(foodId){
    // console.log(foodId)
    const filteredFood = currentFood.filter((singleFood)=>{  
      return singleFood.id !== foodId

    })
    setCurrentFood(filteredFood)
console.log(filteredFood)
  }



  function createFood(foodIWantToAdd) {

    const newArray = [foodIWantToAdd, ...currentFood]

    setCurrentFood(newArray);
}



  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm createFood={createFood}  />
      {currentFood.map(food => {
                return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
            })}
        </div>
  );
}

export default App;
