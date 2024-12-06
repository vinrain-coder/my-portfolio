import { useState } from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import FormInput from "./sub/FormInput";
import FormTextArea from "./sub/FormTextarea";
import ResponseMessage from "./sub/ResponseMessage";
import FormButton from "./sub/FormButton";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    isError: false,
  });

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
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setResponseMessage({
        message: "Message sent successfully! I will get back to you soon.",
        isError: false,
      });
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
            unoptimized={true}
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <FormInput
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <FormInput
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
            />
          </div>
          <FormInput
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <FormTextArea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write me a message..."
          />
          <FormButton loading={loading} text="Send Message" />
          <ResponseMessage
            message={responseMessage.message}
            isError={responseMessage.isError}
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
