import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* زر واتساب */}
      <button className="whatsapp-button" onClick={openPopup}>
        <FaWhatsapp />
      </button>

      {/* النافذة المنبثقة */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h2>WhatsApp Chat</h2>
            <p>Click the button below to start the conversation:</p>
            <a
              href="https://wa.me/201550019832"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-chat-button"
            >
              Open WhatsApp
            </a>
            <button className="close-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
