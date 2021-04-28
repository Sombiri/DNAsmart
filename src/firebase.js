import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCxxGyxvifD3Og8L2gU-DPhD6HLczVBl-k",
    authDomain: "fir-dnasmart.firebaseapp.com",
    projectId: "fir-dnasmart",
    storageBucket: "fir-dnasmart.appspot.com",
    messagingSenderId: "725954949284",
    appId: "1:725954949284:web:5707b7f6a392d02ccd3631"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase