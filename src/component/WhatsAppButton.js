import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <style jsx global>{`
        @keyframes whatsappFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes whatsappSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rippleEffect {
          0% { transform: scale(0); opacity: 0.8; }
          50% { transform: scale(2); opacity: 0.4; }
          100% { transform: scale(4); opacity: 0; }
        }
        .whatsapp-button.clicked::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15px;
          height: 15px;
          background-color: #ff7f50;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.8s ease-out forwards;
          opacity: 0.8;
        }
        .whatsapp-button.clicked::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25px;
          height: 25px;
          background-color: #ff7f50;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.8s ease-out 0.2s forwards;
          opacity: 0.6;
        }
      `}</style>

      <div>
        {/* زر واتساب */}
        <button
          className={`whatsapp-button fixed bottom-20 right-5 w-[50px] h-[50px] bg-[#25d366] text-white rounded-full text-3xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] z-[9999] 
            ${isPopupOpen ? 'animate-[rippleEffect_0.5s_ease]' : ''}`}
          onClick={openPopup}
        >
          <FaWhatsapp />
        </button>

        {/* النافذة المنبثقة */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-[10000] animate-[whatsappFadeIn_0.3s_ease-in-out]"
            onClick={closePopup}
          >
            <div
              className="bg-white p-6 rounded-2xl w-96 max-w-[90%] text-center shadow-[0_10px_25px_rgba(0,0,0,0.3)] animate-[whatsappSlideUp_0.3s_ease-in-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp Chat</h2>
              <p className="text-gray-600 mb-6 text-sm">Click below to start chatting with us!</p>
              <div className="flex justify-between gap-4">
                <a
                  href="https://wa.me/201550019832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-[#25d366] text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[#20b356] hover:shadow-[0_4px_15px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95"
                >
                  Open WhatsApp
                </a>
                <button
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-[0_4px_15px_rgba(255,95,95,0.5)] hover:scale-105 active:scale-95"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;