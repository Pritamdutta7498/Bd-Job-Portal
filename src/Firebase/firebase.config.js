// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKe6Hry28bgFyCtLWZ6DM6u-2CC83VYEU",
  authDomain: "bd-job-portal.firebaseapp.com",
  projectId: "bd-job-portal",
  storageBucket: "bd-job-portal.appspot.com",
  messagingSenderId: "36253311229",
  appId: "1:36253311229:web:07baf1be8a005638745e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain ,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket ,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId