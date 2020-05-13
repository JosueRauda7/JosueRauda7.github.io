import React from 'react';
import { Link } from 'react-router-dom';

//components
import OpcionMenu from './OpcionMenu';

//style
import './styles/Menu.css';

class Menu extends React.Component
{
    render(){
        return (<div className="menu container-fluid">
                    <ul className="row">
                        <li className="nombre col-2">
                            <Link className="logo" to="/">Josué Rauda</Link>
                        </li>
                        <OpcionMenu opcion="Inicio" url="/" />
                        <OpcionMenu opcion="Blog" url="/blog" />
                        <OpcionMenu opcion="Contáctame" url="/contact" />
                        <OpcionMenu opcion="Sobre mí" url="/about" />
                    </ul>
            </div>);
    }
}

export default Menu;