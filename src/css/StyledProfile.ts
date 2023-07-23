import { styled } from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  gap: 5rem;
  pointer-events: none;
  min-height: 600px;

  .bold {
    font-weight: bold;
  }

  .image {
    height: 200px;
    width: 200px;
    background-color: rgba(255, 255, 255, 0.7);
    background: linear-gradient(
      30deg,
      rgba(255, 255, 255, 0.1) 1%,
      rgba(255, 255, 255, 0.9)
    );
    border-radius: 50%;
  }
  .info {
    background-color: rgba(255, 255, 255, 0.7);
    /* background: linear-gradient(
      30deg,
      rgba(255, 255, 255, 0.1) 1%,
      rgba(255, 255, 255, 0.9)
    ); */
    height: 150px;
    width: 300px;
    margin-bottom: 50px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    /* box-shadow: 1px 1px 4px #000; */

    .name,
    .title {
      background: linear-gradient(30deg, black 20%, #222 90%, black);
      color: white;
      padding: 0.5rem 1rem;
      /* transform: skew(-10deg); */
      border-radius: 3px;
      text-shadow: 1px 1px #444;
      box-shadow: 1px 1px 4px #444;
    }
  }

  .bio {
    color: white;
    position: absolute;
    bottom: 50px;
    pointer-events: auto;
    cursor: pointer;
    padding: 1rem;
    transition: transform 0.3s;

    &:hover {
      font-weight: bold;
      transform: translateY(-0.5rem);
    }
  }

  .bio::before,
  .bio::after {
    content: "->";
    display: inline-block;
    transform: rotate(90deg);
  }
`;

export default StyledProfile;
