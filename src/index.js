import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './components/Task'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Task />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
