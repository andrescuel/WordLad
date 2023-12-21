"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { scale: 1, rotateY: 0 },
  guessed: { scale: 1.1, rotateY: 90 },
  entered: { scale: 1.1 },
};

type Props = {
  letter: string;
  bgColor?: string;
  borderColor?: string;
};

export default function WordBoardGrid(props: Props) {
  const [entered, setEntered] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const { letter, bgColor, borderColor } = props;

  useEffect(() => {
    // Set entered to true when a letter is entered
    if (letter) {
      setEntered(true);

      // Reset entered after a short delay (e.g., 500ms)
      const timeout = setTimeout(() => {
        setEntered(false);
      }, 250);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [letter]);

  useEffect(() => {
    // Set entered to true when a letter is entered
    if (bgColor) {
      setGuessed(true);

      // Reset entered after a short delay (e.g., 500ms)
      const timeout = setTimeout(() => {
        setGuessed(false);
      }, 250);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [bgColor]);

  const currentVariant = guessed ? "guessed" : entered ? "entered" : "default";

  return (
    <motion.div
      className={`flex h-14 w-14 items-center justify-center border-2 rounded-md ${borderColor} font-bold uppercase text-3xl ${bgColor}`}
      animate={currentVariant}
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      {letter}
    </motion.div>
  );
}
