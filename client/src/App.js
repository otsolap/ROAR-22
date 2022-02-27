import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router >

  );
}

export default App;
