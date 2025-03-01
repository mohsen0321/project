import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setClicked(false);
    }, 800); // قللت الوقت لـ 0.8 ثانية عشان يبقى أسرع وأنعم
  };

  return (
    <>
      {/* الـ CSS المخصص للأنيميشن */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px); /* قللت المسافة لسلاسة أكتر */
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(30px); /* نفس المسافة للتناسق */
          }
        }

        @keyframes clickEffect {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3); /* قللت التكبير عشان ما يبقاش مبالغ فيه */
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1; /* رجعته لـ 1 عشان ما يختفيش */
          }
        }

        @keyframes rippleEffect {
          0% {
            transform: scale(0);
            opacity: 0.8; /* بداية أقل شفافية */
          }
          50% {
            transform: scale(2); /* قللت الحجم الأقصى للتموج */
            opacity: 0.4;
          }
          100% {
            transform: scale(4); /* زيادة بسيطة في النهاية */
            opacity: 0;
          }
        }

        .scroll-to-top.clicked::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15px; /* قللت الحجم عشان يبقى أرقى */
          height: 15px;
          background-color: #ff7f50;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.8s ease-out forwards; /* وقت أقصر لسلاسة */
          opacity: 0.8;
        }

        .scroll-to-top.clicked::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25px; /* حجم أكبر شوية للتنوع */
          height: 25px;
          background-color: #ff7f50;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.8s ease-out 0.2s forwards; /* تأخير أقل */
          opacity: 0.6;
        }
      `}</style>

      <div>
        {showButton && (
          <button
            className={`scroll-to-top fixed bottom-5 right-5 bg-blue-500 text-white rounded-full text-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer z-[999] shadow-lg
              ${clicked 
                ? 'animate-[clickEffect_0.5s_ease]' 
                : 'animate-[fadeIn_0.6s_ease_forwards]'} 
              transition-all duration-300 ease-in-out 
              hover:bg-[#ff7f50] hover:scale-125 hover:shadow-[0_8px_20px_rgba(0,123,255,0.6)] 
              focus:outline-none focus:shadow-[0_8px_15px_rgba(255,127,80,0.8)]
              ${!showButton ? 'animate-[fadeOut_0.6s_ease_forwards]' : ''}`}
            onClick={scrollToTop}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default ScrollToTop;