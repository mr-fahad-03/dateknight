import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logoipsum-logo.png"
const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="w-1/5  bg-usedColor h-screen fixed">
      <div className="flex items-center justify-center py-5">
        {/* Logo Section */}
        <img
          src={Logo} // Replace with the correct path to your image
          alt="Logo"
          className=" h-12 mt-4  object-cover"
        />
      </div>
      <nav className="flex flex-col mt-10 space-y-4 text-white font-semibold">
        <Link
          to="/"
          className={`p-4 rounded-md mx-4 ${
            location.pathname === "/"
              ? "bg-white text-usedColor"
              : "hover:bg-orange-300"
          }`}
        >
          Visitor Approval
        </Link>
        <Link
          to="/candidate-approval"
          className={`p-4 rounded-md mx-4 ${
            location.pathname === "/candidate-approval"
              ? "bg-white text-usedColor"
              : "hover:bg-orange-300"
          }`}
        >
          Candidate Approval
        </Link>
        <Link
          to="/manage-event"
          className={`p-4 rounded-md mx-4 ${
            location.pathname === "/manage-event"
              ? "bg-white text-usedColor"
              : "hover:bg-orange-300"
          }`}
        >
          Manage Event
        </Link>

        <Link
          to="/manage-winner"
          className={`p-4 rounded-md mx-4 ${
            location.pathname === "/manage-winner"
              ? "bg-white text-usedColor"
              : "hover:bg-orange-300"
          }`}
        >
          Manage Winner
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
