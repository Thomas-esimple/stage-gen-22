import React from "react";

interface OverlayProps {
  scroll: React.MutableRefObject<number>;
  //setScroll: React.Dispatch<React.SetStateAction<number>>;
}

const Overlay = ({ scroll }: OverlayProps) => {
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    let offset =
      element.scrollTop / (element.scrollHeight - window.innerHeight);
    scroll.current = parseFloat(offset.toFixed(2));
  };

  return (
    <div id="info" onScroll={scrollHandler}>
      <h1 style={{ height: "300vh", color: "white" }}>text</h1>
    </div>
  );
};

export default Overlay;
