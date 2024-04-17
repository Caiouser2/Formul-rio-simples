import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ShowUserInfo from './pages/ShowUserInfo/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="simple-form/" element={<App/>}/>
            <Route path="/home" element={<ShowUserInfo/>}/>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);