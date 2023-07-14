import { styled } from "styled-components";

const StyledHero = styled.div`
  background-color: #222;
  color: #fff;
  height: 100vh;

  .unveil {
    height: 100%;
    width: 100%;
    background-color: #333;
    opacity: 0.9;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    animation: unveil 4s ease-in;
    transform-origin: top left;
    animation-fill-mode: forwards;
  }

  .hero-container {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .drop {
    position: absolute;
    background-color: silver;
    display: inline-block;
    border-radius: 50%;
    margin-right: 1rem;
    animation: rainfall linear;
    top: -10px;
    animation-direction: forward;
    animation-iteration-count: infinite;
    box-shadow: 0 0 25px silver;
  }

  @keyframes unveil {
    0% {
      transform: scaleY(100%);
    }

    100% {
      transform: scaleY(0);
    }
  }

  @keyframes rainfall {
    0% {
      opacity: 0;
      transform: translateY(0) translateX(0);
      transform: translateY(0);
    }

    /* 20% {
      opacity: 0;
    } */

    50% {
      opacity: 1;
    }

    /* 80% {
      opacity: 0;
    } */

    100% {
      transform: translateY(600px) translateX(300px);
      transform: translateY(600px);

      opacity: 0;
    }
  }
`;

export default StyledHero;
