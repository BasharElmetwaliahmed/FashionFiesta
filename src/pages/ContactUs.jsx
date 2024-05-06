import { addDoc, collection } from "firebase/firestore";
import React, { useRef } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
function ContactUs() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || name.trim() === "" || message.trim() === "") {
      return toast.error("All Fields are required");
    }
    if (name.trim().length < 5) {
      return toast.error("Name must be at least 5 characters");
    }
    if (message.trim().length < 5) {
      return toast.error("message must be at least 10 characters");
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      return toast.error("email must be in valid format");
    }
    console.log({
      name,
      email,
      message,
    });
    try {
      await await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
      });
      toast.success("Your message has been sent successfully");
      setEmail('');
      setMessage('');
      setName('');
    } catch (err) {
      toast.error("Error while send message");
    }
  };

  return (
    <div className="sec-top">
      <h2 className="sec-header ">Contact us</h2>
      <div className="sec-p container  ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6  mx-auto w-full md:max-w-[600px]">
          <div className="">
            <label htmlFor="user_name" className="input-label">
              Name
            </label>
            <input
              className="input"
              type="text"
              name="user_name"
              id="user_name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              required
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="input min-h-[150px]  resize-none"
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>

          <button
            className="btn hover:opacity-50 transition-all duration-300"
            type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
