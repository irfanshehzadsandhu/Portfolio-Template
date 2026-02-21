import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);
      setForm({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <>
      {showThankYou && (
        <div className="z-50 fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Thank you.
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShowThankYou(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  I will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-jet p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6 font-poppins"
          >
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
              onMouseOver={() => {
                const btn = document.querySelector(".contact-btn");
                if (btn) btn.setAttribute("src", sendHover);
              }}
              onMouseOut={() => {
                const btn = document.querySelector(".contact-btn");
                if (btn) btn.setAttribute("src", send);
              }}
            >
              {state.submitting ? "Sending" : "Send"}
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
