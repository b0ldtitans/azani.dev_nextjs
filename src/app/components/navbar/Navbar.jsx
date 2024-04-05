"use client";
import Sidebar from "../sidebar/Sidebar";
import Image from "next/image";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Navbar = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.a
          href="#Homepage"
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={"/logo.svg"} alt="logo" width={220} height={90} />
        </motion.a>
        <div className="navlink">
          {items.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/resume"
          >
            Resume
          </motion.a>
        </div>
        <div className="social">
          <motion.a
            href="https://medium.com/@thareqazani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMedium size={27} className="medium" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/thareqazani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={27} className="linkedin" />
          </motion.a>
          <motion.a
            href="https://github.com/b0ldtitans"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithubSquare size={27} className="github" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
