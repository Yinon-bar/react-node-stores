import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/list">List</NavLink>
      <NavLink to="/insert">Insert</NavLink>
    </div>
  );
}

export default Menu;
