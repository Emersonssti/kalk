// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADKSAl7VokmAxMpaUtwR8cG6983OWeqwM",
  authDomain: "servemei-app.firebaseapp.com",
  projectId: "servemei-app",
  storageBucket: "servemei-app.appspot.com",
  messagingSenderId: "254373413701",
  appId: "1:254373413701:web:bc3f9189f7cb7b0b6a742c"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)