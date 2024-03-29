import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfigg = {
  apiKey: "AIzaSyDg71k534FWKegc-EZgXWD3m2V7pixReRI",
  authDomain: "todo-app-a7762.firebaseapp.com",
  databaseURL: "https://todo-app-a7762-default-rtdb.firebaseio.com",
  projectId: "todo-app-a7762",
  storageBucket: "todo-app-a7762.appspot.com",
  messagingSenderId: "639345066815",
  appId: "1:639345066815:web:d0d83a6ba328c8e8a8498a",
  measurementId: "G-CYGCF5SHH5",
};
initializeApp(firebaseConfigg);
const auth = getAuth();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};
const registerWithEmailAndPassword = async (email, password, name, phone) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email: email,
      name: name,
      phone: phone,
    });
  } catch (err) {
    console.error(err);
  }
};
const sendPasswordReset = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
