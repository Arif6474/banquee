import React from "react";

import "./Features.css";

const Features = () => {
  return (
    <div
     className="bg-secondary overflow-hidden ">
      <div  className="lg:features  my-16">
        <div className=" flex justify-center items-center space-y-4 flex-col">
        <h1 className="features-title font-sans">Features</h1>
        <p data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="font-semibold text-5xl">All in one Card.</p>
        <p data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" font-medium w-96 p-4">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div className="flex items-center justify-center flex-row gap-4">
          <p className="btn btn-primary btn-sm mr-4 text-white">Open account</p>
          <p className="text-primary font-sans font-semibold">
            {" "}
            Compare Cards{" "}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
      </div>
      <div className="lg:grid mt-20 lg:grid-cols-5 hidden -my-32 -ml-20 -mr-8">
        <div className=" w-80  overflow-hidden ">
          <div className="card-body  mt-52 text-white -my-8 rotate-90 bg-neutral rounded-xl ">
          <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4 font-mono">
              <span className="mr-3">1234</span>
              <span className="mr-3">5678</span>{" "}
              <span className="mr-3">9000</span> <span className="">9000</span>
            </h1>
            <div className="card-actions justify-start gap-4 ">
              <div>
                <small className="font-sans">Card Holder</small>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <small className="font-sans">Expiry Date</small>
                <p className="font-semibold">09/28</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-80 overflow-hidden">
          <div className="card-body   mt-40 text-white -my-8 rotate-90 bg-slate-700 rounded-xl ">
          <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4 font-mono">
              <span className="mr-3">1234</span>
              <span className="mr-3">5678</span>{" "}
              <span className="mr-3">9000</span> <span className="">9000</span>
            </h1>
            <div className="card-actions justify-start gap-4 ">
              <div>
                <small className="font-sans">Card Holder</small>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <small className="font-sans">Expiry Date</small>
                <p className="font-semibold">09/28</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-80 overflow-hidden">
          <div className="card-body mt-20  text-white -my-8 rotate-90 bg-primary rounded-xl ">
            <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4 font-mono">
              <span className="mr-3">1234</span>
              <span className="mr-3">5678</span>{" "}
              <span className="mr-3">9000</span> <span className="">9000</span>
            </h1>
            <div className="card-actions justify-start gap-4 ">
              <div>
                <small className="font-sans">Card Holder</small>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <small className="font-sans">Expiry Date</small>
                <p className="font-semibold">09/28</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-80   overflow-hidden">
          <div className="card-body mt-40   text-white -my-8 rotate-90 bg-slate-700 rounded-xl ">
          <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4 font-mono">
              <span className="mr-3">1234</span>
              <span className="mr-3">5678</span>{" "}
              <span className="mr-3">9000</span> <span className="">9000</span>
            </h1>
            <div className="card-actions justify-start gap-4 ">
              <div>
                <small className="font-sans">Card Holder</small>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <small className="font-sans">Expiry Date</small>
                <p className="font-semibold">09/28</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-80 overflow-hidden ">
          <div className="card-body mt-52 text-white -my-8 rotate-90 bg-neutral rounded-xl ">
          <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4 font-mono">
              <span className="mr-3">1234</span>
              <span className="mr-3">5678</span>{" "}
              <span className="mr-3">9000</span> <span className="">9000</span>
            </h1>
            <div className="card-actions justify-start gap-4 ">
              <div>
                <small className="font-sans">Card Holder</small>
                <p className="font-semibold">John Doe</p>
              </div>
              <div>
                <small className="font-sans">Expiry Date</small>
                <p className="font-semibold">09/28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
