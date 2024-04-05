// Links.js
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import "./Links.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ onClick }) => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <a
          href="https://medium.com/@thareqazani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium size={27} className="medium" />
        </a>
        <a
          href="https://linkedin.com/in/thareqazani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={27} className="linkedin" />
        </a>
        <a
          href="https://github.com/b0ldtitans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={27} className="github" />
        </a>
      </div>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
