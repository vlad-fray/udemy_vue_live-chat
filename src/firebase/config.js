import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxuYfEDlSx4ae3UNq2uqbiKkerZY7dRQ8',
  authDomain: 'udemy-vue-firebase-4fd39.firebaseapp.com',
  projectId: 'udemy-vue-firebase-4fd39',
  storageBucket: 'udemy-vue-firebase-4fd39.appspot.com',
  messagingSenderId: '238397836195',
  appId: '1:238397836195:web:6c930058efb7f7f8c0a816',
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
