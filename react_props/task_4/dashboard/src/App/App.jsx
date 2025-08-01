import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { getLatestNotification } from '../utils/utils';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = false, coursesList }) {
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

   const defaultCourses  = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const courses = coursesList ?? defaultCourses;

  return (
    <>
      <div className="App">
        
        <Notifications list={notificationsList}/>

        <Header/>

        {isLoggedIn ? <CourseList courses={courses} /> : <Login />}
        
        <Footer/>

      </div>
    </>
  );
}

export default App
