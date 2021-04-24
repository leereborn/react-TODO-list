import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="link" to="/react-TODO-list/">
        Home
      </Link>
      <Link className="link" to="/react-TODO-list/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
