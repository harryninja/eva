import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <a href="#">
                        Inicio <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/service">Diferenciais</Link>
                </li>
                <li>
                    <a href="#">
                        Sobre <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">

                    </ul>
                </li>
                <li>
                    <a href="#">
                        Teste <i className="fal fa-angle-down" />
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
