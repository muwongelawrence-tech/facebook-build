
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBJheqHAQfMUj93hTt6DGRIty1s0dAji8",
    authDomain: "ml-netflix-clone.firebaseapp.com",
    projectId: "ml-netflix-clone",
    storageBucket: "ml-netflix-clone.appspot.com",
    messagingSenderId: "818844800621",
    appId: "1:818844800621:web:78d620e8f7142679aed164"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 const db = app.firestore();

//const db = firebase.firestore();

const storage = firebase.storage();

export { db , storage };
