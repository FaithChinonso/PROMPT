import React, { useState, useEffect } from "react";
import moment from "moment";
import TodoType from "../Models/todo";
import UserType from "../Models/user";

type AuthContextObj = {
  currentUser: {
    email: string;
    uid: string;
    phone:string;
   
    name: string;
  };
  addUser: (userInfo: {
    email: string;
    uid: string;
    phone:string;
   
    name: string;
  }) => void;
};

export const AuthContext = React.createContext<AuthContextObj>({
  currentUser: {
    email: "",
    uid: "",
    phone: "",
   
    name: "",
  },
  addUser: (userInfo: {
    email: string;
    uid: string;
    phone:string;
   
    name: string;
  }) => {},
});
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const AuthContextProvider: React.FC<Props> = props => {
  const [user, setUser] = useState<{
    email: string;
    uid: string;
    phone:string;
   
    name: string;
  }>({
    email: "",
    uid: "",
    phone: "",
    name: "",
 
  });
  const addUserHandler = (userInfo: {
    email: string;
    uid: string;
    phone:string;
   
    name: string;
  }) => {
    setUser(userInfo);
  };
  const contextValue: AuthContextObj = {
    currentUser: user,
    addUser: addUserHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
