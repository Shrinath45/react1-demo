import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/home/home.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { DataBinding } from './components/data-binding/data-binding.jsx';
import { MouseEvents } from './components/mouse-events/mouse-events.jsx';
import { MouseAnimation } from './components/mouse-events/mouse-animation.jsx';
import { MouseMove } from './components/mouse-events/mouse-move.jsx';
import { KeyDemo } from './components/key-demo/key-demo.jsx';
import { ClassBinding } from './components/class-binding/class-binding.jsx';
import { DebounceDemo } from './components/Debounce/debounce-demo.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <DataBinding /> */}
    {/* <MouseEvents />
    <MouseAnimation /> */}

    {/* < ClassBinding />
    < MouseMove /> */}

    {/* < KeyDemo /> */}
    <DebounceDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
