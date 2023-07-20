import { CanvasControlsProps } from "../types";
import StyledCanvasControls from "../css/StyledCanvasControls";

function hexToRGB(hex: string): string {
  const channels = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)];

  const hexadecimal = "0123456789abcdef";

  const rgb = channels.map(
    (channel) =>
      hexadecimal.indexOf(channel[0]) * 16 + hexadecimal.indexOf(channel[1])
  );

  return rgb.join(",");
}

const CanvasControls = (props: CanvasControlsProps) => {
  return (
    <StyledCanvasControls>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target instanceof HTMLFormElement) {
            if (e.target[0] instanceof HTMLInputElement) {
              props.setColour(hexToRGB(e.target[0].value));
            }
          }
        }}
      >
        <input type="color" defaultValue="#ff00ff"></input>
        <button>Set Colour</button>
      </form>
      <div className="slider">
        <label htmlFor="brightness">BRIGHTNESS</label>
        <input
          type="range"
          id="brightness"
          min="0.1"
          max="1"
          step="0.15"
          onInput={(e) => {
            if (e.target instanceof HTMLInputElement) {
              props.setOpacity(e.target.value);
            }
          }}
        ></input>
      </div>
      <div className="slider">
        <label htmlFor="speed">SPEED</label>
        <input
          type="range"
          id="speed"
          min="1.01"
          max="1.09"
          step="0.02"
          defaultValue="1.03"
          onInput={(e) => {
            if (e.target instanceof HTMLInputElement) {
              props.setGrowthFactor(+e.target.value);
            }
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          props.setColour("255,0,255");
          props.setOpacity("0.1");
          props.setGrowthFactor(1.03);
          props.setKey(Math.random());
        }}
      >
        RESET
      </button>
    </StyledCanvasControls>
  );
};

export default CanvasControls;
