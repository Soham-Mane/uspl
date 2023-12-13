import React, { useState } from 'react';

const FAQ = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (val) => {
    setOpenSections((prevSections) => {
      if (prevSections.includes(val)) {
        return prevSections.filter((section) => section !== val);
      } else {
        return [...prevSections, val];
      }
    });
  };

  return (
    <>
       <div className='w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] mb-12'>
<div className="2xl:container 2xl:mx-auto md:py-12  md:px-6 py-9 px-4">
      <h2 className="text-3xl font-bold dark:text-white lg:text-5xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div>
          <p className="font-normal dark:text-gray-400 text-lg leading-6 text-gray-600 lg:w-8/12 md:w-9/12">Here are few of the most frequently asked questions by our valuable customers</p>
        </div>

        <div className="border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full">
          <input
            placeholder="Search"
            type="text"
            aria-label="Search"
            className="dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4"
          />
          <svg
            className="cursor-pointer text-gray-600 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 14L10 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className="md:w-5/12 lg:w-4/12 w-full">
         <button className='bg-black flex  rounded-full w-fit text-xl text-white px-6 py-3 font-medium hover:bg-purple-700	'>Subscribe
         </button>
        </div>       
        <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {/* Shipping Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">Shipping</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(1)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path1" className={openSections.includes(1) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para1" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(1) ? "block" : "hidden"}`}>
              We are covering every major country worldwide. The shipment leaves from the US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Returns Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">Returns</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(2)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path2" className={openSections.includes(2) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para2" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(2) ? "block" : "hidden"}`}>
              We are covering every major country worldwide. The shipment leaves from the US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Exchange Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">Exchange</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(3)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path3" className={openSections.includes(3) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para3" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(3) ? "block" : "hidden"}`}>
              We are covering every major country worldwide. The shipment leaves from the US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Tracking Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">Tracking</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(4)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path4" className={openSections.includes(4) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para4" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(4) ? "block" : "hidden"}`}>
              We are covering every major country worldwide. The shipment leaves from the US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />
        </div>
      </div>
    </div>
    </div>


    
    </>
 


    
  );
};

export default FAQ;
