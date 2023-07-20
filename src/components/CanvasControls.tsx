import { CanvasControlsProps } from "../types";

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
    <div>
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
        <button>Swap Colours</button>
      </form>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.15"
        onInput={(e) => {
          if (e.target instanceof HTMLInputElement) {
            props.setOpacity(e.target.value);
          }
        }}
      ></input>
      <input
        type="range"
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
    </div>
  );
};

export default CanvasControls;
