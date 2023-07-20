import { styled } from "styled-components";

const StyledCanvasControls = styled.div`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  gap: 0.5rem;
  padding: 1rem;

  position: absolute;
  top: 0;

  input {
    cursor: pointer;
  }

  button {
    border: none;
    background-color: rgb(0, 117, 255);
    color: white;
    border-radius: 2px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 0.5rem;
    min-height: 1.5rem;

    &:hover {
      background-color: rgb(15, 84, 165);
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .slider {
    display: grid;
  }

  label {
    font-size: 0.7rem;
    color: white;
  }
`;

export default StyledCanvasControls;
