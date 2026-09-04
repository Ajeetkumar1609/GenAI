import { Routes, Route } from 'react-router';
import { AuthProvider } from './features/auth/auth.context.jsx';
import Register from './features/auth/pages/RegisterPage.jsx';
import Login from './features/auth/pages/LoginPage.jsx';
import Protected from './features/auth/components/Protected.jsx';
import Home from './features/interview/pages/HomePage.jsx'
import Interview from './features/interview/pages/InterviewPage.jsx';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Routes> 
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/" element={ <Protected><Home /></Protected> } />
        <Route path="/interview" element={ <Protected><Interview /></Protected>} />
      </Routes>
    </AuthProvider>
  );
}

export default App
