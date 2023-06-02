import React from 'react';

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header>
            <h2>ShowTix</h2>
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>Shows</li>
                <li>Stunts</li>
            </ul>
        </header>
    )
}

export default Header