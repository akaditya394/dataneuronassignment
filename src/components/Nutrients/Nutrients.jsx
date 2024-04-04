import React, { useEffect, useState } from "react";
import styles from "./Nutrients.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectingridientList } from "../../redux/slices/ingridientListReducer";

const Nutrients = () => {
  const selectingridients = useSelector(selectingridientList);
  const [getNutrientsExeTime, setGetNutrientsExeTime] = useState(0);
  const [nutrients, setNutrients] = useState("");
  const ingridients = selectingridients;

  // generating nutritional value of added ingridients
  const generateNutrients = async (string) => {
    const start = window.performance ? window.performance.now() : 0;
    try {
      const url = "https://dataneuronassignment.onrender.com/getNutrients";

      const response = await axios.post(url, string);
      setNutrients(response.data);
      toast.success("There you go! 🍛");
      const end = window.performance ? window.performance.now() : 0;
      setGetNutrientsExeTime(end - start);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={styles.nutrients}>
      {nutrients.length > 0 ? (
        <>
          <h1>Nutritional Value</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: nutrients
                .replace(/\n/g, "<br />")
                .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
            }}
          />
          <p>
            Generate Nutritional Value Exec. Time: {getNutrientsExeTime}{" "}
            milliseconds
          </p>
        </>
      ) : (
        <>
          {ingridients?.length > 0 ? (
            <>
              <button onClick={() => generateNutrients(ingridients)}>
                Get Nutritional Info
              </button>
            </>
          ) : (
            <>
              <p>Add Ingridients</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nutrients;
