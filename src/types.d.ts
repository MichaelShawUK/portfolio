export interface RingType {
  x: number;
  y: number;
  radius: number;
  growthFactor: number;
  colour: string;
  opacity: string;
  draw(): void;
  update(): void;
}

export interface CanvasProps {
  colour: string;
  opacity: string;
  growthFactor: number;
}

export interface CanvasControlsProps {
  setColour: React.Dispatch<React.SetStateAction<string>>;
  setOpacity: React.Dispatch<React.SetStateAction<string>>;
  setGrowthFactor: React.Dispatch<React.SetStateAction<number>>;
  setKey: React.Dispatch<React.SetStateAction<number>>;
}
