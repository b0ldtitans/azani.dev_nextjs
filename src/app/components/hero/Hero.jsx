"use client";
import "./hero.scss";
import { motion } from "framer-motion";
import { toast } from "sonner";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 style={{ color: "#CCF381" }} variants={textVariants}>
            Fullstack Web Developer{" "}
            <span style={{ color: "white", fontSize: "4rem" }}>•</span>
          </motion.h1>
          <motion.h2
            onClick={() => toast.success("TEST")}
            variants={textVariants}
          >
            With a focus on fullstack development, I engineer solutions that are
            solid, scalable, and elevate user experiences.
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href="/resume"
              aria-label="My Resume"
              variants={textVariants}
            >
              My resume
            </motion.a>
            <motion.a
              href="#Contact"
              aria-label="Contact Me"
              variants={textVariants}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
