import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeEHAWODPNTMfVnFC1IQ3q6TF0BOYYe50",
  authDomain: "blog-c8efa.firebaseapp.com",
  databaseURL: "https://blog-c8efa-default-rtdb.firebaseio.com",
  projectId: "blog-c8efa",
  storageBucket: "blog-c8efa.appspot.com",
  messagingSenderId: "653129137079",
  appId: "1:653129137079:web:887e9fec2d002a6aac8632",
  measurementId: "G-ZSDLEKSVYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db =getFirestore(app);
export const auth= getAuth(app);
export const provider =  new  GoogleAuthProvider(app);

