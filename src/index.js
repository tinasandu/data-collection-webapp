import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamplePage from './components/ExamplePage';
import SendPage from './components/SendPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/data-col-test">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="example" element={<ExamplePage />} />
        <Route path="videosPage" element={<SendPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
