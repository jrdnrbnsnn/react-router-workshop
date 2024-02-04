import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
          <li>
            <Link to="/green">Green</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
