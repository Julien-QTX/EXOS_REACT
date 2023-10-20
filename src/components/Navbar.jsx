import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Déterminez l'onglet actif en fonction de l'URL
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/Counter" className={isActive('/Counter') ? 'active' : ''}>
            Counter
          </Link>
        </li>
        <li>
          <Link to="/ToDoList" className={isActive('/ToDoList') ? 'active' : ''}>
            ToDoList
          </Link>
        </li>
        <li>
          <Link to="/UserProfil/0" className={isActive('/UserProfil') ? 'active' : ''}>
            UserProfil
          </Link>
        </li>
        <li>
          <Link to="/ListProduits" className={isActive('/ListProduits') ? 'active' : ''}>
            ListProduits
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
