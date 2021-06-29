import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDE6GvIzwps4lCFXXnvmrSUyzQl287e6N0",
  authDomain: "fir-app-5372a.firebaseapp.com",
  projectId: "fir-app-5372a",
  storageBucket: "fir-app-5372a.appspot.com",
  messagingSenderId: "1063752469339",
  appId: "1:1063752469339:web:d0e84147f7d5780ba0687e",
  measurementId: "G-BN2N5RZ0K0"
};

  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
   } //connects fb -> BE

 export const firestore = firebase.firestore(); 
  // As we can use firestore in other components also, we have to
  // export it.

