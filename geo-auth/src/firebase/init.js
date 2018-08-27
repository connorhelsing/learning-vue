import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtRRzKTZXLWFD393_u27U01YZRUVeJcGs",
    authDomain: "geo-auth.firebaseapp.com",
    databaseURL: "https://geo-auth.firebaseio.com",
    projectId: "geo-auth",
    storageBucket: "",
    messagingSenderId: "898698108939"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
