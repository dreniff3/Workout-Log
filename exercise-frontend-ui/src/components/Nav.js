import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/" class="link">Home</Link>
            <Link to="../add-exercise" class="link">Add</Link>
        </nav>
    );
}

export default Navigation;