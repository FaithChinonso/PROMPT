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

type Props = {
  children?: React.ReactChild | React.ReactChild[];
  type: string;
};
const Layout: React.FC<Props> = ({ children, type }) => {
  const authCtx = useContext(AuthContext);
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const fetchEmail = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchEmail();
  }, [user, loading]);
  return (
    <body className="h-screen relative bg-white">
      <TopNav type={type} />
      <main className="mt-10">{children}</main>
    </body>
  );
};

export default Layout;
