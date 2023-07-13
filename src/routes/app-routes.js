import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import TeacherPage from "../pages/TeacherPage";
import PricingPage from "../pages/PricingPage";
import ReveiwPage from "../pages/ReviewPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Home" element={<HomePage />}/>
            <Route path="/Course" element={<CoursePage />}/>
            <Route  path="/Teacher" element={<TeacherPage />}/>
            <Route path="/Pricing" element={<PricingPage />}/>
            <Route path="/Review" element={<ReveiwPage />}/>
            <Route path="/Contact" element={<ContactPage />}/>
        </Routes>
    )
}
export default AppRoutes;