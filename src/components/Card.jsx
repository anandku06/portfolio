import { motion } from "motion/react";
import React from "react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      src={image}
      className="absolute w-15 cursor-grab"
      style={style}
      whileHover={{ scale: 1 }}
      drag
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1 }}
      drag
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  );
};

export default Card;
