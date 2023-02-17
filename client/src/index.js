import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ListAPI from './components/ListAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BaseLayout>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ListAPI />} />
      </Switch>
    </BaseLayout>
  </Router>
);


