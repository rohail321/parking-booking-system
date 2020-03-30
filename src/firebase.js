import firebase from 'firebase'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDCPzIwKRAu-qLAKXOZyP6XQnmU7qkBST0",
    authDomain: "parking-booking-system-496f4.firebaseapp.com",
    databaseURL: "https://parking-booking-system-496f4.firebaseio.com",
    projectId: "parking-booking-system-496f4",
    storageBucket: "parking-booking-system-496f4.appspot.com",
    messagingSenderId: "175337037014",
    appId: "1:175337037014:web:89a4a8233246e491743d77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase
