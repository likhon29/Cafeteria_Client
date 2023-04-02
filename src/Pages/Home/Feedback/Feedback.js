import React from "react";
import "./Feedback.css";
const Feedback = () => {
  return (
    <div>
      <section className="mx-10 lg:mx-36 my-20 lg:p-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-serif text-center my-6">
            What Our Customer Say
          </h1>
          <p className="w-full lg:w-1/2 mx-auto my-5">
            Here are some of our clients. We have provided them the best
            services. They shared their problems with us and we tried to solve
            their problems in an unique way.
          </p>
        </div>

        <div className="lg:flex justify-center items-center">
        <div class="container ">
          <div class="testimonial-box">
            <div class="testimonial">
              <i class="fas fa-quote-right"></i>
              <span class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dignissimos blanditiis similique quod quaerat et recusandae
                tempora. Animi error quaerat labore cum! Ratione veritatis culpa
                illo quo molestiae minima repudiandae.
              </span>
              <div class="testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt="user-img"
                  class="user-img"
                />
                <div class="user-info">
                  <span class="user-name">Username</span>
                  <div class="user-job-details">
                    <span class="user-job">Job</span>
                    <div class="line"></div>
                    <span class="user-post">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="testimonial-box">
            <div class="testimonial">
              <i class="fas fa-quote-right"></i>
              <span class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dignissimos blanditiis similique quod quaerat et recusandae
                tempora. Animi error quaerat labore cum! Ratione veritatis culpa
                illo quo molestiae minima repudiandae.
              </span>
              <div class="testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt="user-img"
                  class="user-img"
                />
                <div class="user-info">
                  <span class="user-name">Username</span>
                  <div class="user-job-details">
                    <span class="user-job">Job</span>
                    <div class="line"></div>
                    <span class="user-post">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>

        <div class="support">
          <a href="https://twitter.com/DevLoop01" target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="https://codepen.io/dev_loop/" target="_blank">
            <i class="fab fa-codepen"></i>
          </a>
        </div>

        {/* <div id="default-carousel" className="relative" data-carousel="static">
         
          <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                className="relative lg:w-1/3 -translate-y-1/2 top-1/2 left-14 lg:left-1/2 sm:text-3xl z-30 ."
              >
                <img
                  src="images/profile1.png"
                  alt=""
                  width="80px"
                  height="80px"
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="lg:text-3xl text-white font-bold">
                    Shamim Al Mamun
                  </h1>
                  <p className="lg:text-xl text-pink-500">Software Engineer</p>
                  <p className="text-sm text-white">
                    Hi this is Mr. X. I am a web developer. I have a company
                    named X company Limited. I were in a trouble once. And they
                    helped me to cop up with my problems.
                  </p>
                </div>
              </div>
              >
              <img
                src="images/slider-1.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                className="relative lg:w-1/3 -translate-y-1/2 top-1/2 left-14 lg:left-20 sm:text-3xl z-30"
              >
                <img
                  src="images/profile2.jfif"
                  alt=""
                  width="80px"
                  height="80px"
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="lg:text-3xl text-white font-bold">Mir Hossain</h1>
                  <p className="text-xl text-pink-500">Front Designer</p>
                  <p className="text-sm text-white">
                    Hi this is Mr. Y. My first marriage didn't last long. My
                    wife was not a perfect life partner for me. They helped us
                    for our separation.
                  </p>
                </div>
              </div>

              <img
                src="images/slider-2.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                className="relative lg:w-1/3 -translate-y-1/2 top-1/2 left-14 lg:left-1/2 sm:text-3xl z-30"
              >
                <img
                  src="images/profile3.png"
                  alt=""
                  width="80px"
                  height="80px"
                  className="rounded-full"
                />
                <div className="">
                  <h1 className="lg:text-3xl text-white font-bold">
                    Awhlad Hossain
                  </h1>
                  <p className="text-xl text-pink-500">UI/UX Designer</p>
                  <p className="text-sm text-white">
                    Hello I am Mrs. Z. I am a meritorious students. But my
                    financial condition was not well for me to continue my
                    further study. They helped me financially.
                  </p>
                </div>
              </div>
              <img
                src="images/slider-3.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          
          <div
            className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
          >
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
         
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default Feedback;
