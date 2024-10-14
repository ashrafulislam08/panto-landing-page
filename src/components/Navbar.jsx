import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About Us" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition duration-300 ease-in-out`}
    >
      <nav className="container mx-auto flex items-center justify-between py-6 px-4">
        {/* logo */}
        <div>
          <Link className="font-bold text-2xl" to="/">
            Panto
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* desktop menu */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* mobile menu items */}
        <div
          className={` fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-8 right-4"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-2xl" />
          <sup className="absolute top-0 -right-3 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
