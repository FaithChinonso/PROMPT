import React, { useState, createContext } from "react";

type UiContextObj = {
  task: boolean;
  form: string;
  menu: boolean;
  signedIn: boolean;

  showForm: (str: string) => void;
  showTask: () => void;
  showMenu: () => void;
  setSignedIn: () => void;
};
export const UiContext = createContext<UiContextObj>({
  task: false,
  form: "",
  menu: false,
  signedIn: true,
  showForm: (str: string) => {},
  showTask: () => {},
  showMenu: () => {},
  setSignedIn: () => {},
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const UiContextProvider: React.FC<Props> = props => {
  const [formShow, setFormShow] = useState("");
  const [taskShow, setTaskShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [signed, setSigned] = useState(true);

  const showFormHandler = (strn: string) => {
    setFormShow(strn);
    setTaskShow(false);
    setMenuShow(false);
  };
  const showTaskHandler = () => {
    setTaskShow(prev => !prev);
    setFormShow("");
    setMenuShow(false);
  };
  const showMenuHandler = () => {
    setMenuShow(prev => !prev);
  };
  const signedInHandler = () => {
    setSigned(prev => !prev);
  };

  const contextValue: UiContextObj = {
    task: taskShow,
    form: formShow,
    menu: menuShow,
    signedIn: signed,
    showForm: showFormHandler,
    showTask: showTaskHandler,
    showMenu: showMenuHandler,
    setSignedIn: signedInHandler,
  };

  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  );
};
export default UiContextProvider;
