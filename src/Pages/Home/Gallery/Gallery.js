import React from "react";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="demo">
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Cafeteria
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Shahid Minar
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Mukhto Monch
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Others
        </button>
        <form >
            <input
              placeholder="Search Photo "
              name="phone"
              type="text"
              className="input m-1 w-48 input-bordered"
            />
            

            <input
              className="btn mx-1 my-2 btn-success"
              value="Search"
              type="submit"
            />
          </form>
      </div>


      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://juniv.edu/storage/image/discussion/9708_5-726fc0.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ytimg.com/vi/bxRuOYlQkI0/maxresdefault.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://en.shampratikdeshkal.com/uploads/2022/01/online/photos/juu-20210112111611-61d6ca5d22ad1-61d6deab18e6e.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId4ZF0fnNIl5xX3mcq2DQUwRWdVhvz2FwgveK2XdzF-HB4_MTY3ilmvAjddTA_oEZg4I&usqp=CAU" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/60366iD17682E6F5A57211?v=v2" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://thedailynewnation.com/library/1605890639_3.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb2rzUXY0bSywEMOkaC1VhbM0ANNBl6tSyQ&usqp=CAU" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="http://writing.searchenglish.com/wp-content/uploads/2017/04/images13.jpg" alt=""/>
    </div>
    
</div>
    </div>
  );
};

export default Gallery;
