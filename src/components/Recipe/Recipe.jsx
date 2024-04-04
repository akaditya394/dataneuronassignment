import React from "react";
import styles from "./Recipe.module.css";

// generated recipe will show here!

const Recipe = ({ recipe }) => {
  return (
    <div className={styles.recipe}>
      {recipe ? (
        <>
          <p>
            <b>Presenting the delicious....😋</b>
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: recipe
                .replace(/\n/g, "<br />")
                .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
            }}
          />
        </>
      ) : (
        <p>
          <b>Make your dish!</b>
        </p>
      )}
    </div>
  );
};

export default Recipe;
