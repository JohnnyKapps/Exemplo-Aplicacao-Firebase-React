import * as firebase from "firebase";

export const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
