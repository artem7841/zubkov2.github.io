import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); 
    };

    return (
        <nav className="navbar">

            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a onClick={() => scrollToSection('about')}>о ракете</a></li>
                <li><a onClick={() => scrollToSection('example')}>примеры работ</a></li>
                <li><a onClick={() => scrollToSection('abbility')}>возможности</a></li>
                <li><a onClick={() => scrollToSection('time')}>время подлета</a></li>
                <li><a onClick={() => scrollToSection('review')}>отзывы</a></li>
                <li><a onClick={() => scrollToSection('order')}>заказать</a></li>
            </ul>
     
        </nav>
    );
};

export default Navbar;
