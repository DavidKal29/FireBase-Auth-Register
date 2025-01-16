// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2jAGPRiznYB2eP6Ak3hK5lo23wWcPs8",
  authDomain: "fir-auth-e30ba.firebaseapp.com",
  projectId: "fir-auth-e30ba",
  storageBucket: "fir-auth-e30ba.firebasestorage.app",
  messagingSenderId: "699428975168",
  appId: "1:699428975168:web:181787cf2e8d87213d65a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)  //se hace la conexion con firebase
// export { auth }