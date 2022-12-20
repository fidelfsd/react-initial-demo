import "./Person.css";
import PropTypes from "prop-types";

export const Person = ({ name, surname, age }) => {
   return (
      <div className="Person">
         <h2>
            {name} {surname}
         </h2>
         <div>Edad: {age}</div>
      </div>
   );
};

Person.propTypes = {
   name: PropTypes.string.isRequired,
   surname: PropTypes.string,
   age: PropTypes.number,
};
