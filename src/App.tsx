import { useContext, useState } from "react";
import Todo from "./components/Todos";
import TodoType from "./Models/todo";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContextProvider from "./store/todo-context";
import ScheduleContextProvider from "./store/schedule-context";
import UiContextProvider from "./store/ui-context";
import AuthContextProvider from "./store/auth-context";
import HomePage from "./Pages/HomePage";
import Layout from "./components/Layout";
import SigninPage from "./Pages/SigninPage";
import Routes from "./AppRoutes";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <UiContextProvider>
      <AuthContextProvider>
        <ScheduleContextProvider>
          <TodoContextProvider>
            <AppRoutes />
          </TodoContextProvider>
        </ScheduleContextProvider>
      </AuthContextProvider>
    </UiContextProvider>
  );
}

export default App;
