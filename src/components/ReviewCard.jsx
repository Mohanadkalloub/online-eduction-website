import { Fragment } from "react";

const ReviewCard = (props) => {
  return (
    <Fragment>
      <div className="box">
        <img src={props.img} alt="" />
        <h3>student</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dignissimos sapiente nostrum nemo eos, quas deleniti corporis
          perferendis quisquam voluptatem ipsam cupiditate quis quia alias
          molestiae. Molestiae corporis odit .
        </p>
      </div>
    </Fragment>
  );
};
export default ReviewCard;
