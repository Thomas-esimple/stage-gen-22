import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Environment, ScrollControls, useScroll } from "@react-three/drei";
import { BasicShadowMap } from "three";
import Model from "./components/Model";
import Overlay from "./components/Overlay";

function App() {
  //const [scroll, setScroll] = useState(0);
  const scroll = useRef<number>(0);

  return (
    <>
      <Canvas shadows={{ type: BasicShadowMap }}>
        <ambientLight intensity={1} />
        <spotLight angle={0.14} position={[25, 50, -20]} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay scroll={scroll} />
    </>
  );
}

export default App;
