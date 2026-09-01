import {Routes, Route} from 'react-router';
import Register from './features/auth/pages/RegisterPage.jsx';
import Login from './features/auth/pages/LoginPage.jsx';
import './App.css'

function App() {

  return (
    <Routes> 
      <Route path="/register" element={ <Register />} />
      <Route path="/login" element={ <Login />} />
    </Routes>
  );
}

export default App
