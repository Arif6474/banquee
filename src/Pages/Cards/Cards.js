import React from "react";
import { FaAmazon, FaApple, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiHomeLine, RiQuestionLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { AiOutlineCreditCard, AiOutlineSetting } from "react-icons/ai";
import { BiInfoCircle, BiLeftArrowAlt, BiLockAlt } from "react-icons/bi";


const Cards = () => {
  return (
    <div className="container flex flex-row justify-center items-center pt-20 bg-white">
      <div className="flex flex-col mx-auto w-2/6">
        <p className="text-sans font-semibold mt-8 text-start">Cards</p>
        <h1 className="text-sans font-semibold text-5xl text-start mt-2">
          Manage <br /> your cards
        </h1>
        <p className="text-sans text-start opacity-90 mt-6 font-semibold">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="text-start mt-4">
          <div className="flex text-sans font-semibold gap-2 my-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 bg-secondary rounded-full text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Malesuada Ipsum</p>
          </div>
          <div className="flex text-sans font-semibold gap-2  my-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 bg-secondary rounded-full text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Vestibulum</p>
          </div>
          <div className="flex text-sans font-semibold gap-2  my-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 bg-secondary rounded-full text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Parturient Lorem</p>
          </div>
        </div>
      </div>
      <div
        className=" border-slate-800 mx-auto p-6"
        style={{ borderRadius: "45px", border: "6px solid" }}
      >
        <div className="flex  justify-between items-center mb-6 gap-4">
            <p className="text-2xl"><BiLeftArrowAlt/></p>
          <p className="font-semibold ">Cards</p>
          <p className=" text-2xl"><RiQuestionLine/></p>
        </div>

        <div className=" p-5 text-white  bg-slate-700 mt-4 rounded-xl ">
          <div className="flex   items-center gap-32">
            <h2 className="text-xl text-start">banquee.</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rotate-90 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
          </div>
          <div className="text-left text-lg font-semibold mt-4 mb-2">
            <span className="mr-5">1234</span>
            <span className="mr-5">5678</span>{" "}
            <span className="mr-5">9000</span>
            <span className="ml-1">0000</span>
          </div>
          <div className="flex  items-center gap-6 ">
            <div>
              <small className="text-start text-xs text-slate-300">
                Card Holder
              </small>
              <p className="text-sm">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-300">Expiry Date</small>
              <p className="text-sm">09/28</p>
            </div>
            <h1 className="font-bold ml-4 ">
              {" "}
              <i>VISA</i>{" "}
            </h1>
          </div>
        </div>
        <div className="flex justify-around my-8">
            <div className="   flex flex-col justify-center items-center">
             <p className="text-primary text-xl mb-2 bg-secondary rounded-full p-1"> <BiInfoCircle /></p>
              <p className="font-semibold text-sm">Details</p>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-primary text-xl mb-2 bg-secondary rounded-full p-1">
              <BiLockAlt />
                </p>
              <p className="font-semibold text-sm">Lock Card</p>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-primary text-xl mb-2 bg-secondary rounded-full p-1">
              <AiOutlineSetting />
                </p>
              <p className="font-semibold text-sm">Setting</p>
            </div>
          
          </div>
        <div>
          <div className="flex justify-around py-1">
            <div className="  flex flex-col justify-center items-center">
              <RiHomeLine />
              <p className="font-semibold text-sm">Home</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold text-sm">Savings</p>
            </div>
            <div className=" text-primary flex flex-col justify-center items-center">
              <AiOutlineCreditCard />
              <p className="font-semibold text-sm">Cards</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FiUser />
              <p className="font-semibold text-sm">Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;