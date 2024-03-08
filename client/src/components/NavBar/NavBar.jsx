import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState } from "react";
import styles from './NavBar.module.css';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center">
      <img width={200} src="icon-nav.svg" alt="icon nav" />
      <div className={`relative flex items-center w-1/3 ${styles.searchContainer}`}>
        <img className="w-6 h-6 ml-2" src="search-icon.svg" alt="search icon" />
        <input
          type="text"
          placeholder="Busca por receta o ingredientes"
          name="search"
        />
      </div>
      <div className="flex">
        {!isOpen && <img className="cursor-pointer" src="menu-off.svg" alt="menu icon off" onClick={toggleMenu} />}
        {isOpen && <img className="cursor-pointer" src="menu-on.svg" alt="menu icon on" onClick={toggleMenu} />}
        <button onClick={toggleMenu}>Menu</button>
        {isOpen && <DropdownMenu />}
      </div>
    </div>
  );
}

export default NavBar
