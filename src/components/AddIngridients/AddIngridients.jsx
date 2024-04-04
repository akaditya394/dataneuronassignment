import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./AddIngridients.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/slices/recipeReducer";
import Ingridient from "../Ingridient/Ingridient";
import { addingridientList } from "../../redux/slices/ingridientListReducer";

//users can add and remove ingridient of thier choice

const AddIngridients = () => {
  const dispatch = useDispatch();
  const [ingridient, setIngridient] = useState("");
  const [ingridientsList, setIngridientsList] = useState([]);
  const [saveList, setSaveList] = useState(false);
  const [getRecipeExeTime, setGetRecipeExeTime] = useState(0);

  const onAddIngridient = (e) => {
    e.preventDefault();
    if (ingridient.length > 2) {
      setIngridientsList([...ingridientsList, ingridient]);
      dispatch(addingridientList(ingridient));
      setIngridient("");
    } else {
      toast.error("Ingridient name can't be shorter than 3 characters...");
    }
  };

  const onRemove = (name) => {
    setIngridientsList(ingridientsList.filter((item) => item !== name));
  };

  const generateRecipe = async (string) => {
    toast.success("Generating delicious recipe....😋");
    const start = window.performance ? window.performance.now() : 0; // exec time start value

    // Making POST request to backend API
    try {
      const url = "http://localhost:3001/";

      const response = await axios.post(url, string);
      // Dispatching action to add generated recipe to Redux store
      dispatch(addRecipe(response.data));
      toast.success("There you go! 🍛");
      const end = window.performance ? window.performance.now() : 0;
      setGetRecipeExeTime(end - start);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.addIngridients}>
      <h1 className={styles.appName}>flavor</h1>
      {saveList ? (
        <div>
          <p>
            <b>Generate recipe with the added ingridients?</b>
          </p>
          <p>{ingridientsList.join(", ")}</p>
          <div className={styles.decision}>
            <button onClick={() => generateRecipe(ingridientsList)}>Yes</button>
            <button onClick={() => setSaveList(false)}>Update List</button>
          </div>
        </div>
      ) : (
        <>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="ingridient name..."
              value={ingridient}
              onChange={(e) => setIngridient(e.target.value)}
            />
            <button type="submit" onClick={onAddIngridient}>
              Add
            </button>
            {ingridientsList.length > 0 && (
              <button onClick={() => setSaveList(true)}>Save</button>
            )}
          </form>
          <div className={styles.listOfIngridients}>
            {ingridientsList.map((item) => (
              <Ingridient name={item} removeAndUpdate={onRemove} />
            ))}
          </div>
        </>
      )}
      {getRecipeExeTime > 0 && (
        <p>Recipe Generation Time: {getRecipeExeTime} milliseconds</p>
      )}
    </div>
  );
};

export default AddIngridients;
