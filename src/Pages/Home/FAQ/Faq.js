import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="mx-10 lg:mx-36 my-20 lg:p-20">
        <div className="text-center">
          <h1 className="text-3xl">Frequently Asked Any Questions</h1>
          <p className="w-full lg:w-1/2 mx-auto my-5">
            Law is a set of rules that are created and are enforceable by social
            or governmental institutions to regulate behavior, with its precise
            definition a matter of longstanding debate.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span
                  >1.What are the differences between flexbox and grid?</span
                >
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div
                className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The basic difference between CSS Grid Layout and CSS Flexbox
                  Layout is that flexbox was designed for layout in one
                  dimension - either a row or a column. Grid was designed for
                  two-dimensional layout - rows, and columns at the same time.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Grid:CSS Grid Layout, is a two-dimensional grid-based layout
                  system with rows and columns, making it easier to design web
                  pages without having to use floats and positioning. Like
                  tables, grid layout allow us to align elements into columns
                  and rows.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Flexbox: The CSS Flexbox offers a one-dimensional layout. It
                  is helpful in allocating and aligning the space among items in
                  a container (made of grids). It works with all kinds of
                  display devices and screen sizes.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>2. What is the purpose of media query?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div
                className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Media queries are a key part of responsive web design, as they
                  allow you to create different layouts depending on the size of
                  the viewport, but they can also be used to detect other things
                  about the environment your site is running on, for example
                  whether the user is using a touchscreen rather than a mouse.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  It consists of: A media type, which tells the browser what
                  kind of media this code is for (e.g. print, or screen). A
                  media expression, which is a rule, or test that must be passed
                  for the contained CSS to be applied. A set of CSS rules that
                  will be applied if the test passes and the media type is
                  correct.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>3. What is CSS Box Model and how does it work?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div
                className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The CSS box model is a container that contains multiple
                  properties including borders, margin, padding, and the content
                  itself. It is used to create the design and layout of web
                  pages. It can be used as a toolkit for customizing the layout
                  of different elements. The web browser renders every element
                  as a rectangular box according to the CSS box model. Box-Model
                  has multiple properties in CSS. Some of them are given below:
                  content: This property is used to displays the text, images,
                  etc, that can be sized using the width & height property.
                  padding: This property is used to create space around the
                  element, inside any defined border. border: This property is
                  used to cover the content & any padding, & also allows to set
                  the style, color, and width of the border. margin: This
                  property is used to create space around the element ie.,
                  around the border area.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span>4.What is semantic tag? Why it is used for?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div
                className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The core characteristic of a semantic element is that it
                  clearly communicated its meaning to both the developer and the
                  browser. These elements clearly define its content.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Why Do You Need to Use Semantic Tags in HTML? The are several
                  advantages of using semantics tags in HTML: The semantic HTML
                  tags help the search engines and other user devices to
                  determine the importance and context of web pages. The pages
                  made with semantic elements are much easier to read. It has
                  greater accessibility. It offers a better user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <img src="https://www.shutterstock.com/image-vector/faq-blue-typography-banner-260nw-1356204374.jpg" alt="" width="100%" />
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Faq;