"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import CustomArt from "@components/CustomArt";

const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const ErrorPage = () => {
  const router = useRouter();

  const handleTryAgain = () => {
    // Option 1: Refresh the current route's data
    router.refresh();

    // Option 2: Perform a full page reload
    // window.location.reload();
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
          className="w-32 px-4 py-2 text-white transition duration-300 bg-orange-500 rounded sm:w-auto hover:bg-orange-600"
        >
          Try Again
        </button>
        <button
          onClick={handleGoHome}
          className="w-32 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded sm:w-auto hover:bg-gray-600"
        >
          Go Home
        </button>
      </ButtonGroup>
      <CustomArt />
    </ErrorContainer>
  );
};

export default ErrorPage;
