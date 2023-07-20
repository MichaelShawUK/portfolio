import Canvas from "./Canvas";
import CanvasControls from "./CanvasControls";
import { useState } from "react";

const Playarea = () => {
  const [colour, setColour] = useState("255, 0, 255");
  const [opacity, setOpacity] = useState("0.1");
  const [growthFactor, setGrowthFactor] = useState(1.03);
  const [key, setKey] = useState(1);

  return (
    <>
      <Canvas
        colour={colour}
        opacity={opacity}
        growthFactor={growthFactor}
        key={key}
      />
      <CanvasControls
        setColour={setColour}
        setOpacity={setOpacity}
        setGrowthFactor={setGrowthFactor}
        setKey={setKey}
        key={key + 1}
      />
    </>
  );
};

export default Playarea;
