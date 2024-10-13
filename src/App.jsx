import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="bg-secondary-bg px-2 py-3">
        <ul className="flex items-center gap-2 font-bold text-gray-500">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
