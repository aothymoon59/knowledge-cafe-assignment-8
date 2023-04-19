import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarked from "../Bookmarked/Bookmarked";
import { ToastContainer, toast } from "react-toastify";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadTime = (min) => setReadTime(readTime + parseInt(min));
  const handleBookmark = (title) => {
    const newBookmark = [...bookmark, title];

    if (bookmark.includes(title)) {
      toast.warn("You Have Already Bookmarked This Blog");
    }
    setBookmark(newBookmark);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-6 w-full max-w-7xl mx-auto px-3 py-4 md:py-8">
      <div className="">
        {blogs.map((blog) => (
          <Blog
            handleReadTime={handleReadTime}
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
          ></Blog>
        ))}
      </div>
      <div className="">
        <Bookmarked bookmark={bookmark} readTime={readTime}></Bookmarked>
      </div>
    </div>
  );
};

export default Blogs;
