import "./css/App.css";
import Canvas from "./components/Canvas";
import Profile from "./components/Profile";
import { useEffect, useRef, useState } from "react";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const threshold = [];

    for (let i = 0; i <= 1; i += 0.01) threshold.push(i);

    const options = {
      threshold,
    };
    let prevRatio = 0;

    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) console.log("entering");
        else console.log("leaving");
        prevRatio = entry.intersectionRatio;
        setOpacity(entry.intersectionRatio);
      });
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(div);
  }, []);

  return (
    <>
      <Canvas />
      <Profile />
      <div
        ref={divRef}
        style={{
          height: "100vh",
          background: `linear-gradient(45deg, #4c516e ${
            (opacity + 0.01) * 100
          }%, rgb(0,0,50))`,
        }}
      >
        hello
      </div>
    </>
  );
}

export default App;
