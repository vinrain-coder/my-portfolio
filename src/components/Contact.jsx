"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "./sub/Heading";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    isError: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the form
  const validateForm = () => {
    const { name, email, subject, message } = form;
    if (!name.trim()) {
      setResponseMessage({ message: "Name is required", isError: true });
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setResponseMessage({ message: "Valid email is required", isError: true });
      return false;
    }
    if (!subject.trim()) {
      setResponseMessage({ message: "Subject is required", isError: true });
      return false;
    }
    if (!message.trim()) {
      setResponseMessage({ message: "Message is required", isError: true });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setResponseMessage({ message: "", isError: false });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setResponseMessage({
        message: "Message sent successfully! I will get back to you soon.",
        isError: false,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setResponseMessage({
        message: "Failed to send message. Please try again later.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:py-0">
      <Heading text="Get in Touch" />
      <div className="w-full h-full flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/contact.gif"
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
            placeholder="Write me a message..."
          ></textarea>
          <button
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-md font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {responseMessage.message && (
            <p
              className={`mt-4 text-center font-medium text-lg ${
                responseMessage.isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {responseMessage.message}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
