import { Link } from 'react-router-dom';

import '../nav/Nav.css';

const Nav = () => {
  return (
    <nav>
    <ul>
      <li><Link to='/' className="link">Home</Link></li>
      <li><Link to='/login' className="link">Login</Link></li>
      <li><Link to='/register' className="link">Register</Link></li>
      <li><Link to='/logout' className="link">Logout</Link></li>
    </ul>
  </nav>
  )
}

export default Nav;