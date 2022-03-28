import './App.css';
import api from './utils/Api';
import Form from './components/Form';
import { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Main from './components/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();

  const onLogin = (e, email, password) => {
    e.preventDefault();
    api
      .login(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate(`/main`);
      })
      .catch(() => {
        window.alert('Email or Password is incorrect');
      });
  };

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Form onLogin={onLogin} />} />
        <Route
          path="/main"
          element={<ProtectedRoute path="/" loggedIn={loggedIn} />}
        >
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
