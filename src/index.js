import React from 'react'; //this method of importing files are using es6
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//in  the below line it is saying that we are creating a react DOM using root id
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //the below tags are in JSX format and is used to render/run only stable version of react not the versions uder development
  <React.StrictMode>
    {/* everything that comes inside the <BrowserRouter> tag could inherit the property of routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);