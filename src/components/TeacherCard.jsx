import { NavLink } from "react-router-dom";

const TeacherCard = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <h3>jhon deo</h3>
      <span>teacher</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id.
      </p>
      <div className="share">
        <NavLink to="#" className="fab fa-facebook"></NavLink>
        <NavLink to="#" className="fab fa-twitter"></NavLink>
        <NavLink to="#" className="fab fa-instagram"></NavLink>
        <NavLink to="#" className="fab fa-linkedin"></NavLink>
      </div>
    </div>
  );
};
export default TeacherCard;
