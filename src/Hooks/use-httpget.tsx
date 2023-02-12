import axios from "axios";
const url = "https://todo-app-a7762-default-rtdb.firebaseio.com/";

const useHTTPPut = () => {
  const paste = async ({ endpoint, data }: any) => {
    await axios
      .post(`${url}/${endpoint}`, data)
      .then(res => {})
      .catch((error: any) => {});
  };

  return paste;
};

export default useHTTPPut;
