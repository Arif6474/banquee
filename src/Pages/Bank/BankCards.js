import React from 'react';
import amazon from '../../images/amazonpay.png'
import applepay from '../../images/applepay.png'
import bitcoin from '../../images/bitcoin.png'
import Gpay from '../../images/Gpay.png'
import Mastercard from '../../images/Mastercard.png'
import payple from '../../images/paypla.png'
import shopify from '../../images/shopify.png'
import visa from '../../images/visa.png'
import webflow from '../../images/webflow.png'
import zapier from '../../images/zapier.png'
import bike from '../../images/bike.png'
import laptop from '../../images/laptop-removebg-preview.png'
import { FaAmazon, FaApple, FaGoogle } from 'react-icons/fa';
const BankCards = () => {
    return (
        <div className="flex justify-center gap-8 mt-12 items-center flex-row mx-48 p-4">
            <div className="bg-secondary mx-auto w-3/5 rounded-xl">
                <div className="flex justify-start p-8  flex-col">
                <p className="font-semibold text-2xl  text-start">Easy <br/>integration</p>
           
            <p className="text-sans opacity-80 mt-4 text-start text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
                <div className="my-12">
                    <div className="flex flex-row my-7 justify-between items-center">
                        <img src={webflow} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={shopify} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={zapier} alt=""  className="bg-slate-50 rounded-md h-6"/>
                    </div>
                    <div className="flex flex-row my-7 justify-between items-center">
                        <img src={payple} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={Mastercard} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={visa} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={Gpay} alt=""  className="bg-slate-50 rounded-md h-6"/>
                    </div>
                    <div className="flex flex-row my-7 justify-between items-center">
                        <img src={applepay} alt="" className="bg-slate-50 rounded-md h-6" />
                        <img src={amazon} alt=""  className="bg-slate-50 rounded-md h-6"/>
                        <img src={bitcoin} alt=""  className="bg-slate-50 rounded-md h-6"/>
                    </div>
                </div>
            </div>
            <div className="bg-secondary mx-auto w-3/5 rounded-xl pb-10">
                <div className="flex justify-start p-8  flex-col">
                <p className="font-semibold text-2xl text-start">Saving accounts <br/>accounts</p>
          
            <p className="text-sans opacity-80  py-6 text-start text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
                
                    <div className="flex flex-row my-3 justify-center items-center gap-4">
                        <img src={laptop} alt=""  className=" bg-green-200 rounded-md h-24 p-4 w-24"/>
                        <img src={bike} alt=""  className="bg-red-100 rounded-md h-24 p-4 w-24"/>
                        
                    </div>
                <div className="flex flex-row justify-center gap-8 items-center mt-2">
                    <div className="flex flex-col justify-between items-center ">
                        <p className="text-left text-xs font-medium">New Laptop</p>
                        <p className="text-left text-xs font-medium  opacity-80" >$400</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="text-left text-xs font-medium">Dream bike</p>
                        <p className="text-left text-xs font-medium  opacity-80" >$200</p>
                    </div>
    
                </div>
              
            </div>
            <div className="bg-secondary mx-auto w-3/5 rounded-xl">
                <div className="flex justify-start p-8  flex-col">
                <p className="font-semibold text-2xl text-start">Instant<br/>transactions</p>
            <p className="text-sans opacity-80 mt-2 text-start text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className=" p-4">
        <div className='flex justify-around items-center gap-4 mb-3 bg-white px-2 rounded-lg'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-primary text-white rounded-md p-3'>
                                    <FaApple />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Apple</p>
                                    <small className="font-semibold">Electronic</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-799$</p>
                            </div>
                        </div>
                        <div className='flex justify-around items-center gap-4 mb-2 bg-white p-2 rounded-lg'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-primary text-white rounded-md p-3'>
                                    <FaAmazon />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Amazon</p>
                                    <small className="font-semibold">Shopping</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-59$</p>
                            </div>
                        </div>
                        <div className='flex justify-around items-center gap-4 mb-2 bg-white p-2 rounded-lg'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-primary text-white rounded-md p-3'>
                                    <FaGoogle />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Google </p>
                                    <small className="font-semibold">Apps</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-49$</p>
                            </div>
                        </div>
                       
                        
        </div>
            </div>
            
           
        </div>
    );
};

export default BankCards;