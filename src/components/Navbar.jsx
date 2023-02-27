import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800">
      <div className="container flex items-center h-16 px-8">
        <p
          onClick={() => navigate("/")}
          className="text-white font-bold hover:cursor-pointer"
        >
          Employee Management System!
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
