import React, { useState, createContext, FunctionComponent } from "react";

type UiContextObj = {
  task: boolean;
  modalOpened: boolean;
  modalContent: string | Element | JSX.Element | FunctionComponent;
  form: string;
  menu: boolean;
  signedIn: boolean;

  showForm: (str: string) => void;
  showTask: () => void;
  showMenu: () => void;
  showModal: (
    content: string | Element | JSX.Element | FunctionComponent
  ) => void;
  hideModal: () => void;
  setSignedIn: () => void;
};
export const UiContext = createContext<UiContextObj>({
  task: false,
  form: "",
  menu: false,
  signedIn: true,
  modalOpened: false,
  modalContent: "",
  showForm: (str: string) => {},
  showTask: () => {},
  showMenu: () => {},
  showModal: () => {},
  hideModal: () => {},
  setSignedIn: () => {},
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const UiContextProvider: React.FC<Props> = props => {
  const [formShow, setFormShow] = useState("");
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState<
    string | Element | JSX.Element | FunctionComponent
  >("");
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
  const showModalHandler = (
    content: string | Element | JSX.Element | FunctionComponent
  ) => {
    setModal(true);
    setModalContents(content);
  };
  const hideModalHandler = () => {
    setModal(false);
    setModalContents("");
  };

  const contextValue: UiContextObj = {
    task: taskShow,
    form: formShow,
    menu: menuShow,
    signedIn: signed,
    modalContent: modalContents,
    modalOpened: modal,
    showForm: showFormHandler,
    showTask: showTaskHandler,
    showMenu: showMenuHandler,
    setSignedIn: signedInHandler,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };

  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  );
};
export default UiContextProvider;
