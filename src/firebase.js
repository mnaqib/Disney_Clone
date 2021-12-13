import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClVLeCSa_VD9J6OeMUuBt-5F-Tt8OSyFA",
  authDomain: "disney-clone-2cfc9.firebaseapp.com",
  projectId: "disney-clone-2cfc9",
  storageBucket: "disney-clone-2cfc9.appspot.com",
  messagingSenderId: "253048895605",
  appId: "1:253048895605:web:dff87bb924dfdc1088203c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
