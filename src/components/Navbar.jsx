import { Link } from "react-router-dom";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About Us" },
];

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between py-6 px-4">
        {/* logo */}
        <div>
          <Link className="font-bold text-2xl" to="/">
            Panto
          </Link>
        </div>
        {/* desktop menu */}
        <div>
          <NavItems />
        </div>

        {/* cart icon */}
        <div>Cart</div>
      </nav>
    </header>
  );
};

export default Navbar;
