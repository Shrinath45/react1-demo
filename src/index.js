import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { CookiesProvider } from 'react-cookie';
import { StateDemo } from './components/state-demo/state-demo.jsx';
import { HookDemo } from './components/Hooks/hook-demo.jsx';
import { Login } from './login.js';
import { ContextDemo } from './components/context-demo/context-demo.jsx';
import { ReducerDemo } from './components/Reducer-demo/reducer-demo.jsx';
import { Fakestore } from './components/fakestore/fakestore.jsx';
import { DemoComponent } from './components/class-component/demo-component.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <DemoComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
