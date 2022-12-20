import PropTypes from "prop-types";
import "./ListItem.css";

export function ListItem({ item }) {
   const handleClick = (item) => {
      console.log("click");
      console.log(item);
   };

   return (
      <div className="ListItem" onClick={() => handleClick(item)}>
         <div>
            <a href={item.url}>{item.title}</a>
         </div>
         <div>{item.author}</div>
         <div>{item.num_comments}</div>
         <div>{item.points}</div>
      </div>
   );
}

ListItem.propTypes = {
   item: PropTypes.object.isRequired,
};
