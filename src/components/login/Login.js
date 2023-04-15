import '../login/Login.css';

const Login = () => {
  return (
    <section id="login">
      <h2>Login</h2>
      <form id="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required="" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required="" />
        <br />
        <input type="submit" defaultValue="Login" />
      </form>
    </section>
  )
}

export default Login;