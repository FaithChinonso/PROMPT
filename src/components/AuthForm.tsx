import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuthState } from "react-firebase-hooks/auth";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   getAuth,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import "firebase/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../firebaseConfiq";

import { AuthContext } from "../store/auth-context";
import { UiContext } from "../store/ui-context";
import { redirect, useNavigate } from "react-router-dom";
import UserType from "../Models/user";
import { sendUserDetails } from "../request";
import useHTTPPut from "../Hooks/use-httppost";
import { connectFirestoreEmulator } from "firebase/firestore";

// const firebaseConfigg = {
//   apiKey: "AIzaSyDg71k534FWKegc-EZgXWD3m2V7pixReRI",
//   authDomain: "todo-app-a7762.firebaseapp.com",
//   databaseURL: "https://todo-app-a7762-default-rtdb.firebaseio.com",
//   projectId: "todo-app-a7762",
//   storageBucket: "todo-app-a7762.appspot.com",
//   messagingSenderId: "639345066815",
//   appId: "1:639345066815:web:d0d83a6ba328c8e8a8498a",
//   measurementId: "G-CYGCF5SHH5",
// };

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UiContext);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const paste = useHTTPPut();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<{
    email: string;
    password: any;
    name: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  // initializeApp(firebaseConfigg);
  // const auth = getAuth();
  // const db = getFirestore();
  console.log(error?.name);
  useEffect(() => {
    // if (loading) {
    //   // maybe trigger a loading screen
    //   return;
    // }
    if (user && uiCtx.signedIn) navigate("/home");
    if (user && !uiCtx.signedIn) uiCtx.setSignedIn();
  }, [user, loading, uiCtx.signedIn]);
  const sendUser = (data: UserType) => {
    paste({ endpoint: "user.json", data });
  };
  const submitFormHandler = (e: any) => {
    e.preventDefault();
    if (data.email === "" || data.password === "" || data.name === "") {
      setErrorMessage("Please fill all fields before submission");
      return;
    }
    if (uiCtx.signedIn) {
      // logInWithEmailAndPassword(auth, data.email, data.password)
      //   .then(userCredential => {
      //     setError("Successfully signed in");
      //     console.log(userCredential.user?.email);
      //     console.log(authCtx.currentUser);
      //     // window.location.href = "/home";
      //   })
      //   .catch(error => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log(`${errorCode} ${errorMessage}`);
      //     setError(errorMessage);
      //   });
      logInWithEmailAndPassword(data.email, data.password);
    } else {
      registerWithEmailAndPassword(data.email, data.password, data.name);

      // .then(userCredential => {
      //   setError("Successfully signed up");
      //   const user = userCredential.user;
      //   addDoc(collection(db, "users"), {
      //     uid: user.uid,
      //     authProvider: "local",
      //     data.email,
      //   });
      //   uiCtx.setSignedIn();
      // })
      // .catch(error => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(`${errorCode} ${errorMessage}`);
      //   setError(errorMessage);
      //   // ..
      // });
    }
  };

  return (
    <form
      className="flex flex-col space-y-4 p-4 w-full"
      onSubmit={submitFormHandler}
    >
      <div>{}</div>
      {!uiCtx.signedIn && (
        <div className="w-full flex flex-col space-y-3">
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            className="border border-dimGrey bg-white text-meduimGrey focus:outline-none p-4 placeholder:text-lightGrey text-sm rounded-lg"
            type="text"
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
            name="name"
            value={data.name || ""}
            placeholder="Name"
          />
        </div>
      )}
      <div className="w-full flex flex-col space-y-3">
        <label className="" htmlFor="email">
          Email Address
        </label>
        <input
          className="border border-dimGrey bg-white text-meduimGrey focus:outline-none p-4 placeholder:text-lightGrey text-sm rounded-lg"
          type="email"
          onChange={(e: any) => setData({ ...data, email: e.target.value })}
          name="email"
          value={data.email || ""}
          placeholder="Email Address"
        />
      </div>
      <div className="w-full flex flex-col space-y-3">
        <label className="" htmlFor="password">
          Password
        </label>
        <div className="relative w-full">
          <input
            className="border border-dimGrey bg-white text-meduimGrey focus:outline-none p-4 w-full placeholder:text-lightGrey text-sm rounded-lg"
            type={`${showPassword ? "text" : "password"}`}
            onChange={(e: any) =>
              setData({ ...data, password: e.target.value })
            }
            name="password"
            value={data.password || ""}
            placeholder="Password"
          />
          <div
            className="absolute right-2 top-3"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? (
              <RemoveRedEyeIcon className="text-lightGrey text-sm" />
            ) : (
              <VisibilityOffIcon className="text-lightGrey text-sm" />
            )}
          </div>
        </div>
      </div>
      <button
        className="p-3 w-48 bg-softPrimary text-darkGrey rounded-lg mx-auto"
        type="submit"
      >
        {uiCtx.signedIn ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
