import { Fragment } from "react";
import Icons from "./icons/Icons";
import { faClock, faCalendar, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const CourseCard = (props) => {
  return (
    <Fragment>
      <div className="box">
        <span className="amount">$59.99</span>
        <img src={props.img} alt="" />
        <Icons />
        <h3>front end web development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          deserunt minima aspernatur non dolor animi ex in quae, quam quibusdam.
        </p>
        <NavLink to="#" className="btn">
          learn more
        </NavLink>
        <div className="icons">
          <p>
            <FontAwesomeIcon icon={faClock} />6 hours
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar} />2 months
          </p>
          <p>
            <FontAwesomeIcon icon={faBook} />
            10 modules
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default CourseCard;
