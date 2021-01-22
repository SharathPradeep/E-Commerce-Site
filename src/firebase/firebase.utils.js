import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDDUXPglZqe_EodpNAZyd06d6B1ugMMI4U",
    authDomain: "crown-clothing-db-59293.firebaseapp.com",
    projectId: "crown-clothing-db-59293",
    storageBucket: "crown-clothing-db-59293.appspot.com",
    messagingSenderId: "849812737818",
    appId: "1:849812737818:web:c4e5aad4c29e7dcc50a6a3",
    measurementId: "G-PL6ZMJ5Q2Y"
};

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore =firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;