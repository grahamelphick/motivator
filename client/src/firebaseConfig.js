import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBMK_3VCbIQMnQFXbwoYD4ggkK4P6xp8tc",
  authDomain: "motivator-214ef.firebaseapp.com",
  projectId: "motivator-214ef",
  storageBucket: "motivator-214ef.appspot.com",
  messagingSenderId: "97209592545",
  appId: "1:97209592545:web:3df9bc1b3ee0537bd625a0",
  measurementId: "G-01B6Y2LK59"
});

export default firebaseConfig;