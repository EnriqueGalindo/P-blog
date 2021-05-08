import firebase from "firebase/app"
import "firebase/auth"
import database from "firebase/database"

const config = firebase.initializeApp({
    apiKey: "AIzaSyAojZYoC9uNOpGUljPe8Wp4qYMqtDGlbtQ",
    authDomain: "personal-blog-site-1c74c.firebaseapp.com",
    databaseURL: "https://personal-blog-site-1c74c-default-rtdb.firebaseio.com",
    projectId: "personal-blog-site-1c74c",
    storageBucket: "personal-blog-site-1c74c.appspot.com",
    messagingSenderId: "971089961173",
    appId: "1:971089961173:web:325fc75de67574889a025c"
    measurementId: "G-SRFJ55T83S"
})

let firebaseCache;
export const auth = config.auth();

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }
    firebaseCache = firebase;
    return firebase
};

export default config