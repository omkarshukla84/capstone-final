import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  // states
  const [click, setClick] = useState(false);
  // following function will handle toggling the click state variable value.
  const handleHamburgerClick = () => {
    return setClick(!click); // toggle menu
  };
  const closeMobileMenu = () => {
    return setClick(false); // close menu
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVELLO <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon">
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              onClick={handleHamburgerClick}
            ></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/destinations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                All Destinations
              </Link>
            </li>
            <li className="nav-item nav-auth">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="nav-auth-btn sign-in-btn">Sign In</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="user-button-wrapper">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "shadow-lg",
                        userButtonPopoverActionButton:
                          "text-gray-700 hover:text-gray-900",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
