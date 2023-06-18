import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDYYrMY0rinGXW-yNbx6UtNP3zSOToHAdo",
    authDomain: "olx-clone-15d74.firebaseapp.com",
    projectId: "olx-clone-15d74",
    storageBucket: "olx-clone-15d74.appspot.com",
    messagingSenderId: "699616093627",
    appId: "1:699616093627:web:25d88d7b1e97603f29109e",
    measurementId: "G-RZTW1WMC1J"
  };

  export default firebase.initializeApp(firebaseConfig)