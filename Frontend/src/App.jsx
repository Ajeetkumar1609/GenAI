import { Routes, Route } from 'react-router';
import { AuthProvider } from './features/auth/auth.context.jsx';
import Register from './features/auth/pages/RegisterPage.jsx';
import Login from './features/auth/pages/LoginPage.jsx';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Routes> 
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/" element={ <h1>Home Page</h1> } />
      </Routes>
    </AuthProvider>
  );
}

export default App
