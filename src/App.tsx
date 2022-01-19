import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, useScroll } from "@react-three/drei";
import Cubo from "./components/Cubo";
import Piano from "./components/Piano";
function App() {
  return (
    <Canvas shadows={{ type: "BasicShadowMap" }}>
      <pointLight castShadow position={[0, 15, 0]} intensity={1} />
      <ambientLight intensity={1} />
      <OrbitControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
      <Suspense fallback={null}>
        <Cubo args={[3, 3, 3]} position={[0, 0, 0]} color="red" />
        <Piano position={[0, -3, 0]} color="blue" />
      </Suspense>
    </Canvas>
  );
}

export default App;
