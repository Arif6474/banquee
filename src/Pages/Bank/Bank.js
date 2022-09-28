import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { RiQuestionLine } from "react-icons/ri";

const Bank = () => {
  return (
    <div className="pt-20 ">
      <div className=" flex justify-center items-center flex-col">
        <p className="font-semibold text-5xl">All in one bank. Really.</p>
        <p className=" font-medium w-96 p-4">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      <div className="flex justify-center gap-8 mt-12 items-center flex-row overflow-hidden ">
        <div className="rounded-xl px-8 pt-8 bg-secondary w-2/6 -mb-20 ">
          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold text-2xl">Statistics</p>
            <p className="text-sans opacity-80 mt-2 font-medium w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div
            className=" border-slate-800 mx-auto p-6 mt-8 bg-white"
            style={{ borderRadius: "45px", border: "6px solid" }}
          >
            <div className="flex  justify-between items-center mb-6 gap-4">
              <p className="text-2xl">
                <BiLeftArrowAlt />
              </p>
              <p className="font-semibold ">Statistics</p>
              <p className=" text-2xl">
                <RiQuestionLine />
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-secondary px-6 space-y-1 py-2 rounded-xl">
                <p className="font-medium">Earnings</p>
                <p className="font-medium text-xl">$85.222,00</p>
              </div>
              <div className="bg-secondary px-6 space-y-1 py-2 rounded-xl">
                <p className="font-medium">Expenses</p>
                <p className="font-medium text-xl">- $52.150,50</p>
              </div>
            </div>
            <div className="flex items-center justify-between pb-8 my-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center ">
                  <p className=" bg-primary p-2 rounded-full mr-2"></p>
                  <p className="font-medium ">Earning</p>
                </div>
                <div className="flex items-center">
                  <p className=" bg-red-200 p-2 rounded-full mr-2"></p>
                  <p className="font-medium ">Expense</p>
                </div>
              </div>
              <div className="flex gap-2 font-medium border-2 px-2 justify-center items-center">
                <p className="">Year</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-8 pt-10 bg-secondary w-2/6 -mb-10 ">
          <div className="flex justify-center items-center pb-16 flex-col">
            <p className="font-semibold text-2xl">Cards</p>
            <p className="text-sans opacity-80 mt-2 font-medium w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          
          <div className="grid grid-cols-3 justify-items-center gap-4 mt-24  ">
          <div className=" p-5 -ml-20 text-white w-40 h-24  bg-slate-700 rotate-90  rounded-t-xl ">
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
          <div className="text-left text-xl font-semibold mt-4 mb-2 font-mono">
            <span className="mr-3">1234</span>
            <span className="mr-3">5678</span>{" "}
            <span className="mr-3">9000</span>
            <span className="ml-1">0000</span>
          </div>
          {/* <div className="flex  items-center gap-6 ">
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
          </div> */}
        </div>
        <div className=" p-5 text-white w-80 h-40 bg-primary rotate-90 rounded-xl ">
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
          <div className="text-left text-xl font-semibold mt-4 mb-2 font-mono">
            <span className="mr-3">1234</span>
            <span className="mr-3">5678</span>{" "}
            <span className="mr-3">9000</span>
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
        <div className="  p-5 text-white -mr-20  w-46 h-24 bg-neutral rotate-90  rounded-b-xl ">
          {/* <div className="flex   items-center gap-32">
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
          </div> */}
          <div className="text-left text-xl font-semibold  font-mono">
            <span className="mr-3">1234</span>
            <span className="mr-3">5678</span>{" "}
            {/* <span className="mr-3">9000</span>
            <span className="ml-1">0000</span> */}
          </div>
          <div className="flex  items-center gap-3 ">
            <div>
              <small className="text-start text-xs text-slate-100">
                Card Holder
              </small>
              <p className="text-xs">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-100">Expiry Date</small>
              <p className="text-xs">09/28</p>
            </div>
            {/* <h1 className="font-bold ml-4 ">
              {" "}
              <i>VISA</i>{" "}
            </h1> */}
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Bank;
