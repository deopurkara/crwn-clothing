import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAe00bPtLsf2PAeOMnoad4kchAatqx_w_A",
    authDomain: "crwn-db-aa174.firebaseapp.com",
    databaseURL: "https://crwn-db-aa174.firebaseio.com",
    projectId: "crwn-db-aa174",
    storageBucket: "",
    messagingSenderId: "793908535326",
    appId: "1:793908535326:web:fc25b3946760053f4c8e0f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;