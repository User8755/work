import './header.css';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <NavLink to='/' className='header__nav-link'>
          Текущие задачи
        </NavLink>
        <NavLink to='/completed-tasks' className='header__nav-link'>
          Выполненые задачи
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
