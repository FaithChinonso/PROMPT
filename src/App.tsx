import { useContext, useState } from "react";
import Todo from "./components/Todos";
import TodoType from "./Models/todo";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContextProvider from "./store/todo-context";
import ScheduleContextProvider from "./store/schedule-context";
import UiContextProvider from "./store/ui-context";
import HomePage from "./Pages/HomePage";
import Layout from "./components/Layout";
import SigninPage from "./components/SigninPage";

function App() {
  return (
    <UiContextProvider>
      <ScheduleContextProvider>
        <TodoContextProvider>
          <Layout type="none">
            <SigninPage />
          </Layout>
        </TodoContextProvider>
      </ScheduleContextProvider>
    </UiContextProvider>
  );
}

export default App;
