import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { GentleApp } from './components/gentleApp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GentleApp />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

