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
  };

export const createUserProfileDocument = async (userAuth, additinalData) => {

  if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot  = await userRef.get();
  

  if(!snapShot.exists){
   const {displayName,email} = userAuth;
   const createdAt = new Date();


   try{
   await userRef.set({
     displayName,
     email,
     createdAt,
     ...additinalData
   })
   } catch(error){

    console.log('error creating user', error.message);
   }
  }
  return userRef;
};


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  