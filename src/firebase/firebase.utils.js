import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjoOSrZ4KgV9tl723M0gbaIihDGSEp5GY",
    authDomain: "shop-a8755.firebaseapp.com",
    databaseURL: "https://shop-a8755.firebaseio.com",
    projectId: "shop-a8755",
    storageBucket: "shop-a8755.appspot.com",
    messagingSenderId: "636183038463",
    appId: "1:636183038463:web:ae51ff89b7c771f093ffca",
    measurementId: "G-EKPKB6TYK2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestor = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  