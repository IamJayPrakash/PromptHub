"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";
import handleApiError from "@utils/helpers/handleApiError";

const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 20px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ErrorPage = ({ error, reset }) => {
  const router = useRouter();
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    handleApiError({ error });
  }, [error]);

  const handleTryAgain = () => {
    setIsReloading(true);
    reset();
    setIsReloading(false);
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <ErrorContainer>
      <h1 className="mb-4 text-4xl font-bold orange_gradient">
        Something went wrong!
      </h1>
      <h2 className="mb-6 text-lg text-gray-600">
        Sorry, there was an error loading the page.
      </h2>
      <ButtonGroup>
        <button
          onClick={handleTryAgain}
          className={`w-32 px-4 py-2 text-white transition duration-300 bg-orange-500 rounded sm:w-auto hover:bg-orange-600 ${
            isReloading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isReloading}
        >
          {isReloading ? <HashLoader size={20} color="#ffffff" /> : "Try Again"}
        </button>
        <button
          onClick={handleGoHome}
          className="w-32 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded sm:w-auto hover:bg-gray-600"
        >
          Go Home
        </button>
      </ButtonGroup>
    </ErrorContainer>
  );
};

export default function GlobalError({ error, reset }) {
  return <ErrorPage error={error} reset={reset} />;
}
