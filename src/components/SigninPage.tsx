import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import animationData from "../assets/lottie/calend.json";
import animation from "../assets/lottie/OrHistory.json";
import clock from "../assets/images/clock.jpg";
import Lottie from "react-lottie";
import TopNav from "./TopNav";

const SigninPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center w-full h-screen bg-softPrimaryLight max-h-screen overflow-hidden relative">
      <div className="absolute left-[10%] top-[20%] ">
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

      <div className="absolute right-[10%] top-[20%] ">
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
      <div className=" relative flex items-center flex-col justify-center  w-[45%] h-screen">
        <div className="font-semibold ">Stay ahead of the clock</div>
        <div className="font-semibold ">Sign in with </div>
        <div className="flex justify-center items-center gap-[30px] mt-[30px] ">
          <div className="h-10 w-10 border border-darkPurple flex justify-center items-center rounded-[10px] bg-softPrimary cursor-pointer">
            <GoogleIcon className="text-white " />
          </div>
          <div className="h-10 w-10 border border-darkPurple flex justify-center items-center rounded-[10px] bg-softPrimary cursor-pointer">
            <FacebookIcon className="text-white " />
          </div>
          <div className="h-10 w-10 border border-darkPurple flex justify-center items-center rounded-[10px] bg-softPrimary cursor-pointer">
            <AppleIcon className="text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
