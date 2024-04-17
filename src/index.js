import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowUserInfo from './pages/ShowUserInfo/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="Formul-rio-simples/" element={<App/>}/>
            <Route path="/home" element={<ShowUserInfo/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);