import PropTypes from "prop-types";
import "./Contador.css";
import React, { useState } from "react";

export function Contador() {
   const [count, setCount] = useState(0);

   const handleSumar = () => {
      setCount(() => count + 1);
   };
   const handleRestar = () => {
      setCount(() => count - 1);
   };
   const handleDefault = () => {
      setCount(() => 0);
   };

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={handleSumar}>Sumar</button>
         <button onClick={handleRestar}>Restar</button>
         <button onClick={handleDefault}>Default</button>
      </div>
   );
}

Contador.propTypes = {};
