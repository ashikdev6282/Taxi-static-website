import React, { useState } from "react";
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
    const [filteredDestinations, setFilteredDestinations] = useState([]);

    const handleLoginclick = () => {
        navigate("/login");
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        
       
        if (value.trim() !== "") {
            const filtered = destinationsList.filter((destination) =>
                destination.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredDestinations(filtered);
        } else {
            setFilteredDestinations([]);
        }
    };

    const handleDestinationClick = (destination) => {
        setSearchTerm(destination); 
        setFilteredDestinations([]); 
        console.log("Navigating to:", destination); 
    };

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
                        onChange={handleSearchChange}
                    />
                    <FaSearch className="search-icon" />

                    {filteredDestinations.length > 0 && (
                        <ul className="destination-list">
                            {filteredDestinations.map((destination, index) => (
                                <li
                                    key={index}
                                    className="destination-item"
                                    onClick={() => handleDestinationClick(destination)}
                                >
                                    {destination}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
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
                            <Link
                                to="/"
                                className="nav-link"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about"
                                className="nav-link"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="cab-booking"
                                className="nav-link"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                CabBooking
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="autobooking"
                                className="nav-link"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                AutoBooking
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleLoginclick}
                            >
                                <strong>Log In</strong>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
