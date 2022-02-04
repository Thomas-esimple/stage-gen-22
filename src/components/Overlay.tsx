import React, { useState } from "react";

interface OverlayProps {
  scroll: React.MutableRefObject<number>;
}

const Overlay = ({ scroll }: OverlayProps) => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    let offset =
      element.scrollTop / (element.scrollHeight - window.innerHeight);
    scroll.current = parseFloat(offset.toFixed(2));
    setScrollValue(scroll.current);
  };

  return (
    <div id="info" onScroll={scrollHandler}>
      <p id="scrollInfo">{scrollValue}</p>
      <div style={{ height: "400vh" }}>
        <div className="dot">
          <h1>start</h1>
          the animation starts here
        </div>
      </div>
      <div style={{ height: "400vh" }}>
        <div className="dot">
          <h1>spheres</h1>
          these are spheres
        </div>
      </div>
      <div style={{ height: "400vh" }}>
        <div className="dot">
          <h1>cone</h1>
          this is a cone
        </div>
      </div>
      <div style={{ height: "400vh" }}>
        <div className="dot">
          <h1>other spheres</h1>
          pink spheres
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1>end</h1>
          the animation ends here
        </div>
      </div>
    </div>
  );
};

export default Overlay;
