"use client";

import styled from "styled-components";
import { HashLoader } from "react-spinners";

const ArtContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnersRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: -15px; /* Overlapping effect */

  @media (max-width: 640px) {
    gap: 5px;
  }
`;

const Trunk = styled.div`
  width: 20px;
  height: 80px;
  background-color: #8b5e3c; /* Brown color */
  border-radius: 5px;
  margin-top: -10px;

  @media (max-width: 640px) {
    width: 30px;
    height: 60px;
  }
`;

const CustomArt = () => {
  return (
    <ArtContainer>
      {/* Top Leaf Layer */}
      <SpinnersRow>
        <HashLoader size={40} color="#4CAF50" />
      </SpinnersRow>

      <SpinnersRow>
        <HashLoader size={40} color="#4CAF50" />
        <HashLoader size={40} color="#4CAF50" />
      </SpinnersRow>

      <SpinnersRow>
        <HashLoader size={40} color="#4CAF50" />
        <HashLoader size={40} color="#4CAF50" />
        <HashLoader size={40} color="#4CAF50" />
      </SpinnersRow>
      {/* Middle Leaf Layer */}
      <SpinnersRow>
        <HashLoader size={35} color="#4CAF50" />
        <HashLoader size={35} color="#4CAF50" />
        <HashLoader size={35} color="#4CAF50" />
        <HashLoader size={35} color="#4CAF50" />
      </SpinnersRow>
      {/* Bottom Leaf Layer */}
      <SpinnersRow>
        <HashLoader size={30} color="#4CAF50" />
        <HashLoader size={30} color="#4CAF50" />
        <HashLoader size={30} color="#4CAF50" />
        <HashLoader size={30} color="#4CAF50" />
        <HashLoader size={30} color="#4CAF50" />
      </SpinnersRow>
      {/* Trunk */}
      <Trunk />
      <div style={{ height: "10px", backgroundColor: "#228B22", width: "100%" }} />
    </ArtContainer>
  );
};

export default CustomArt;
