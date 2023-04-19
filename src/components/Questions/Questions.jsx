import React, { useEffect, useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("faq.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto py-5 px-3">
      <h2 className="text-center mb-10 text-2xl md:text-3xl lg:text-[40px] pb-5 font-bold">
        Frequently Asked Questions
      </h2>
      {questions.map((singleQues, index) => (
        <SingleQuestion key={index} singleQues={singleQues}></SingleQuestion>
      ))}
    </div>
  );
};

export default Questions;
