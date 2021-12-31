import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsdK3nSackjIXOGer4yNvCy5MrYa454-E",
    authDomain: "hero-rider-d7e46.firebaseapp.com",
    projectId: "hero-rider-d7e46",
    storageBucket: "hero-rider-d7e46.appspot.com",
    messagingSenderId: "948191317080",
    appId: "1:948191317080:web:067a2396a2e45399f1ce2d",
    measurementId: "G-BG5V4N5F93"
  };


 const initFirebaseApp = ()=> {
    initializeApp(firebaseConfig);
}

export default initFirebaseApp ;