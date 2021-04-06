import firebase from "firebase/app"
import "firebase/auth"
import database from "firebase/database"

const config = firebase.initializeApp({
    apiKey:
    authDomain:
    databaseURL:
    projectId:
    storageBucket:
    messagingSenderId:
    appId:
})

let firebaseCache;
export const auth = config.auth();

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }
    
}