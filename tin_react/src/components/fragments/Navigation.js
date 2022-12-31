import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona glowna</Link></li>
                <li><Link to="/employees"> Pracownicy </Link></li>
                <li><Link to="/departments">Departamenty</Link></li>
                <li><Link to="/employments">Zatrudnienie</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation