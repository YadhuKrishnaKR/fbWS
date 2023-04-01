
// import './style/style.css';
import React, { Suspense } from "react";
import Home from './pages/Home';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import { CurrentUser } from "./data";
import Register from './pages/register/Register';
import Login from './pages/login/login';
import Feed from './components/feed/Feed';
// import AppState from "./AppState";
// import { unAuthenticatedRoutes } from "./routes/Unauthenticated";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      {/* <Navbar></Navbar> */}
      {/* <Sidebar></Sidebar> */}
      {/* <Stories></Stories> */}
      {/* <Share></Share> */}
      {/* <Home></Home> */}
      {/* <Profile user={CurrentUser}></Profile> */}
      {/* <Register></Register> */}
      {/* <Feed></Feed>  */}
      {/* <Login></Login> */}

      <div className="App">
        <Router>
          <div className="App">
          
            {/* <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul> */}
            <Routes>
              <Route exact path='/home' element={< Home />}></Route>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/' element={< Login />}></Route>
              <Route exact path='/register' element={< Register />}></Route>

            </Routes>
          </div>
        </Router>
      </div>

    </div>
  );
}

export default App;
