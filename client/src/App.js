import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const { user } = useContext(UserContext)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
      </Routes>
    </Router >

  );
}

export default App;
