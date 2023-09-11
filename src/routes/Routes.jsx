import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
// import LoginLayout from "../layouts/LoginLayout/LoginLayout";
// import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
// import Login from "../pages/Login/Login";
// import Services from "../pages/Services/Services";
// import ServiceDetails from "./../pages/ServiceDetails/ServiceDetails";
// import Register from "./../pages/Register/Register";
// import PrivateRoute from "./PrivateRoute";
// import MainLayout from "../layouts/Main/MainLayout";
// import Home from "../pages/Home/Home";
// import AddJob from "../pages/AddJob/AddJob";
// import MyJobs from "../pages/MyJobs/MyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
export default router;
