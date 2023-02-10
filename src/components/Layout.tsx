import React, { useContext, useEffect } from "react";
import TopNav from "./TopNav";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/auth";
import { redirect } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
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
type Props = {
  children?: React.ReactChild | React.ReactChild[];
  type: string;
};
const Layout: React.FC<Props> = ({ children, type }) => {
  const authCtx = useContext(AuthContext);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        authCtx.addUser({
          email: user.email,
          uid: user.uid,
          phone: user.phoneNumber,
          photo: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastLogin: user.metadata.lastSignInTime,
          name: user.displayName,
        });
        // ...
      } else {
        // User is signed out
        redirect("/");
        console.log("signedout");
        // ...
      }
    });
    console.log(authCtx.currentUser);
  }, []);
  return (
    <body className="h-screen relative bg-white">
      <TopNav type={type} />
      <main className="mt-10">{children}</main>
    </body>
  );
};

export default Layout;
