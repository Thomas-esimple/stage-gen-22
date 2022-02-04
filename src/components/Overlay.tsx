import React from "react";

interface OverlayProps {
  scroll: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
}

const Overlay = ({ scroll, setScroll }: OverlayProps) => {
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    setScroll(element.scrollTop / (element.scrollHeight - window.innerHeight));
    console.log(scroll.toFixed(2));
  };

  return (
    <div id="info" onScroll={scrollHandler}>
      <h1 style={{ height: "300vh", color: "white" }}>text</h1>
    </div>
  );
};

export default Overlay;
