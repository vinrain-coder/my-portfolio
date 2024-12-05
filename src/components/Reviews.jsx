"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { arrowIcons, reviewData, starIcons } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  const totalReviews = reviewData.length;

  const clampIndex = (newIndex) => {
    if (newIndex < 0) return 0; // Prevent going below 0
    if (newIndex >= totalReviews) return totalReviews - 1;
    return newIndex;
  };

  const rightClickHandler = () => {
    if (slides.current[index] && slides.current[prevIndex.current]) {
      animate(slides.current[index], { x: 0 }, { delay: 0.3 });
      animate(slides.current[prevIndex.current], {
        scale: index === 0 ? 1 : 0.4,
        rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
      });
    }
  };

  const leftClickHandler = () => {
    if (slides.current[index] && slides.current[prevIndex.current]) {
      animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
      animate(slides.current[prevIndex.current], { x: "100%" });
    }
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="reviews" className="my-20">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {reviewData.map((review, i) => (
            <motion.div
              initial={{ x: "100%" }}
              key={i}
              ref={(el) => (slides.current[i] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-800 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
            >
              <Image
                src={review.image}
                alt="Reviews Image"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars.reduce((sum, item) => sum + item, 0).toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, i) => (
                    <span key={i} className="Stars">
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`transition-all ${
              index === 0
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-110`}
            onClick={() => {
              setDirection(true);
              setIndex((prev) => clampIndex(prev - 1));
            }}
          >
            {arrowIcons[0]}
          </button>

          <button
            className={`transition-all ${
              index === totalReviews - 1
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-110`}
            onClick={() => {
              setDirection(false);
              setIndex((prev) => clampIndex(prev + 1));
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
