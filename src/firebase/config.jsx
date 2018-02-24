import * as firebase from "firebase";

export const config = {
    apiKey: "AIzaSyA2rD86MFqqBIz6c1TQmFyeQK52Z9ZzNU0",
    authDomain: "levelupacademy-publicsite.firebaseapp.com",
    databaseURL: "https://levelupacademy-publicsite.firebaseio.com",
    projectId: "levelupacademy-publicsite",
    storageBucket: "levelupacademy-publicsite.appspot.com",
    messagingSenderId: "758285460221"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
