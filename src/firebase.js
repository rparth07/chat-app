import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD1tWKrJjcJ3wj-ziBUK46MBm2L2X_0yrk",
  authDomain: "react-slack-clone-ae68d.firebaseapp.com",
  projectId: "react-slack-clone-ae68d",
  storageBucket: "react-slack-clone-ae68d.appspot.com",
  messagingSenderId: "681036062153",
  appId: "1:681036062153:web:599a8ef57b22a111f11c18",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
