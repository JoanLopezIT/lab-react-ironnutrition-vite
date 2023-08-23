import { useState } from "react";

function AddFoodForm(props){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");


    function resetInputs(){
        setName("");
        setImage("");
        setCalories("");
        setServings("");
      }


      const handleSubmit = (e) => {
        // I don't want the page to reload
        e.preventDefault();
        // Do we have access to the information?? YESSSS
        const newFood = {
          name: name,
          image: image,
          calories: calories,
          servings: servings
        }
    
        console.log(newFood);
 
        props.createFood(newFood);
        resetInputs();
      }



    return (
        <form id="foodForm">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" required onChange={(event) => setName(event.target.value)} value={name} /><br /><br />
    
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" required onChange={(event) => setImage(event.target.value)} value={image} /><br /><br />
    
          <label htmlFor="calories">Calories:</label>
          <input type="number" id="calories" name="calories" required onChange={(event) => setCalories(event.target.value)} value={calories} /><br /><br />
    
          <label htmlFor="servings">Servings:</label>
          <input type="number" id="servings" name="servings" required onChange={(event) => setServings(event.target.value)} value={servings} /><br /><br />
    
          <button onClick={(e) => handleSubmit(e)} type="submit">Create</button>
        </form>
      );
    }

    export default AddFoodForm
    
    
    
    
    
    