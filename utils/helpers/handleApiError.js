// utils/helpers/handleApiError.js

import WarningIcon from "@public/assets/icons/WarningIcon"; // Ensure correct path
import { toast } from "react-toastify";

const showError = (message) =>
  toast.error(message, {
    // Changed to toast.error for consistency
    icon: <WarningIcon />, // Ensure WarningIcon is a valid React component
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className: "error-toast",
  });

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
