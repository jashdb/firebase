import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABlsAslf1DQxwHnhRw_jPstw12bv1a3WM",
  authDomain: "fir-1stpr.firebaseapp.com",
  projectId: "fir-1stpr",
  storageBucket: "fir-1stpr.appspot.com",
  messagingSenderId: "144977173613",
  appId: "1:144977173613:web:23e282d741613da3cd7364"
};

firebase.initializeApp(firebaseConfig);
