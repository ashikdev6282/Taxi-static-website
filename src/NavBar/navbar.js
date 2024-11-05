import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaTaxi, FaSearch } from "react-icons/fa";

const destinationsList = [
    "Kochi",
    "Trivandrum",
    "Munnar",
    "Alleppey",
    "Kumarakom",
    "Thekkady",
    "Kovalam",
    "Varkala",
    "Wayanad",
    "Thrissur",
    "Palakkad",
    "Kannur",
    "Kozhikode",
    "Kasargod",
];

function Navbar() {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLoginclick = (event) => {
        event.stopPropagation(); // Prevent click from bubbling up to document
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const gotoMyAccount = () => {
        closeDropdown();
        navigate("/myaccount");
    };

    const gotoLogin = () => {
        closeDropdown();
        navigate("/login");
    };

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light card-navbar">
                <FaTaxi style={{ fontSize: "60px", marginLeft: "10px", padding: "10px" }} />
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search your destination"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="search-icon" />
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 centered-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{ textDecoration: "none", color: "black" }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link" style={{ textDecoration: "none", color: "black" }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="cab-booking" className="nav-link" style={{ textDecoration: "none", color: "black" }}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="autobooking" className="nav-link" style={{ textDecoration: "none", color: "black" }}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item" ref={dropdownRef}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleLoginclick}
                            >
                                <strong>Log In</strong>
                            </button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={gotoLogin}>
                                        Log In
                                    </li>
                                    <li className="dropdown-item" onClick={gotoMyAccount}>
                                        My Account
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
