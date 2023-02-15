import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../store/todo-context";
import { UiContext } from "../store/ui-context";
import TodoType from "../Models/todo";
import { Add, Man3 } from "@mui/icons-material";
import { logout } from "../firebaseConfiq";
import hero from "../assets/images/clock.jpg";
import TodoForm from "../components/TodoForm";
import ScheduleForm from "../components/ScheduleForm";
import Calendar from "react-calendar";
import { Fade, Zoom, Rotate, Reveal, Slide } from "react-reveal";

import Layout from "../components/Layout";
import { redirect } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { whatWeCanDo } from "../utils/homeArray";

const HomePage: React.FC = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const todoCxt = useContext(TodoContext);
  const uiCxt = useContext(UiContext);
  const authCxt = useContext(AuthContext);
  const [data, setData] = useState<TodoType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showForms, setShowForms] = useState(false);
  //   const onChange = async (e: React.ChangeEvent) => {
  //     const searchData = todoCxt.items.filter(item => {
  //       if (
  //         item.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
  //       ) {
  //         return item;
  //       }
  //     });

  //     setData(searchData);
  //   };

  const showFormsHandler = () => {
    setShowForms(true);
  };
  const showTaskFormHandler = (str: string) => {
    uiCxt.showForm(str);

    setShowForms(false);
  };
  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <Layout type="all">
      <div className="flex h-[80vh] items-center justify-center">
        <div className=" px-8 md:px-14 lg:px-24 xl:px-32 py-11 space-y-8 w-2/3 flex flex-col items-center">
          <div className="font-thin text-xl md:text-6xl text-meduimGrey leading-10">
            Stay ahead of the clock
          </div>
          <div className="text-darkGrey text-extrabold text-center text-lg leading-10">
            Prompt offers a range of features that can help you manage your
            tasks more efficiently, collaborate with others, and increase your
            productivity.
          </div>
          <div className="bg-softPrimary text-white font-bold rounded-2xl cursor-pointer p-3 w-[200px] text-center">
            Get Started, It's free
          </div>
        </div>
      </div>
      <div className="bg-lightGrey px-8 md:px-14 lg:px-24 xl:px-32 py-11 h-[80vh]">
        <h4 className="text-[24px] leading-[39px] text-softPrimary text-center font-semibold my-12">
          WHY PROMPT?
        </h4>
        <div className="">
          <Swiper
            slidesPerView={isDesktop ? 2 : 2}
            spaceBetween={30}
            slidesPerGroup={isDesktop ? 2 : 2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="flex"
          >
            {whatWeCanDo.map(item => (
              <SwiperSlide>
                <div
                  key={item.id}
                  className="w-[161px] h-[101px] lg:w-[516px] lg:h-[231px] rounded-xl bg-white shadow-3xl flex items-center justify-center"
                >
                  <div className="w-1/2 h-full">
                    <img
                      src={item.img}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-4 bg-accentLight h-full w-1/2">
                    <div className="text-2xl mb-6">{item.title}</div>
                    <div className="text-xs">{item.description}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div></div>

      {/* <div className=" max-h-screen overflow-scroll  h-screen relative bg-red-200">
      
        <div
          className={`bg-darkPrimary -bottom-16 -right-16 flex  z-0  ${
            showForms
              ? "w-full h-full relative rounded"
              : "w-36 h-36 fixed rounded-full items-center justify-center"
          }`}
          onClick={() => showFormsHandler()}
        >
          {showForms ? (
            <ul className=" bg-accentLight p-2 text-1xl text-accent list-none">
              <li onClick={() => showTaskFormHandler("Task")}>Task Form</li>
              <li onClick={() => showTaskFormHandler("Schedule")}>
                Schedule Form
              </li>
            </ul>
          ) : (
            <Add className="text-3xl text-softPrimary " />
          )}
        </div>
        {uiCxt.form === "Task" ? <TodoForm /> : ""}
        {uiCxt.form === "Schedule" ? <Calendar /> : ""}
      </div> */}
      {/* <div className="mt-40" onClick={() => logout()}>
          Logout
        </div> */}
    </Layout>
  );
};
export default HomePage;
