import StyledHero from "../css/StyledHero";

function rain(): JSX.Element[] {
  const drops = [];
  for (let i = 0; i < 60; i++) {
    const random = Math.max(Math.random(), 0.2);
    drops.push(
      <span
        className="drop"
        key={i}
        style={{
          width: Math.ceil(random * 8).toString() + "px",
          height: Math.ceil(random * 8).toString() + "px",
          left:
            (Math.floor(Math.random() * window.innerWidth) - 10).toString() +
            "px",
          animationDuration: (Math.random() * 4 + 2).toString() + "s",
        }}
      ></span>
    );
  }
  return drops;
}

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-container">{rain()}</div>
      <div className="unveil"></div>
    </StyledHero>
  );
};

export default Hero;
