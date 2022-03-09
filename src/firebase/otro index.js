import * as firebase from 'firebase/app';
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBT6NyHb5Al8OvzZDUs2N6-U0l0mwke5aY",
  authDomain: "triskel-macrame.firebaseapp.com",
  projectId: "triskel-macrame",
  storageBucket: "triskel-macrame.appspot.com",
  messagingSenderId: "695631687279",
  appId: "1:695631687279:web:9ed7d638d8da4d6f11a79a",
  measurementId: "G-W0LE8BCR30"
});
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}