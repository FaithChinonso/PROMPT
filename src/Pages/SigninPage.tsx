import React, { useContext, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import animationData from "../assets/lottie/calend.json";
import animation from "../assets/lottie/OrHistory.json";
import clock from "../assets/images/clock.jpg";
import Lottie from "react-lottie";
import TopNav from "../components/TopNav";
import AuthForm from "../components/AuthForm";
import { UiContext } from "../store/ui-context";

const SigninPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const uiCtx = useContext(UiContext);
  console.log(uiCtx.signedIn);
  return (
    <div className="flex flex-col  items-center justify-center w-full h-screen max-h-screen overflow-hidden relative">
      <div className="absolute left-[10%] top-[30%] hidden md:block">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
            animationData: animationData,
          }}
          height={350}
          width={350}
        />
      </div>

      <div className="absolute right-[10%] top-[30%] hidden md:block">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
            animationData: animation,
          }}
          height={350}
          width={350}
        />
      </div>
      <div className=" relative flex items-center flex-col justify-center  md:w-[27%] h-screen">
        <div className=" w-48 text-center px-2 py-2 text-darkPrimary font-extralight text-4xl italic font-['blaka'] ">
          PROMPT
        </div>
        <div className="font-thin text-xl md:text-3xl text-meduimGrey my-4">
          Stay ahead of the clock
        </div>
        <div className="my-4  text-sm">Get Started</div>
        {/* <div className="flex justify-center items-center gap-[30px] mt-[30px] ">
          <div className="h-10 w-10 border border-darkGrey flex justify-center items-center cursor-pointer hover:bg-meduimGrey">
          
          </div>
          <div className="h-10 w-10 border border-darkGrey flex justify-center items-center cursor-pointer hover:bg-meduimGrey">
            <FacebookIcon className="text-meduimGrey hover:text-white" />
          </div>
          <div className="h-10 w-10 border border-darkGrey flex justify-center items-center cursor-pointer hover:bg-meduimGrey">
            <TwitterIcon className="text-meduimGrey hover:text-white" />
          </div>
        </div> */}
        <div
          className="bg-white text-darkGrey w-56 py-4  text-center shadow-sm shadow-lightGrey"
          onClick={() => setShowForm(false)}
        >
          <span>
            {" "}
            <GoogleIcon className="text-meduimGrey hover:text-white mr-2" />
          </span>
          {uiCtx.signedIn ? "Signin with Google" : " Signup with Google"}
        </div>
        <div className="flex justify-center items-center space-x-1 my-4">
          <div className="w-3 h-[1px] bg-dimGrey "></div>
          <div className="text-meduimGrey font-semibold ">OR</div>
          <div className="w-3 h-[1px] bg-dimGrey"></div>
        </div>
        {showForm ? (
          <AuthForm />
        ) : (
          <div
            className="bg-lightGrey text-darkGrey w-56 py-4  text-center shadow-sm shadow-darkGrey"
            onClick={() => setShowForm(true)}
          >
            {uiCtx.signedIn ? "Signin with Email" : " Signup with Email"}
          </div>
        )}
        <div className="text-right text-xs text-meduimGrey mt-8 w-full">
          {" "}
          {!uiCtx.signedIn
            ? "Already have an account"
            : "Don't have an account?"}
          <span
            className="cursor-pointer text-softPrimary ml-1"
            onClick={() => uiCtx.setSignedIn()}
          >
            {!uiCtx.signedIn ? "Sign In" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
