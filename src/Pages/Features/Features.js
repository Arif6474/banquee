import React from "react";

import "./Features.css";

const Features = () => {
  return (
    <div className="features-container overflow-hidden ">
      <div className="features mx-auto mb-16">
        <h1 className="features-title font-sans">Features</h1>
        <h1 className="features-headline font-sans">ALL in one card.</h1>
        <p className="features-description font-sans ">
          {" "}
          Senectus et netus et malesuada fames ac turpis. <br />
          Sagittis vitae et leo duis ut diam.
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
      <div className="grid mt-20 lg:grid-cols-5 -my-32 -ml-20 -mr-8">
        <div className=" w-80  overflow-hidden ">
          <div className="card-body  mt-52 text-white -my-8 rotate-90 bg-neutral rounded-xl ">
          <h2 className="card-title">banquee.</h2>
            <h1 className="text-left text-xl font-bold my-4">
              <span className="mr-5">1234</span>
              <span className="mr-5">5678</span>{" "}
              <span className="mr-5">9000</span> 0000
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
            <h1 className="text-left text-xl font-bold my-4">
              <span className="mr-5">1234</span>
              <span className="mr-5">5678</span>{" "}
              <span className="mr-5">9000</span> 0000
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
            <h1 className="text-left text-xl font-bold my-4">
              <span className="mr-5">1234</span>
              <span className="mr-5">5678</span>{" "}
              <span className="mr-5">9000</span> 0000
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
            <h1 className="text-left text-xl font-bold my-4">
              <span className="mr-5">1234</span>
              <span className="mr-5">5678</span>{" "}
              <span className="mr-5">9000</span> 0000
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
            <h1 className="text-left text-xl font-bold my-4">
              <span className="mr-5">1234</span>
              <span className="mr-5">5678</span>{" "}
              <span className="mr-5">9000</span> 0000
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
