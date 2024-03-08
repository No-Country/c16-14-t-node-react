import styles from './DropdownMenu.module.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {

  return (
    <div className={`flex flex-col top-10 ${styles.dropdown}`}>
      <ul className="flex flex-col gap-2">
          <li><Link to='/newdish'>Crear nueva receta</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li>Mis recetas</li>
          <li>Recetas guardadas</li>
          <li>Mi perfil</li>
          <li>Cerrar sesión</li>
        </ul>
    </div>
  );
}

export default DropdownMenu
