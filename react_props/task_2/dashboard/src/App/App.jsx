import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { getLatestNotification } from '../utils/utils';

function App() {
  const notificationsList = [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() }
    }
  ];
  
  return (
    <>
      <div className="App">
        
        <Notifications list={notificationsList}/>

        <Header/>

        <Login/>
        
        <Footer/>

      </div>
    </>
  );
}

export default App
