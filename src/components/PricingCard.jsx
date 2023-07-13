import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const PricingCard = (props) => {
  const list = [
    "certificated",
    "full courses",
    "all modules",
    "live projects",
    "24 * 7 support",
  ];
  return (
    <Fragment>
      <div className="box">
        <h3>{props.title}</h3>
        <div className="amount">
          <span>$</span>20<span>/mo</span>
        </div>
        <ul>
          {list.map((list) => (
            <li key={list} value={list}>
              {list}
            </li>
          ))}
        </ul>
        <NavLink href="#" className="btn">
          select plan
        </NavLink>
      </div>
    </Fragment>
  );
};
export default PricingCard;
