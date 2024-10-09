"use client";

import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const StyledToastContainer = styled(ToastContainer).attrs((props) => ({
  position: props.isMobile ? "top-center" : "top-right",
  autoClose: props.isMobile ? 2000 : 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
}))`
  /* Default styles for larger screens */
  width: 260px;
  margin-top: 3rem;


  .Toastify__toast {
    font-size: 0.85rem;
    padding: 10px;
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0px;
  }

  .Toastify__close-button {
    width: 15px;
    height: 15px;
  }

  .Toastify__toast-icon {
    width: 20px;
    height: 20px;
  }

  /* Responsive adjustments for tablet screens */
  @media (max-width: 768px) {
    width: 80%;
  }

  /* Responsive adjustments for mobile screens */
  @media (max-width: 480px) {
    width: 90%;
    left: 50%;
    margin-top: 4rem;
    transform: translateX(-50%);

    .Toastify__toast {
      font-size: 0.75rem;
      padding: 8px;
    }
  }
`;

const ToastProvider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 480);
      checkMobile(); // Initial check
      window.addEventListener("resize", checkMobile); // Update on resize
      return () => window.removeEventListener("resize", checkMobile); // Cleanup on unmount
    }
  }, []);

  return <StyledToastContainer isMobile={isMobile} />;
};

export default ToastProvider;
