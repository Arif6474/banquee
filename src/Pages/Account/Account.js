import React from 'react';

const Account = () => {
    return (
        <div className="mt-20">
             <div className=" flex justify-center items-center flex-col">
        <p className="font-semibold ">Accounts</p>
        <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-semibold text-4xl">Choose your card.</p>
        <p data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" font-medium w-80 text-sm p-4">
          Senectus et netus et malesuada ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      <div className="mt-12 flex justify-center gap-8  items-center flex-row mx-48 p-4">
        <div className="w-80">
            <div className="flex justify-center items-center gap-2">
                <p className="font-bold text-lg">Basic <span className="p-1 rounded-md text-xs bg-secondary text-primary">Popular</span></p>
               
            </div>
            <div className="flex justify-center items-center py-8 flex-col">
                <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-bold text-4xl">Free</p>
                <p data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-sans opacity-80 mt-4  font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            <div data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" p-5 text-white w-70 bg-primary my-4 rounded-xl ">
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
              <small className="text-start text-xs text-slate-100">
                Card Holder
              </small>
              <p className="text-sm">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-100">Expiry Date</small>
              <p className="text-sm">09/28</p>
            </div>
            <div className="font-bold flex pt-1 ml-4">
             
              <p className="absolute  bg-slate-300 rounded-full p-3"></p>
              <p className=" relative ml-4 bg-slate-200 rounded-full p-3"></p>
              
            </div>
          </div>
        </div>
            <div>
                <button className="btn btn-primary text-white btn-sm w-full">Get Started</button>
            </div>
           
        </div>
        <div className="w-80">
            <div className="flex justify-center items-center gap-2">
                <p  className="font-bold text-lg">Premium</p>
               
            </div>
            <div className="flex justify-center items-center py-8 flex-col">
                <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-bold text-4xl">$5 <span className="text-xs opacity-80">per month</span></p>
                <p data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-sans opacity-80 mt-4  font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            <div data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" p-5 text-white w-70  bg-slate-700  my-4 rounded-xl ">
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
              <small className="text-start text-xs text-slate-100">
                Card Holder
              </small>
              <p className="text-sm">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-100">Expiry Date</small>
              <p className="text-sm">09/28</p>
            </div>
            <h1 className="font-bold ml-4 ">
              {" "}
              <i>VISA</i>{" "}
            </h1>
          </div>
        </div>
            <div>
                <button className="btn btn-primary text-white btn-sm w-full">Get Started</button>
            </div>
            <div>

            </div>
        </div>
        <div className="w-80">
            <div className="flex justify-center items-center gap-2">
                <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-bold text-lg">Gold</p>
               
            </div>
            <div className="flex justify-center items-center py-8 flex-col">
            <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-bold text-4xl">$10 <span className="text-xs opacity-80">per month</span></p>
                <p data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-sans opacity-80 mt-4  font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            <div data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" p-5 text-white w-70 bg-neutral my-4 rounded-xl ">
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
              <small className="text-start text-xs text-slate-100">
                Card Holder
              </small>
              <p className="text-sm">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-100">Expiry Date</small>
              <p className="text-sm">09/28</p>
            </div>
            <div className="font-bold flex pt-1 ml-4">
              <p className="absolute  bg-slate-300 rounded-full p-3"></p>
              <p className=" relative ml-4 bg-slate-200 rounded-full p-3"></p>
              
            </div>
          </div>
        </div>
            <div>
                <button className="btn btn-primary text-white btn-sm w-full">Get Started</button>
            </div>
            <div>

            </div>
        </div>
       
      </div>
        </div>
    );
};

export default Account;