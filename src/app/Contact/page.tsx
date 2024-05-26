"use client";
import React, { useState, FormEvent, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    projectdescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [disableButoon, setDisableButton] = useState(true);

  useEffect(() => {
    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.projectdescription === "" ||
      loading
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [contact.name, contact.email, contact.projectdescription, loading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/contact", contact);
      console.log("Login success", response.data);
    } catch (error: any) {
      console.log("message failed to send", error.message);
    } finally {
      setLoading(false);
      setContact({
        name: "",
        email: "",
        projectdescription: "",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen pt-20 bg-gradient-to-tr from-[#17433c] to-[#021814]">
        <h1 className="text-center text-slate-100 text-6xl my-6 font-bold">
          Make Your Brand Grow
        </h1>
        <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2  sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-slate-100 font-extrabold tracking-tight">
                    Let&apos;s Connect
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-slate-200 mt-2">
                    Ready to turn ideas into reality? Fill in the form below,
                    and let&apos;s start a conversation.
                  </p>

                  <div className="flex items-center mt-2 text-slate-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      brandgains@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center mt-4  text-slate-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoinx="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 "
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +91 9810544923
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center">
                  <div className="bg-slate-100 flex flex-col mt-2 rounded-md"></div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                      value={contact.name}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      value={contact.email}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="message" className="hidden">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message..."
                      rows={parseInt("4")}
                      onChange={(e) =>
                        setContact({
                          ...contact,
                          projectdescription: e.target.value,
                        })
                      }
                      value={contact.projectdescription}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold resize-none focus:border-indigo-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 flex justify-center ${
                      loading && "gap-2"
                    }`}
                    disabled={disableButoon}
                  >
                    Submit{" "}
                    {loading && (
                      <svg
                        className="h-6 w-6 animate-spin"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          fill="none"
                          strokeWidth="10"
                          className="stroke-current opacity-40"
                          cx="50"
                          cy="50"
                          r="40"
                        />
                        <circle
                          fill="none"
                          strokeWidth="10"
                          className="stroke-current"
                          strokeDasharray="250"
                          strokeDashoffset="210"
                          cx="50"
                          cy="50"
                          r="40"
                        />
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
