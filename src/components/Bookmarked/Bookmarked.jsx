import React from "react";

const Bookmarked = (props) => {
  const readTime = props.readTime;
  const bookmarkTitles = props.bookmark;
  return (
    <div>
      <div className="bg-[#EFEDFD] py-5 px-7 border border-[##6047EC] rounded-lg">
        <h2 className="text-[#6047EC] text-lg sm:text-base lg:text-xl font-bold text-center">
          Spent time on read : {readTime} min
        </h2>
      </div>
      <div className="bg-[#1111110D] p-[30px] rounded-lg mt-3 sm:mt-6">
        <h2 className="font-bold text-2xl">
          Bookmarked Blogs : {bookmarkTitles.length}
        </h2>
        {bookmarkTitles.map((title, index) => (
          <div className="p-5 rounded-lg bg-white my-4" key={index}>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarked;
