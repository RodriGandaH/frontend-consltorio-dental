import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Patients from './components/Patients/Patients';

axios.defaults.baseURL = 'https://alident.herokuapp.com/';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="pacientes" element={<Patients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
