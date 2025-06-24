//Without Animation


import React, { useState } from "react";
import NavLinks from "../components/navLinks";
import airplaneImage from "../Images/Airplane Travel Agency.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import video from "../components/Video/2231485-uhd_3840_2160_24fps.mp4";
import Carousel from "../components/features/carousel";
import beige from "../Images/beige.png";
import TravelLocation from "../Images/location travel agency.jpg";
import imageLogo from "../Images/Safari Trips Logo Design.png";

const slides = [
  airplaneImage,
  // "https://i.ibb.co/B3s7v4h/2.png",
  // "https://i.ibb.co/XXR8kzF/3.png",
  // "https://i.ibb.co/yg7BSdM/4.png"
];
const home = () => {
  return (
    <div>
      <div>
        {/* <img
        className='h-screen w-full rounded-xl'
      /> */}
        {/* <video 
  autoPlay 
  loop className=''>
  <source src={video}/></video> */}
        <NavLinks />
      </div>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Section 1 */}
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl py-24 md:py-24 space-y-8"></div>
        <h1 className="font-bold text-left text-4xl md:text-6xl text-white leading-tight mb-5">
          Discover Extraordinary <br className="hidden md:block" />
          Adventures with <br className="hidden md:block" />
          Safari Trips
        </h1>

        {/* Description */}
        <p className="text-lg text-left text-white/90 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-bold">
            Explore Tours
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors font-bold">
            Contact Us
          </button>
        </div>
      </div>

      {/* <div className='px-5 text-left inset-0 top-60 absolute w-[450px] md:w-[500px] h-60 text-2xl md:text-2xl text-balance ml-5 md:ml-10 '>
        <h1 className='text-4xl font-bold mb-5'>Experience Luxury Travel Tailored Just for You</h1> */}
      {/* This would have an animation, the elements of h3 would change, from Enjoy luxury to Something else and so on */}
      {/* <h3 className='text-2xl mb-5'>Enjoy Luxury Travels</h3>
        <button type="button" className = "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore</button>
       </div> */}


        {/* Section 2 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Safari Trips
            </h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={airplaneImage}
                  alt="Travel experience"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    Custom Itineraries <br />
                    Crafted Just for You
                  </h3>
                  <p className="text-gray-600">
                    Your dream vacation starts with a personalized plan
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors">
              Explore
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Sign up <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
        {/* Section 3 */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h1 className="font-bold text-2xl md:text-4xl text-left text-gray-800 leading-tight">
                  Discover Extraordinary Adventures with Safari Trips
                </h1>

                <p className="text-base text-left text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl text-left font-bold mb-3 text-gray-800">
                      Personalized Service
                    </h3>
                    <p className="text-sm  text-left text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl text-left font-bold mb-3 text-gray-800">
                      Exclusive Access
                    </h3>
                    <p className="text-sm text-left text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm md:text-base">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base">
                    Sign up <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <img
                src={airplaneImage}
                alt="Luxury safari travel experience"
                className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className='py-12 bg-white max-w-lg'>
<Carousel autoSlide={true} autoSlideInterval={2000}>
{slides.map((s) => (
  <img src={s} alt='carousel images'/>
))}
</Carousel>
</section> */}
      {/* <section className='py-12 bg-white'>
<div className='container mx-auto px-4 space-y-6'>
  <video 
  autoPlay 
  loop className=''>
  <source src={video}/>
  </video> 
  </div>
 
</section> */}
{/* Section 4 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-2 text-left">
            <h2 className="text-4xl mb-5"> Client Feedback</h2>
            <p className="text-sm mb-10">
              Safari Trips made our dream vacation a reality!
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-xl font-medium text-left">
                "The attention to detail was incredible, and evere moment was
                unforgettable!"
              </p>
              <div className="flex">
                <button className="border-r-4 border-black flex p-2 items-center gap-2 mt-5">
                  <img
                    src={airplaneImage}
                    alt="First client face"
                    className="mr-5 w-20 h-20 rounded-full"
                  ></img>
                  <h4>
                    {" "}
                    Jane Doe <br />
                    Travel Blogger
                  </h4>
                </button>
                <h3 className="mt-10 ml-5 font-bold">Safari Trips</h3>
              </div>
            </div>
            <div>
              <p className="text-xl font-medium text-left">
                "The attention to detail was incredible, and evere moment was
                unforgettable!"
              </p>
              <div className="flex">
                <button className="border-r-4 border-black flex p-2 items-center gap-2 mt-5">
                  <img
                    src={airplaneImage}
                    alt="second client face"
                    className="mr-5 w-20 h-20 rounded-full"
                  ></img>
                  <h4>
                    {" "}
                    John Smith
                    <br />
                    Corporate Executive
                  </h4>
                </button>
                <h3 className="mt-10 ml-5 font-bold">Safari Trips</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="relative">
        {/* Background Image */}
        <div className="w-full h-[750px]">
          {" "}
          {/* Adjust height as needed */}
          <img
            src={TravelLocation}
            alt="Travel background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white ">
          <div className="container mx-auto px-4">
            {/* Top Content */}
            <div className="flex justify-between mt-20">
              <div>
                <h1 className="text-4xl text-left md:text-5xl font-bold mb-4">
                  Discover the World With
                  <br />
                  Safari Trips
                </h1>
              </div>
              <div className="max-w-md">
                <p className="mb-6 text-left">
                  At Safari Trips, we take pride in crafting unforgettable
                  travel experiences. With over a decade of expertise, we've
                  successfully served thousands of satisfied clients. Our
                  extensive network spans across numerous breathtaking
                  destinations worldwide.
                </p>
                <div className="gap-4 flex">
                  <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm md:text-base">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base">
                    Sign up <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 max-w-4xl mb-20">
              <div className="border-l-4 border-white justify-self-start p-6 text-left">
                <p className="text-7xl font-bold">95%</p>
                <p>Happy Clients</p>
              </div>
              <div className="border-l-4 border-white justify-self-center p-6 text-left">
                <p className="text-7xl font-bold">50+</p>
                <p>Destinations Worldwide</p>
              </div>
              <div className="border-l-4 border-white justify-self-end p-6 text-left">
                <p className="text-7xl font-bold">10+</p>
                <p>Years of Experience</p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="w-full h-48 bg-white bg-opacity-90 p-8">
              <div className="text-black flex justify-between items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Start Your Travel
                    <br />
                    Adventure Today
                  </h2>
                </div>
                <div className="max-w-md">
                  <p className="mb-6 text-left ">
                    Ready to explore the world? Book a personalized consultation
                    with us and let's turn your travel dreams into reality.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm md:text-base">
                      Inquire Now
                    </button>
                    <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base">
                      Sign up <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* Section 6 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-left">
            <h1 className="text-3xl mb-5">Join Our Travel Community</h1>
            <p className="mb-5">
              Stay updated with exclusive travel packages and promootions
              tailored just for you
            </p>
            <div>
              <input
                type="text"
                placeholder="Your Email here"
                className="border-gray-800 border px-6 py-3 rounded-md mr-5 w-72"
              ></input>
              <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base">
                Sign up
              </button>
            </div>
            <p className="text-sm">
              By clicking Sign Up, you agree to our Terms and Conditions
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 mt-10">
            <div className="grid grid-cols-6 gap-5">
            <div>
                <img src={imageLogo} alt="logo" className="h-20" />
            </div>
              <div className="mr-32 w-32">
                <ul>
                  <li className="font-bold">Explore More</li>
                  <li>About Us</li>
                  <li>Destinantions</li>
                  <li>Travel Trips</li>
                  <li>Contact Us</li>
                  <li>Testimonials</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-bold">Follow Us</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Linkedln</li>
                  <li>Youtube</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-bold">Newsletter</li>
                  <li>Sign Up</li>
                  <li>Latest News</li>
                  <li>Travel Deals</li>
                  <li>FAQs</li>
                  <li>Blog Posts</li>
                </ul>
              </div>
          
            <div className="w-96 col-span-2">
            {/* Subscribe */}
              <div className="text-left">
                <h1 className="font-bold mb-5">Subscribe</h1>
                <p className="mb-5">
                 Join our newsletter for the latest travel updates and exclusive offers
                </p>
                <div className="">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="border-gray-800 border px-4 py-2 rounded-md mr-5 w-48"
                  ></input>
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors md:text-base">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm">
                  By clicking Sign Up, you agree to our Terms and Conditions
                </p>
              </div>
            </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default home;