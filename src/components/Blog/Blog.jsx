import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = (props) => {
  const {
    cover_url,
    picture,
    name,
    date,
    days_ago,
    min_read,
    title,
    hashTag1,
    hashTag2,
  } = props.blog;
  const handleReadTime = props.handleReadTime;
  const handleBookmark = props.handleBookmark;
  return (
    <div className="w-full bg-base-100 rounded-t-lg border-b mb-[38px] pb-5 md:pb-[38px]">
      <figure className="">
        <img className="w-full rounded-lg" src={cover_url} alt={title} />
      </figure>
      <div className="flex justify-between items-center pt-4 sm:pt-8">
        <div className="flex justify-between items-center gap-3 sm:gap-6">
          <img
            className="w-10 h-10 sm:w-[60px] sm:h-[60px] rounded-[50%] object-cover object-center"
            src={picture}
            alt={name}
          />
          <div>
            <h4 className="font-semibold sm:font-bold text-lg sm:text-2xl">
              {name}
            </h4>
            <p className="font-medium sm:font-semibold text-xs sm:text-base text-[#11111199]">
              {date} ({days_ago} days ago)
            </p>
          </div>
        </div>
        <div className="text-[#11111199]">
          <span className="font-medium text-base sm:text-xl mr-2">
            {min_read} min read
          </span>{" "}
          <button onClick={() => handleBookmark(title)}>
            <FontAwesomeIcon
              className="text-xl hover:text-amber-500"
              icon={faBookmark}
            />
          </button>
        </div>
      </div>
      <h1 className="my-4 font-bold text-xl md:text-3xl lg:text-[40px]">
        {title}
      </h1>
      <p className="text-purple-900 font-medium text-base sm:text-xl mb-5">
        #{hashTag1} #{hashTag2}
      </p>
      <button
        onClick={() => handleReadTime(min_read)}
        className="text-[#6047EC] hover:text-amber-500 underline text-base sm:text-xl font-medium"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
