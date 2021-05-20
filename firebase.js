import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK9WwKmW-Fa91_xnNSFllveLMmov-ZXGo",
  authDomain: "annoying-chat.firebaseapp.com",
  projectId: "annoying-chat",
  storageBucket: "annoying-chat.appspot.com",
  messagingSenderId: "512110536075",
  appId: "1:512110536075:web:08eec2d64f5f8d56147b8e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
