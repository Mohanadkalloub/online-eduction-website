import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              dolores sapiente.
            </p>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <NavLink to="/Home">home</NavLink>
            <NavLink to="/Course">course</NavLink>
            <NavLink to="/Teacher">teacher</NavLink>
            <NavLink to="/Pricing">price</NavLink>
            <NavLink to="/Review">review</NavLink>
            <NavLink to="/Contact">contact</NavLink>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <NavLink to="#" className="fab fa-facebook">
              <span>facebook</span>
            </NavLink>
            <NavLink to="#" className="fab fa-twitter">
              <span>twitter</span>
            </NavLink>
            <NavLink to="#" className="fab fa-instagram">
              <span>instagram</span>
            </NavLink>
            <NavLink to="#" className="fab fa-linkedin">
              <span>linkedin</span>
            </NavLink>
          </div>
          <div className="box">
            <h3>contact us</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              +123-456-789
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              smartstudy@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              mumbai , india 600700
            </p>
          </div>
        </div>

        <div className="credit">
          created by <span>mohanad kalloub</span> | all rights reserved
        </div>
      </section>
    </Fragment>
  );
};
export default Footer;
