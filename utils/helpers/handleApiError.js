// utils/helpers/handleApiError.js

import WarningIcon from "@public/assets/icons/WarningIcon"; 
import { toast } from "react-toastify";

const showError = (message) => {
  const screenWidth = window.innerWidth;

  // Adjust autoClose time based on screen size
  const autoCloseTime = screenWidth <= 480 ? 2000 : 3000; // Shorter close time for mobile

  toast.error(message, {
    icon: <WarningIcon />,
    position: "bottom-right",
    autoClose: autoCloseTime,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className: "error-toast",
  });
};

const handleApiError = ({ error, customMessage }) => {
  if (customMessage) {
    showError(customMessage);
    return;
  }

  if (error) {
    // Attempt to parse the error response if it's a Response object
    if (error instanceof Response) {
      error.json().then((data) => {
        if (data.message) {
          showError(data.message);
        } else {
          showError("Something went wrong!");
        }
      });
    } else if (error.message) {
      // If error is an Error object
      showError(error.message);
    } else {
      // Fallback
      showError("Something went wrong!");
    }
  } else {
    // If no error provided
    showError("Something went wrong!");
  }
};

export default handleApiError;
