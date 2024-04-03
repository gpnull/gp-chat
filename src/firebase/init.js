import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDcEPP42Mrr1nSQ6DPL_YXTFPs1tnvZfpM",
    authDomain: "gp-chat-9c9ba.firebaseapp.com",
    databaseURL: "https://gp-chat-9c9ba.firebaseio.com",
    projectId: "gp-chat-9c9ba",
    storageBucket: "gp-chat-9c9ba.appspot.com",
    messagingSenderId: "268573838894",
    appId: "1:268573838894:web:efc6fad50a3705d19f59bf",
    measurementId: "G-NKEYDWF0FH"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// firebase.analytics();

export default firebaseApp.firestore()