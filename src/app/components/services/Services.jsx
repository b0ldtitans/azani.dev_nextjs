"use client";
import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import Image from "next/image";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr /> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <Image src="/people.webp" alt="" width={300} height={100} /> */}
          <h1>
            Create
            <motion.b whileHover={{ color: "#A07CFF" }}> Unique</motion.b>{" "}
            Website
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#CBF281" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          {/* <button>WHAT I DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box fed">
          <h2>Front End Development</h2>
          <div>
            <TbBrandNextjs size={80} color="white" />
            <FaReact size={80} color="#00D8FE" />
          </div>
          <p>
            Crafting stunning and interactive user interfaces that bring your
            ideas to life. From eye-catching designs to seamless user
            experiences, we make the web a better place, one pixel at a time.
          </p>
        </motion.div>
        <motion.div className="box bed">
          <h2>Back End Development</h2>
          <div>
            <FaNode size={80} color="#8CC74A" />
            <Image
              src="/mysql-logo-svgrepo-com.svg"
              alt=""
              width={120}
              height={120}
            />
            <Image
              src="/postgresql-svgrepo-com.svg"
              alt=""
              width={70}
              height={70}
            />
          </div>
          <p>
            Behind the scenes, we build the engine that powers your digital
            dreams. Seamlessly connecting databases, handling complex logic, and
            ensuring everything runs smoothly behind the curtain.
          </p>
        </motion.div>
        <motion.div className="box mad">
          <h2>Mobile App Development</h2>
          <Image
            src="/toppng.com-react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-986x1055.png"
            alt=""
            width={80}
            height={80}
          />
          <p>
            In a world where apps rule, we&apos;re your app&apos;s best friend.
            From brainstorming the next big feature to fine-tuning the tiniest
            detail, we create apps that fit right into people&apos;s pockets and
            lives.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
