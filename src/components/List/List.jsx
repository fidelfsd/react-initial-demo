import PropTypes from "prop-types";
import "./List.css";
import { ListItem } from "../ListItem/ListItem";

export function List({ list }) {
   return (
      <div className="List">
         {list.map((item) => (
            <ListItem key={item.objectID} item={item} />
         ))}
      </div>
   );
}

List.propTypes = {
   list: PropTypes.array.isRequired,
};
