import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, useScroll } from "@react-three/drei";
import Cube from "./components/Cube";
import Plane from "./components/Plane";
import { BasicShadowMap } from "three";
function App() {
  return (
    <Canvas shadows={{ type: BasicShadowMap }}>
      <pointLight castShadow position={[0, 15, 0]} intensity={1} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Cube dimensions={[3, 3, 3]} position={[0, 0, 0]} />
        <Plane position={[0, -3, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
