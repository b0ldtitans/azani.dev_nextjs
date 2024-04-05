"use client";
import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [sending, setIsSending] = useState(false);
  const ref = useRef();
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_e80yj48",
        "template_nt8e4nd",
        formRef.current,
        "TDTYg33qn0VYAyzZQ"
      );
      toast.success("Email sent successfully");
      formRef.current.reset();
    } catch (error) {
      toast.error("Fail to send email");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s Grow together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a className="email" href="mailto:thareq@azani.dev">
              thareq@azani.dev
            </a>
          </div>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Telegram</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a className="email" href="https://t.me/thareqazani">
              @thareqazani
            </a>
          </div>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>DKI Jakarta, Indonesia</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          transition={{ delay: 2, duration: 1 }}
        >
          <input
            disabled={sending}
            type="text"
            required
            placeholder="Name"
            name="user_name"
          />
          <input
            disabled={sending}
            type="email"
            required
            placeholder="Email"
            name="user_email"
          />
          <textarea
            disabled={sending}
            rows={8}
            required
            placeholder="Message"
            name="message"
          />
          <button disabled={sending} type="submit">
            Submit
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
