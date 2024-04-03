import React, { useState } from "react";
import styles from "./AddIngridients.module.css";
import Ingridient from "../Ingridient/Ingridient";

const AddIngridients = () => {
  const [ingridient, setIngridient] = useState("");
  const [ingridientsList, setIngridientsList] = useState([]);
  const [saveList, setSaveList] = useState(false);

  const onAddIngridient = (e) => {
    e.preventDefault();
    setIngridientsList([...ingridientsList, ingridient]);
    setIngridient("");
  };

  return (
    <div className={styles.main}>
      {saveList ? (
        <div>
          <p>generate recipe with the added ingridients ?</p>
          <p>{ingridientsList.join(", ")}</p>
          <button>Yes</button>
          <button onClick={() => setSaveList(false)}>Update List</button>
        </div>
      ) : (
        <>
          <form>
            <input
              placeholder="ingridient name..."
              value={ingridient}
              onChange={(e) => setIngridient(e.target.value)}
            />
            <button type="submit" onClick={onAddIngridient}>
              Add
            </button>
            <button onClick={() => setSaveList(true)}>Save</button>
          </form>
          <div className={styles.listOfIngridients}>
            {ingridientsList.map((item) => (
              <Ingridient name={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AddIngridients;
