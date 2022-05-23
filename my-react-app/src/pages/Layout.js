import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";

const Layout = () => {
  return (
    <>
      <nav className="meni">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/galerija">Galerija</Link>
          </li>
          <li>
            <Link id="contact" to="/contact">Contact</Link>
          </li>
          <li className="login" id="prvi">
            <Link to="/login">Log In</Link>
          </li>
          <li className="login l1" id="drugi">
            <Link to="/logged">Logged In</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;