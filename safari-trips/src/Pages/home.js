// With Animation and transitions, not with Animation on scroll


import React from "react";
import NavLinks from "../components/navLinks";
import airplaneImage from "../Images/Airplane Travel Agency.png";
import TravelLocation from "../Images/location travel agency.jpg";
import imageLogo from "../Images/Safari Trips Logo Design.png";
import video from "../components/Video/2231485-uhd_3840_2160_24fps.mp4";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <NavLinks />
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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000"></div>
        
        <div className="container relative z-10 px-4 mx-auto h-full flex items-center">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="font-bold text-left text-4xl md:text-6xl text-white leading-tight mb-5 transform transition-all duration-700 hover:scale-105">
              Discover Extraordinary <br className="hidden md:block" />
              Adventures with <br className="hidden md:block" />
              Safari Trips
            </h1>

            <p className="text-lg text-left text-white/90 max-w-2xl mb-8 animate-slide-up delay-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique.
            </p>
            
            <div className="flex gap-4 mt-8 animate-slide-up delay-200">
              <button className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-bold transform hover:-translate-y-1">
                Explore Tours
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-all duration-300 hover:scale-105 font-bold transform hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900 transform transition-all duration-700 hover:scale-105">
              Safari Trips
            </h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${item * 200}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={airplaneImage}
                    alt="Travel experience"
                    className="w-full h-48 md:h-56 object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 transform transition-all duration-300 group-hover:text-indigo-600">
                    Custom Itineraries <br />
                    Crafted Just for You
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Your dream vacation starts with a personalized plan
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 animate-fade-in">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Explore
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              Sign up <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 md:order-2 animate-slide-right">
              <img
                src={airplaneImage}
                alt="Luxury safari travel experience"
                className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow-duration-500 object-cover transform transition-all duration-500 hover:scale-105"
              />
            </div>
            <div></div>
            <div className="order-2 md:order-1 animate-slide-left">
              <div className="space-y-6">
                <h1 className="font-bold text-2xl md:text-4xl text-left text-gray-800 leading-tight transform transition-all duration-700 hover:scale-105">
                  Discover Extraordinary Adventures with Safari Trips
                </h1>

                <p className="text-base text-left text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Personalized Service', 'Exclusive Access'].map((service, idx) => (
                    <div 
                      key={idx}
                      className="bg-gray-50 p-4 rounded-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                    >
                      <h3 className="text-xl text-left font-bold mb-3 text-gray-800">
                        {service}
                      </h3>
                      <p className="text-sm text-left text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                    Sign up <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="p-2 text-left animate-slide-up">
            <h2 className="text-4xl mb-5 transform transition-all duration-700 hover:scale-105">
              Client Feedback
            </h2>
            <p className="text-sm mb-10">
              Safari Trips made our dream vacation a reality!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8">
            {[
              { name: "Jane Doe", title: "Travel Blogger" },
              { name: "John Smith", title: "Corporate Executive" }
            ].map((person, idx) => (
              <div 
                key={idx} 
                className="flex-1 bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <p className="text-xl font-medium text-left mb-6">
                  "The attention to detail was incredible, and every moment was
                  unforgettable!"
                </p>
                <div className="flex items-center">
                  <div className="border-r-2 border-indigo-500 pr-4">
                    <img
                      src={airplaneImage}
                      alt={`${person.name} face`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="pl-4">
                    <h4 className="font-bold">{person.name}</h4>
                    <p>{person.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative animate-fade-in">
        <div className="w-full h-[750px]">
          <img
            src={TravelLocation}
            alt="Travel background"
            className="w-full h-full object-cover transform transition-all duration-1000 hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
          {/* ... existing stats section content with animation classes ... */}
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
          <div className="grid grid-cols-3 max-w-4xl mb-20">
            {[
              { value: "95%", label: "Happy Clients" },
              { value: "50+", label: "Destinations Worldwide" },
              { value: "10+", label: "Years of Experience" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="border-l-4 border-white p-6 text-left animate-pop-in"
                style={{ animationDelay: `${idx * 300}ms` }}
              >
                <p className="text-7xl font-bold">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          {/* ... rest of stats section ... */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white animate-slide-up">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-left">
            <h1 className="text-3xl mb-5 transform transition-all duration-700 hover:scale-105">
              Join Our Travel Community
            </h1>
            <p className="mb-5">
              Stay updated with exclusive travel packages and promotions tailored just for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Email here"
                className="border-gray-800 border px-6 py-3 rounded-md w-full sm:w-72 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                Sign up
              </button>
            </div>
            <p className="text-sm mt-2">
              By clicking Sign Up, you agree to our Terms and Conditions
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-gray-100 animate-fade-in">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* ... footer content with hover animations ... */}
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
            <div className="md:col-span-2">
              <div className="text-left">
                <h1 className="font-bold mb-5">Subscribe</h1>
                <p className="mb-5">
                  Join our newsletter for the latest travel updates and exclusive offers
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="border-gray-800 border px-4 py-2 rounded-md w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm mt-2">
                  By clicking Sign Up, you agree to our Terms and Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideLeft {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes popIn {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          70% { 
            transform: scale(1.05);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.8s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;