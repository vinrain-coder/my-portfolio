"use client";

import { questions } from "@/assets";
import Heading from "./sub/Heading";
import Question from "./sub/Question";

const Questions = () => {
  return (
    <div id="questions" className="py-20">
      <Heading text={"Questions and Answers"} />
      <div className="">
        <ul className="flex flex-col gap-y-3">
          {questions.map((question, i) => (
            <Question key={i} data={question} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
