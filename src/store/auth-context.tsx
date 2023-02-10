import React, { useState, useEffect } from "react";
import moment from "moment";
import TodoType from "../Models/todo";
import UserType from "../Models/user";

type AuthContextObj = {
  currentUser: UserType;
  addUser: (userInfo: UserType) => void;
};

export const AuthContext = React.createContext<AuthContextObj>({
  currentUser: {
    email: "",
    uid: "",
    phone: "",
    photo: "",
    creationTime: "",
    lastLogin: "",
    name: "",
  },
  addUser: (userInfo: UserType) => {},
});
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const AuthContextProvider: React.FC<Props> = props => {
  const [user, setUser] = useState<UserType>({
    email: "",
    uid: "",
    phone: "",
    photo: "",
    creationTime: "",
    lastLogin: "",
    name: "",
  });
  const addUserHandler = (userInfo: UserType) => {
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
