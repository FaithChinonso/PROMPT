import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { useContext } from "react";
import { UiContext } from "../store/ui-context";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
  type: string;
};
const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const uiCtx = useContext(UiContext);
  const signinHandler = () => {
    navigate("signin");
  };
  const signupHandler = () => {
    navigate("signin");
    uiCtx.setSignedIn();
  };
  return (
    <body className="h-screen relative bg-white py-10">
      <nav className="fixed top-0 left-0 flex items-center justify-between mx-auto w-full max-h-10 overflow-visible  px-8 md:px-14 lg:px-24 xl:px-32 py-11 z-10 shadow-sm shadow-lightGrey bg-white">
        <div className=" w-48 px-2 py-2 text-softPrimary font-extralight text-4xl italic font-['blaka'] flex-1 ">
          PROMPT
        </div>
        <div
          className=" text-meduimGrey border border-lightGrey  rounded-2xl cursor-pointer p-3 w-[120px] mr-3 text-center hover:bg-meduimPrimary hover:text-white "
          onClick={signinHandler}
        >
          Sign In
        </div>
        <div
          className=" text-meduimGrey rounded-2xl cursor-pointer p-3 w-[150px] text-center hover:bg-meduimPrimary hover:text-white"
          onClick={signupHandler}
        >
          Sign Up for Free
        </div>
      </nav>
      <main className="mt-10">{children}</main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Layout;
