import '../register/Register.css';

import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

  const { onRegisterSubmit } = useContext(AuthContext);
  const {values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit);

  return (
    <section id="register">
      <h2>Register</h2>
      <form id="register-form" method="POST" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
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
          value={values.password}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          required=""
          value={values.confirmPassword}
          onChange={changeHandler}
        />
        <br />
        <input type="submit" defaultValue="Register" />
      </form>
    </section>
  )
}

export default Register;