import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXgrToAEbwvI-4HOPA2gGQxek8sKc-B8Q',
  authDomain: 'findartt.firebaseapp.com',
  databaseURL: 'https://findartt.firebaseio.com',
  projectId: 'findartt',
  storageBucket: 'findartt.appspot.com',
  messagingSenderId: '405378603130',
  appId: '1:405378603130:web:d9d785e89017bfa40903c3'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
