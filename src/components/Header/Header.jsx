import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-3 py-4 md:py-8 border-b">
      <h2 className="font-bold text-xl md:text-3xl lg:text-[40px]">
        Knowledge Cafe
      </h2>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="flex items-center justify-center text-xs sm:text-base font-medium gap-3 md:gap-5 lg:gap-8">
          <a className="hover:text-amber-500 hover:underline" href="">
            Home
          </a>
          <a className="hover:text-amber-500 hover:underline" href="">
            Blog
          </a>
          <a className="hover:text-amber-500 hover:underline" href="">
            Bookmark
          </a>
        </div>
        <img
          className="w-10 h-10 sm:w-[60px] sm:h-[60px] rounded-[50%] object-cover object-center"
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
