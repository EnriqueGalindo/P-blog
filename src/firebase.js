import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyAojZYoC9uNOpGUljPe8Wp4qYMqtDGlbtQ",
    authDomain: "personal-blog-site-1c74c.firebaseapp.com",
    projectId: "personal-blog-site-1c74c",
    storageBucket: "personal-blog-site-1c74c.appspot.com",
    messagingSenderId: "971089961173",
    appId: "1:971089961173:web:325fc75de67574889a025c"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};