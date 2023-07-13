import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header>
        <NavLink to="#" className="logo">
          smart<span>Study</span>
        </NavLink>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <NavLink
            to="/Home"
            className={(props) => (props.isActive ? "active" : "")}
            end>
            home
          </NavLink>
          <NavLink
            to="/Course"
            className={(props) => (props.isActive ? "active" : "")}
            end>
            course
          </NavLink>
          <NavLink
            to="/Teacher"
            className={(props) => (props.isActive ? "active" : "")}
            end>
            teacher
          </NavLink>
          <NavLink
            to="/Pricing"
            className={(props) => (props.isActive ? "active" : "")}
            end>
            pricing
          </NavLink>
          <NavLink
            to="/Review"
            className={(props) => (props.isActive ? "active" : "")}
            end>
            review
          </NavLink>
          <NavLink
            to="/Contact"
            className={(props) => (props.isActive ? "active" : "")}>
            contact
          </NavLink>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
