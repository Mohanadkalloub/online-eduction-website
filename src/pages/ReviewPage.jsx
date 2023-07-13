import { Fragment } from "react";
import { PageContainer, ReviewCard } from "../components";
import StudentImage1 from "../assets/images/student-1.png";
import StudentImage2 from "../assets/images/student-2.png";
import StudentImage3 from "../assets/images/student-3.png";
import StudentImage4 from "../assets/images/student-4.png";
import StudentImage5 from "../assets/images/student-5.png";
import StudentImage6 from "../assets/images/student-6.png";
const ReveiwPage = () => {
  return (
    <PageContainer>
      <Fragment>
        <h1 className="heading">students review</h1>
        <section className="review">
          <ReviewCard img={StudentImage1} />
          <ReviewCard img={StudentImage2} />
          <ReviewCard img={StudentImage3} />
          <ReviewCard img={StudentImage4} />
          <ReviewCard img={StudentImage5} />
          <ReviewCard img={StudentImage6} />
        </section>
      </Fragment>
    </PageContainer>
  );
};
export default ReveiwPage;
