import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase/app";
// import env from "react-dotenv";

// var firebaseConfig = {
//   apiKey: env.API_KEY,
//   authDomain: env.AUTH_DOMAIN,
//   projectId: env.PROJECT_ID,
//   storageBucket: env.STORAGE_BUCKET,
//   messagingSenderId: env.MESSAGING_SENDER_ID,
//   appId: env.APP_ID,
//   measurementId: env.MEASUREMENT_ID
// };

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
