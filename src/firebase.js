import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB-WFUGKeIg9dxXYtU6__00GL0qdlc37KI",
  authDomain: "dnasmart-175df.firebaseapp.com",
  databaseURL: "https://dnasmart-175df-default-rtdb.firebaseio.com",
  projectId: "dnasmart-175df",
  storageBucket: "dnasmart-175df.appspot.com",
  messagingSenderId: "788307986929",
  appId: "1:788307986929:web:73e620e350b7d82e0e5c50",
  measurementId: "G-0Q8M84PEMJ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase