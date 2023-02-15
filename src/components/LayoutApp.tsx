import React, { useContext, useEffect, useState } from "react";
import TopNav from "./TopNav";

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

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
const LayoutApp: React.FC<Props> = ({ children }) => {
  const authCtx = useContext(AuthContext);
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
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchDetails();
  }, [user, loading]);
  return (
    <body className="max-h-screen h-screen overflow-scroll relative bg-white py-10">
      <TopNav />
      <main className="mt-10">
        <SideNav />
        <div className="ml-[200px]"> {children}</div>
      </main>
    </body>
  );
};

export default LayoutApp;
