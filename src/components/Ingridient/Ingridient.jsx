import React from "react";

const Ingridient = ({ name }) => {
  return (
    <div>
      {name.substring(0, 1).toUpperCase() + name.substring(1, name.length)}
      <button>X</button>
    </div>
  );
};

export default Ingridient;
