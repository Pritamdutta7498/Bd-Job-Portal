import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
      {
        path: "/MyJobs",
        element: <MyJobs/>
      },
      //   {
      //     path: "services/:id",
      //     element: (
      //       <PrivateRoute>
      //         <ServiceDetails></ServiceDetails>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "register",
      //     element: <Register></Register>,
      //   },
    ],
  },
]);
export default router;
