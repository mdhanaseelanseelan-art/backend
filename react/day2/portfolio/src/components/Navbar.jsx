import Logo from "../utils/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="shadow bg-white fixed top-0 w-full flex justify-between items-center">
        <div>
            <Logo/>
        </div>
        <div className="flex gap-15 mr-10 items-center font-bold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <div className="flex bg-yellow-300 p-2 w-30 justify-center text-center rounded-md">
            <Link to="/login">Login</Link>
            </div>     
        </div>
        </div>
        </>
    )
}
export default Navbar