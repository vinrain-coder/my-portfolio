"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Heading from "./sub/Heading";

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vincent",
          from_email: form.email,
          to_email: "vincentombogo57@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setResponseMessage({
        message: "Thank you! I will get back to you as soon as possible.",
        isError: false,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error(error);
      setResponseMessage({
        message: "Ahh, something went wrong. Please try again.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:py-0">
      <Heading text={"Get in Touch"} />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/assets/contact.gif"}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
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
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject}</p>
          )}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="max-h-[250px] min-h[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
            placeholder="Write me a message..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}

          <input
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-md font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            value={loading ? "Sending..." : "Send Message"}
          />
        </motion.form>

        {responseMessage.message && (
          <p
            className={`mt-4 text-center font-medium text-lg ${
              responseMessage.isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {responseMessage.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
