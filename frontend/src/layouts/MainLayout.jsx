import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(){
    return (
        <div className="flex flex-col w-screen">
          <Header />
            <Outlet />
          <Footer />  
        </div>
    )
}