import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setOpenPopup(true);
    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // paste your ServiceID here (you'll get one when your service is created).
        import.meta.env.VITE_TEMPLATE_ID, // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Irfan Shahzad", // put your name here.
          from_email: form.email,
          to_email: "irfanshehzadsandhu@gmail.com", //put your email here.
          message: form.message + "\n" + form.email,
        },
        import.meta.env.VITE_PUBLIC_KEY //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      {openPopup && (
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
                  data-modal-hide="default-modal"
                  onClick={() => setOpenPopup(false)}
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
            </label>

            <button
              type="submit"
              className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", sendHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", send);
              }}
            >
              {loading ? "Sending" : "Send"}
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
