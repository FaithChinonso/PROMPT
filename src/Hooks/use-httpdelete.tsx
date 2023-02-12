import axios from "axios";
const url = "https://todo-app-a7762-default-rtdb.firebaseio.com/";

const useHTTPDelete = () => {
  const remove = async ({ endpoint, data }: any) => {
    await axios
      .delete(`${url}/${endpoint}`)
      .then(res => {})
      .catch((error: any) => {});
  };

  return remove;
};

export default useHTTPDelete;
