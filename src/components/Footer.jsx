import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer" id="navbar">
      <footer>
        <p>
          <Link to="/blue">Blue</Link>
        </p>
        <p>
          <Link to="/red">Red</Link>
        </p>
        <p>
          <Link to="/green">Green</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </footer>
    </div>
  );
}
