// import firebase from 'firebase'

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_BASEURL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/app'
import 'firebase/compat/analytics'

var firebaseConfig = {
  apiKey: "AIzaSyAmHJ2PqpbmqdYSddtDzGZvUFQUcMkMphs",
  authDomain: "test01-67056.firebaseapp.com",
  projectId: "test01-67056",
  storageBucket: "test01-67056.appspot.com",
  messagingSenderId: "543836332023",
  appId: "1:543836332023:web:40b8c2a14d88971b2218f2",
  measurementId: "G-9B5M28JSGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default {
  firebaseConfig,
}