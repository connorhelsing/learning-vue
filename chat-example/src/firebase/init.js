import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsq2kWij7A7AbtWeFkzPdn_KkCV6c-YGM",
    authDomain: "chat-example-e5245.firebaseapp.com",
    databaseURL: "https://chat-example-e5245.firebaseio.com",
    projectId: "chat-example-e5245",
    storageBucket: "chat-example-e5245.appspot.com",
    messagingSenderId: "693555922430"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
