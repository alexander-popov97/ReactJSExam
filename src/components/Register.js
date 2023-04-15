const Register = () => {
  return (
    <section id="register">
      <h2>Register</h2>
      <form id="register-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required="" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required="" />
        <br />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required=""
        />
        <br />
        <input type="submit" defaultValue="Register" />
      </form>
    </section>
  )
}

export default Register;