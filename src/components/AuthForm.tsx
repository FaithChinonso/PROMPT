import React, { SyntheticEvent, useContext, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import "firebase/auth";

import { AuthContext } from "../store/auth-context";
import { UiContext } from "../store/ui-context";
import { redirect } from "react-router-dom";
import UserType from "../Models/user";
import { sendUserDetails } from "../request";
import useHTTPPut from "../Hooks/use-httppost";

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

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UiContext);
  const auth = getAuth();
  const paste = useHTTPPut();
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; password: any }>({
    email: "",
    password: "",
  });
  initializeApp(firebaseConfigg);
  const sendUser = (data: UserType) => {
    paste({ endpoint: "user.json", data });
  };
  const submitFormHandler = (e: any) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setError("Please fill all fields before submission");
      return;
    }
    if (uiCtx.signedIn) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(userCredential => {
          const user = userCredential.user;
          const payload: UserType = {
            email: user.email,
            uid: user.uid,
            phone: user.phoneNumber,
            photo: user.photoURL,
            creationTime: user.metadata.creationTime,
            lastLogin: user.metadata.lastSignInTime,
            name: user.displayName,
          };
          sendUser(payload);
          setError("Successfully signed in");
          console.log(userCredential.user?.email);
          console.log(authCtx.currentUser);
          window.location.href = "/home";
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode} ${errorMessage}`);
          setError(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(userCredential => {
          setError("Successfully signed up");
          uiCtx.setSignedIn();
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode} ${errorMessage}`);
          setError(errorMessage);
          // ..
        });
    }
  };

  return (
    <form
      className="flex flex-col space-y-4 p-4 w-full"
      onSubmit={submitFormHandler}
    >
      <div>{error && error}</div>
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
