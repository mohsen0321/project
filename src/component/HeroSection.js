import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import white from '../assets/Icons/white.png';
import black from '../assets/Icons/black.png';

// ربط Modal بـ root لتجنب مشاكل الوصول
Modal.setAppElement('#root');

const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-16 md:px-16 lg:px-32 bg-gray-100 min-h-[70vh]">
      {/* Left Section (Text and Buttons) */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
        <div>
          <h1 className="text-blue-600 text-3xl md:text-4xl font-bold">Build</h1>
          <h2 className="text-gray-800 text-3xl md:text-4xl font-semibold mt-2">
            AI models with ease
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed">
            A powerful, user-friendly IDE designed to simplify, accelerate, and
            reduce the cost of AI model development.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:ml-32">
          <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 w-full sm:w-auto justify-center">
            <img src={white} alt="App Store" className="w-5" />
            <span>Download in the App Store</span>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 w-full sm:w-auto justify-center">
            <img src={black} alt="Microsoft" className="w-5" />
            <span>Download in the Microsoft</span>
          </button>
          <button
            onClick={openModal}
            className="text-blue-500 text-base md:text-lg font-medium hover:underline flex items-center"
          >
            Watch demo
          </button>
        </div>
      </motion.div>

      {/* Right Section (Vertical Image Placeholder) */}
      <motion.div
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-64 sm:h-80 md:h-96 bg-blue-300 rounded-lg mx-auto lg:mx-0 mb-10 lg:mb-0"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      ></motion.div>

      {/* Modal for Video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            padding: '0',
            border: 'none',
            background: 'transparent',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
          >
            X
          </button>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/O8OntvmrULo?si=FSlybOiHfPy40f5F"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default HeroSection;