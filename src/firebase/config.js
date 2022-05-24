import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBXzOhspbpf75pg71QVKH3oNE3lpLK_Opo",
    authDomain: "udemy-vue-firebase-site-dc4fb.firebaseapp.com",
    projectId: "udemy-vue-firebase-site-dc4fb",
    storageBucket: "udemy-vue-firebase-site-dc4fb.appspot.com",
    messagingSenderId: "500079653509",
    appId: "1:500079653509:web:706fac3be3d2a5de88afec"
  };

//   Initialise firebase
firebase.initializeApp(firebaseConfig)

// Initialise authentication
const projectAuth = firebase.auth()

// Store the firestore in a variable to use in other files
const projectFirestore = firebase.firestore()

// get timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth}