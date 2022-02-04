import React, { useState } from "react";

interface OverlayProps {
  scroll: React.MutableRefObject<number>;
  //setScroll: React.Dispatch<React.SetStateAction<number>>;
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
      <div id="scroller"></div>
      <h1 style={{ color: "white" }}>{scrollValue}</h1>
    </div>
  );
};

export default Overlay;
