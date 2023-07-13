import { Fragment } from "react";
import TeacherImage1 from "../assets/images/teacher-1.png";
import TeacherImage2 from "../assets/images/teacher-2.png";
import TeacherImage3 from "../assets/images/teacher-3.png";
import TeacherImage4 from "../assets/images/teacher-4.png";
import { PageContainer, TeacherCard } from "../components";
const TeacherPage = () => {
  return (
    <PageContainer>
      <Fragment>
        <h1 className="heading">experienced teachers</h1>
        <section className="teachers">
          <TeacherCard img={TeacherImage1} />
          <TeacherCard img={TeacherImage2} />
          <TeacherCard img={TeacherImage3} />
          <TeacherCard img={TeacherImage4} />
        </section>
      </Fragment>
    </PageContainer>
  );
};
export default TeacherPage;
