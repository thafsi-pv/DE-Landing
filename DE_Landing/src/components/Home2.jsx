import React from "react";
import home from "../assets/video/home2.mp4";
import { FaReact } from "react-icons/fa";
import {
  SiCivicrm,
  SiExpress,
  SiMongodb,
  SiRazorpay,
  SiSocketdotio,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { HiDocumentReport } from "react-icons/hi";
import { MdInventory2 } from "react-icons/md";
import { BsFillDisplayFill } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import feature2 from "../assets/img/feature2.png";
import feature1 from "../assets/img/feature-1.png";
import delogo from "../assets/img/deLogo.png";
import Typewriter from "typewriter-effect";

function Home2() {
  return (
    <div>
      <header class="fixed w-full z-10 ">
        <nav class=" border-gray-200 py-3.5 backdrop-blur-lg">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" class="flex items-center">
              <img
                src={delogo}
                class="h-6 mr-3 sm:h-9 shadow-green-400 drop-shadow-xl"
                alt="dineease Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap ">
                DineEase
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <a
                target="_blank"
                href="https://dine-ease-pos.onrender.com/"
                class="text-white bg-green-700 hover:bg- focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none ">
                Try Demo
              </a>
            </div>
            <div
              class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-green-700 lg:p-0 "
                    aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0  lg: ">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0  lg: ">
                    POS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0  lg: ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Start block --> */}
      <section class="bg-white ">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            {/* <h1
              class="bg-clip-text text-transparent bg-gradient-to-r from-[#068e77] to-green-500 max-w-2xl mb-4 text-4xl 
            font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl py-3 text- rounded-lg">
              Simplifying Restaurant <br />
              Management.
            </h1> */}
            <h1
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#068e77] to-green-500 max-w-2xl mb-4 text-3xl 
            font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl py-3 text- rounded-lg h-32">
              <Typewriter
                options={{
                  strings: [
                    "Elevating Dining Experiences",
                    "Reinventing Restaurant Efficiency",
                    "Simplifying Restaurant Operations",
                    "Streamlining Your Success",
                    "Empowering Restaurant Owners",
                    "Innovating the Future of Dining",
                    "Enhancing Customer Satisfaction",
                    "Seamless Restaurant Management",
                    "Revolutionizing Your Restaurant",
                    "Your Recipe for Success",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 5,
                }}
              />
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Streamline your restaurant operations with our user-friendly
              platform, offering effortless order management, payment
              processing, and inventory control. Elevate your restaurant's
              efficiency and customer satisfaction with DineEase-POS, powered by
              cutting-edge technology and secure data handling.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href=""
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  ">
                <svg
                  class="w-4 h-4 mr-2 text-gray-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                View on GitHub
              </a>
              <a
                target="_blank"
                href="https://dine-ease-pos.onrender.com/"
                class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                <span className="flex items-center">
                  <img
                    src={delogo}
                    alt="DE"
                    class="w-4 h-4 mr-2 text-gray-500 "
                  />
                  Try Demo
                </span>
              </a>
            </div>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex ">
            {/* <img src={landinglogo} alt="hero image" className="" /> */}
            <div className="mt-10">
              <div class="relative mx-auto border-gray-300  bg-gray-300 border-[12px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                  <div className="w-full h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-fill">
                      <source src={home} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div class="relative mx-auto bg-gray-400  rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
              <div class="relative mx-auto bg-gray-400 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-[#068e77]">
        <div class="max-w-screen-xl px-4 pb-2 mx-auto lg:pb-4">
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 ">
            <a href="#" class="flex items-center lg:justify-center">
              <FaReact className="h-12 w-12 text-white hover:text-gray-900" />
            </a>
            <a
              href="#"
              class="flex items-center lg:justify-center hover:text-gray-900">
              <SiExpress className="h-12 w-12 text-white hover:text-gray-900 " />
            </a>
            <a href="#" class="flex items-center lg:justify-center">
              <DiNodejs class="h-24 w-24 text-white hover:text-gray-900 " />
            </a>

            <a href="#" class="flex items-center lg:justify-center">
              <SiMongodb className="h-12 w-12 text-white hover:text-gray-900 " />
            </a>
            <a href="#" class="flex items-center lg:justify-center">
              <SiRazorpay className="h-12 w-12 text-white hover:text-gray-900 " />
            </a>
            <a href="#" class="flex items-center lg:justify-center">
              <SiSocketdotio className="h-12 w-12 text-white hover:text-gray-900 " />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-gray-50 ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Dashboard feature --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg ">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                Dashboard
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                Empower Your Restaurant with Data-Driven Decisions. Real-time
                analytics for better service and higher profits. Effortlessly
                manage your restaurant's performance.
              </p>
              {/* <!-- List --> */}
              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Maximize Profits - Identify high-margin dishes and promote
                    them.
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Optimize Staffing - Schedule shifts based on peak hours.
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Enhance Service - Improve table turnaround times.
                  </span>
                </li>
              </ul>
              <p class="mb-8 font-light lg:text-xl">
                DineEase POS offers a comprehensive dashboard with data
                visualization tools, enabling restaurant owners to make informed
                decisions, enhance customer service, and boost revenue.
              </p>
            </div>
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
          </div>
          {/* <!-- Feature2 --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature2}
              alt="feature image 2"
            />
            <div class="text-gray-500 sm:text-lg ">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                Feature-Rich
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                DineEase-POS comes with a wide range of features tailored to the
                restaurant industry. It's an all-in-one solution.
              </p>
              {/* <!-- List --> */}
              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Effortless Order Management
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Streamlined Billing and Payment Processing
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Chat between users
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Lock Screen
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    User-Friendly Interface
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-[#068e77]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 ">
                    Loyalty Program
                  </span>
                </li>
              </ul>
              <p class="font-light lg:text-xl">
                Enhance Efficiency, Boost Customer Satisfaction, Reduce Errors
                and Wait Times Improve Profitability
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-white ">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <p class="text-2xl font-bold text-[#068e77] ">
              More upcoming features
            </p>
            {/* <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl ">
              Trusted by over 600 million users and 10,000 teams
            </h2> */}
            <p class="font-light text-gray-500 sm:text-xl ">
              DineEase POS is constantly evolving to meet the dynamic needs of
              the restaurant industry. Here's a sneak peek at our upcoming
              features that will elevate your restaurant management
            </p>

            <div className="flex gap-3 my-14">
              <div className="flex-1">
                <MdInventory2 className="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 " />
                <h3 class="mb-2 text-2xl font-bold ">Inventory Management</h3>
                <p class="font-light text-gray-500 ">
                  Improved ingredient-level management to prevent shortages.
                </p>
              </div>
              <div className="flex-1">
                <SiCivicrm class="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 " />
                <h3 class="mb-2 text-2xl font-bold ">CRM</h3>
                <p class="font-light text-gray-500 ">
                  Integrated CRM system to build and maintain strong customer
                  relationships
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <HiDocumentReport className="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 " />
              <h3 class="mb-2 text-2xl font-bold ">Advanced Reports</h3>
              <p class="font-light text-gray-500 ">
                Advanced reporting tools for in-depth insights into your
                restaurant's performance.
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold ">Table Reservation</h3>
              <p class="font-light text-gray-500 ">
                Reduce wait times and improve customer satisfaction.
              </p>
            </div>
            <div>
              <BsFillDisplayFill class="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 " />
              <h3 class="mb-2 text-2xl font-bold ">Kitchen Display System</h3>
              <p class="font-light text-gray-500 ">
                Efficient communication between kitchen staff and servers
              </p>
            </div>
            <div>
              <AiOutlineCloudServer class="w-10 h-10 mb-2 text-[#068e77] md:w-12 md:h-12 " />
              <h3 class="mb-2 text-2xl font-bold ">
                Online Ordering Integration
              </h3>
              <p class="font-light text-gray-500 ">
                Seamless integration with popular food delivery platforms
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-gray-50 ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-xl font-medium text-gray-900 md:text-2xl ">
                "DineEase POS has revolutionized the way we manage our
                restaurant. It's a game-changer for our business. The robust
                features, intuitive interface, and top-notch support have made a
                significant impact on our daily operations."
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 ">Micheal Gough</div>
                <div class="pl-3 text-sm font-light text-gray-500 ">
                  Tasty Bites Cafe
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section class="bg-gray-50 ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-screen-sm mx-auto text-center">
            <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 ">
              Start your free trial today
            </h2>
            <p class="mb-6 font-light text-gray-500  md:text-lg">
              Try DineEase Platform. No credit card required.
            </p>
            <a
              href="https://dine-ease-pos.onrender.com/"
              class="text-white bg-green-700 hover:bg- focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ">
              Try Demo
            </a>
          </div>
        </div>
      </section>
      <footer class="bg-white ">
        <div class="max-w-screen-xl p-4 py-2 mx-auto lg:py-16 md:p-8 lg:p-10">
          <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="text-center">
            <a
              href="#"
              class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 ">
              <img src={delogo} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
              DineEase
            </a>
            <span class="block text-sm text-center text-gray-500 ">
              ©
              {" " +
                new Date().getFullYear() +
                "-" +
                (parseInt(new Date().getFullYear()) + parseInt(1)) +
                " "}
              DineEase™. All Rights Reserved.
            </span>
            <ul class="flex justify-center mt-5 space-x-5">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-900  ">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-900  ">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-900  ">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-900  ">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-900  ">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home2;
