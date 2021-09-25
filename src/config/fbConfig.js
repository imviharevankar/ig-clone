// import "firebase/compat/firestore";
// import "firebase/compat/auth";



// frebase.initializeApp(firebaseConfig);
// firebase.fireStore().settings({ timestampsInSnapshot: true });

// export default firebase;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyChGhpPPL_HnVbScQ-1sKDJvOs9v6wKoVE",
  authDomain: "ig-clone-a576e.firebaseapp.com",
  projectId: "ig-clone-a576e",
  storageBucket: "ig-clone-a576e.appspot.com",
  messagingSenderId: "486720350722",
  appId: "1:486720350722:web:f33afe78055a9923b0151b",
  measurementId: "G-03VET15MVE",
};



firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

// export const auth = app.auth();

// export const db = app.firestore();

// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ 
//     timestampsInSnapshots: true
// })

export default firebase;