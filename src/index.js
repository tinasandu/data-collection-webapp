import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Auth';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamplePage from './components/ExamplePage';
import SendPage from './components/SendPage';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/data-collection-webapp">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="example" element={<ExamplePage />} />
        <Route path="tutorial" element={<SendPage />} />
        <Route path="video1" element={<Page1 />} />
        <Route path="video2" element={<Page2 />} />
        <Route path="video3" element={<Page3 />} />
        <Route path="video4" element={<Page4 />} />
        <Route path="video5" element={<Page5 />} />
        <Route path="video6" element={<Page6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
