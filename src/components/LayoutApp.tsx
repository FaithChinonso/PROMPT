import React, { useContext, useEffect, useState } from "react";
import TopNav from "./TopNav";
import { format } from "date-fns";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfiq";
import { AuthContext } from "../store/auth-context";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import { UiContext } from "../store/ui-context";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
const LayoutApp: React.FC<Props> = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UiContext);
  const [user, loading, error] = useAuthState(auth);
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const fetchDetails = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      authCtx.addUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        uid: data.uid,
      });
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  const today = new Date();
  const currentHour = format(today, "HH");
  useEffect(() => {
    uiCtx.setEvening(currentHour);
  }, [currentHour]);
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchDetails();
  }, [user, loading]);
  return (
    <body
      className={`max-h-screen h-screen overflow-scroll relative  py-10 ${
        uiCtx.evening ? "text-offWhite bg-black" : "text-meduimGrey bg-white"
      }`}
    >
      <TopNav />
      <main className={`mt-12  `}>
        <SideNav />
        <div
          className={`ml-[200px] min-h-[calc(100vh-40px)]  relative z-[1px] `}
        >
          {" "}
          {children}
        </div>
      </main>
    </body>
  );
};

export default LayoutApp;
