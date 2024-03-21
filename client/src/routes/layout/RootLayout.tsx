import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Root() {
    return (
        <>
            <Navbar />
            <div className="h-[calc(100%-56px)] relative">
                <Outlet />
            </div>
        </>
    );
}