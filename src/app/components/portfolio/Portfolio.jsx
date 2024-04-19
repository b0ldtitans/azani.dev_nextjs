"use client";
import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const items = [
  {
    id: 1,
    title: "The Ticket Registry",
    img: "https://images.pexels.com/photos/20819835/pexels-photo-20819835.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Passionate and results-driven Front-End Developer with a strong focus on creating intuitive and user-friendly web applications. Currently, I am working on an exciting project similar to SeatGeek, where users can buy tickets for various events, webinars, and sports. Additionally, users have the option to sell their tickets, and event organizers can effortlessly create events and sell tickets. I'm dedicated to bringing this concept to life, ensuring a seamless and engaging user experience.",
    link: "https://fantastic-beignet-b35cbd.netlify.app/",
    src: "https://github.com/b0ldtitans/project1-event_management",
  },
  {
    id: 2,
    title: "FamilyMart POS Web App",
    img: "https://images.pexels.com/photos/20819836/pexels-photo-20819836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `The "FamilyMart Cashier POS Web App" is an innovative point-of-sale (POS) solution designed to streamline and enhance the cashier operations at FamilyMart convenience stores. This web-based application aims to provide FamilyMart's cashier staff with a modern, efficient, and user-friendly tool for processing transactions, managing inventory, and improving the overall shopping experience for customers.`,
    link: "",
    src: "https://github.com/b0ldtitans/FamilyMart-POSWebApp",
  },
  {
    id: 3,
    title: "Medium Blog",
    img: "https://images.pexels.com/photos/20819834/pexels-photo-20819834.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "You'll often find me sharing my thoughts, experiences, and knowledge on Medium.com. I love translating complex coding concepts into easy-to-understand articles. From diving into the intricacies of React.js to unleashing the power of Next.js, my articles are a blend of tutorials, tips, and real-world application stories.",
    link: "https://medium.com/@thareqazani",
    src: "",
  },
  {
    id: 4,
    title: "Nginapp - Booking platform",
    img: "https://images.pexels.com/photos/20819837/pexels-photo-20819837.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Nginapp is a cutting-edge Property Renting Web App designed to revolutionize the rental experience. Nginapp operates on a web-based platform, offer users a seamless and efficient way to compare accommodation prices based on specific dates. The app introduces a unique approach to property rental, considering factors such as national holidays, extended weekends, and manually set dates that influence accommodation prices.",
    link: "https://nginapp.azani.dev",
    src: "https://github.com/b0ldtitans/jcwd250402",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Copy the current value of ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this threshold as per your requirement
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Image src={item.img} alt="" height={1000} width={1000} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p
              style={{
                color: isInView ? "#fff" : "gray",
                transition: "color 1.5s ease",
                transitionDelay: isInView ? "0.3s" : "0s",
              }}
            >
              {item.desc}
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {item.link && (
                <a href={item.link} target="_blank">
                  View
                </a>
              )}
              {item.src && (
                <a href={item.src} target="_blank">
                  Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>
          <span>/</span>work
        </h1>
      </div>
      {items.reverse().map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
