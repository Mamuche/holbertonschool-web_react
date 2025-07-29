import './App.css'
import { useRef } from 'react';
import Notifications from './Notifications';
import logo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';


function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <>
      <div className="App">
        
        <div className="root-notifications">
          <Notifications/>
        </div>

        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email" onClick={() => emailRef.current && emailRef.current.focus()}>Email</label>
            <input type="email" name="email" id="email" ref={emailRef} />

            <label htmlFor="password" onClick={() => passwordRef.current && passwordRef.current.focus()}>Password</label>
            <input type="password" name="password" id="password" ref={passwordRef} />

            <button type="submit">OK</button>
          </form>
        </div>

        <div className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    </>
  );
}

export default App
