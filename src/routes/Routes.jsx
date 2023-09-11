import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
export default router;
