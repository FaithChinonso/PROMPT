import axios from "axios";
import UserType from "./Models/user";

export const sendUserDetails = async (data: UserType) => {
  await axios
    .put(`https://todo-app-a7762-default-rtdb.firebaseio.com/`, data)
    .then(res => {})
    .catch(err => {});
};
