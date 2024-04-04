import React from "react";
import styles from "./Ingridient.module.css";
import { useDispatch } from "react-redux";
import { removeingridientList } from "../../redux/slices/ingridientListReducer";

const Ingridient = ({ name, removeAndUpdate }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.ingridient}>
      {name.substring(0, 1).toUpperCase() + name.substring(1, name.length)}
      <button
        onClick={() => {
          removeAndUpdate(name);
          dispatch(removeingridientList(name));
        }}
      >
        X
      </button>
    </div>
  );
};

export default Ingridient;
