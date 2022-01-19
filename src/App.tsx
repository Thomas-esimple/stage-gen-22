import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, useScroll } from "@react-three/drei";
import Cubo from "./components/Cubo";
function App() {
  return (
    <Canvas>
      <OrbitControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
      <Suspense fallback={null}>
        <Cubo args={[3, 3, 3]} position={[0, 0, 0]} color="red" />
      </Suspense>
    </Canvas>
  );
}

export default App;
