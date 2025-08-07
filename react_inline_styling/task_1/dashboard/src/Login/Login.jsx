import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  appBody: {
    padding: '30px',
    fontSize: '1rem',
  },
  appForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

function Login() {

	return (
		<div className={css(styles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.appForm)}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">OK</button>
          </form>
        </div>
	);
}

export default Login
