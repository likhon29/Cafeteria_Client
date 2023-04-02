import React from 'react';

const Contact = () => {
    return (
        <div>
             <section className="mx-5 lg:mx-36 mt-24">
        <h2 className="text-3xl font-bold font-serif text-center">
          Contact With Us
        </h2>
        <p className="w-8/12 text-center mx-auto mt-6 mb-12">
          You can contact with us through this section. Send your problem
          through message, and we will contact with you shortly. Stay connected
          with us. Thank You.
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-100 w-75 lg:w-3/6"
          >
            <div className="text-center border-b-2 border-r-2 p-10">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3>Address</h3>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
            <div className="text-center border-b-2 p-10">
              <img className="mx-auto" src="images/call.png" alt="" />
              <h3>Address</h3>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
            <div className="text-center border-r-2 p-10">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3>Address</h3>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
            <div className="text-center p-10">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3>Address</h3>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 mb-5">
            <form action="">
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                id="inline-full-name"
                type="text"
                placeholder="Email Address"
              />

              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                id="inline-full-name"
                type="text"
                placeholder="Phone Number"
              />

              <textarea
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button
                className="bg-yellow-600 px-auto text-white py-4 w-full rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contact;