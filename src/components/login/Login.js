import '../login/Login.css';

import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

const Login = () => {

  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit)
  return (
    <section id="login">
      <h2>Login</h2>
      <form id="login-form" method="POST" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>

        <input 
          type="email" 
          id="email" 
          name="email" 
          autoComplete="off"
          required="" 
          placeholder='stamat@abv.bg'
          value={values.email}
          onChange={changeHandler}
          />
        <br />

        <label htmlFor="password">Password</label>

        <input 
          type="password" 
          id="password" 
          name="password" 
          required=""
          autoComplete="off"
          value={values.password}
          onChange={changeHandler}
           />
          
        <br />

        <input type="submit" defaultValue="Login" />
      </form>
    </section>
  )
}

export default Login;