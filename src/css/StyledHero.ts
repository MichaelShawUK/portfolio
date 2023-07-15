import { styled } from "styled-components";

const StyledHero = styled.div`
  height: 100vh;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .firstName {
    width: min-content;
    background-color: white;
    color: black;
    padding: 1.5rem 2rem;
    transform: skewX(-10deg);
    border-radius: 2px;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: 0 0 10px silver;
    animation: drop 2s cubic-bezier(0.6, 0.85, 0.64, 1.57);
  }

  @keyframes drop {
    0% {
      opacity: 0;
      /* transform: translateY(-100px) skewX(-10deg); */
    }
    100% {
      opacity: 1;
      /* transform: skewX(-10deg); */
    }
  }
`;

export default StyledHero;
