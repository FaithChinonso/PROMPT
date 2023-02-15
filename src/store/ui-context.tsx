import React, { useState, createContext, FunctionComponent } from "react";
import { _EVENINGTIME } from "../constants";

type UiContextObj = {
  task: boolean;
  modalOpened: boolean;
  modalContent: string | Element | JSX.Element | FunctionComponent;
  form: string;
  menu: boolean;
  signedIn: boolean;
  evening: boolean;

  showForm: (str: string) => void;
  showTask: () => void;
  showMenu: () => void;
  showModal: (
    content: string | Element | JSX.Element | FunctionComponent
  ) => void;
  setEvening: (hour: string) => void;
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
  evening: false,
  showForm: () => {},
  setEvening: () => {},
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
  const [eveningTime, setEveningTime] = useState<boolean>(false);
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
  const setEveningHandler = (hour: string) => {
    if (Number(hour) > _EVENINGTIME) {
      setEveningTime(true);
    } else {
      setEveningTime(false);
    }
  };

  const contextValue: UiContextObj = {
    task: taskShow,
    form: formShow,
    menu: menuShow,
    signedIn: signed,
    modalContent: modalContents,
    modalOpened: modal,
    evening: eveningTime,
    showForm: showFormHandler,
    setEvening: setEveningHandler,
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
