import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';


const firebaseConfig = {
  apiKey: "AIzaSyA8jsnI4bkTte_oSNEHgWpq_G-GqhkTZ-0",
  authDomain: "marvel-firebase-don.firebaseapp.com",
  projectId: "marvel-firebase-don",
  storageBucket: "marvel-firebase-don.appspot.com",
  messagingSenderId: "651530599512",
  appId: "1:651530599512:web:cd662f6c4b2d8691a05e2d"
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <ProviderLayer />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
