import React from "react";
import { Outlet } from "react-router-dom";

// import { Outlet } from "react-router-dom";
// import Footer from "../../pages/Footer/Footer";
// import Home from "../../pages/Home/Home";
// import Menubar from "../../pages/Menubar/Menubar";

const MainLayout = () => {
    return (
        <div>
           
            <Outlet/>
        </div>
    );
};

export default MainLayout;