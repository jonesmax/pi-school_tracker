import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/loginPage';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

