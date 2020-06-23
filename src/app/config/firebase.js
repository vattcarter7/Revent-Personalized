import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC2wm5dtBzsxi8NBeiiqXN3ciOPLnqkbv4",
  authDomain: "revent-100e9.firebaseapp.com",
  databaseURL: "https://revent-100e9.firebaseio.com",
  projectId: "revent-100e9",
  storageBucket: "revent-100e9.appspot.com",
  messagingSenderId: "653152115972",
  appId: "1:653152115972:web:6813c7d2ad85e8368cc451",
  measurementId: "G-QY4778ZGNJ"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
