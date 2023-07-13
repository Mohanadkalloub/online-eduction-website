import { Fragment } from "react";
import CourseImage1 from "../assets/images/course-1.svg";
import CourseImage2 from "../assets/images/course-2.svg";
import CourseImage3 from "../assets/images/course-3.svg";
import CourseImage4 from "../assets/images/course-4.svg";
import CourseImage5 from "../assets/images/course-5.svg";
import CourseImage6 from "../assets/images/course-6.svg";
import { PageContainer, CourseCard } from "../components";
const CoursePage = () => {
  return (
    <PageContainer>
      <Fragment>
        <h1 className="heading">popular courses</h1>
        <section className="course">
          <CourseCard img={CourseImage1} />
          <CourseCard img={CourseImage2} />
          <CourseCard img={CourseImage3} />
          <CourseCard img={CourseImage4} />
          <CourseCard img={CourseImage5} />
          <CourseCard img={CourseImage6} />
        </section>
      </Fragment>
    </PageContainer>
  );
};
export default CoursePage;
