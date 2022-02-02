import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, ScrollControls, useScroll } from "@react-three/drei";
import Model from "./components/Model";
import { BasicShadowMap } from "three";

function App() {
  return (
    <Canvas shadows={{ type: BasicShadowMap }}>
      <ambientLight intensity={1} />
      <spotLight angle={0.14} position={[25, 50, -20]} />
      <Suspense fallback={null}>
        <ScrollControls>
          <Model />
          <Environment preset="city" />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}

export default App;
