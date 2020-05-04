import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.scss';

class Navbar extends React.Component {
  render() {
      return (
        <ul>
            <Link to="/">
                <li className="pink">
                    <div className="nav-item">
                        About
                    </div>
                </li>
            </Link>
            <Link to="/wishlist">
                <li className="green">
                    <div className="nav-item">
                        Wishlist
                    </div>
                </li>
            </Link>
            <Link to="/thanks">
                <li className="blue">
                    <div className="nav-item">
                        Thanks
                    </div>
                </li>
            </Link>
            <Link to="/donate">
                <li className="purple">
                    <div className="nav-item">
                        Donate
                    </div>
                </li>
            </Link>
        </ul>
      );
  }
}

export default Navbar;