import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

import '../nav/Nav.css';

const Nav = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {isAuthenticated && 
          <>
          <li><Link to='/' className="user-link"> {`Logged in as ${userEmail}`}</Link></li>
          <li><Link to='/create' className="link add-new-todo">Add New Todo</Link></li>
          <li><Link to='/logout' className="link">Logout</Link></li>
          </>
        }
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/catalog' className="link">Todos</Link></li>
        {!isAuthenticated && 
          <>
          <li><Link to='/login' className="link">Login</Link></li>
          <li><Link to='/register' className="link">Register</Link></li>
          </>
        }
        
        
        
      </ul>
    </nav>
  )
}

export default Nav;