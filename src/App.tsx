import './App.css';
import { Canvas } from '@react-three/fiber';
import Cube from './jsModels/Cube';
import Sphere from './jsModels/Sphere';
import Torus from './jsModels/Torus';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Cube position={[-10,0,0]}/>
        <Sphere position={[0,0,0]}/>
        <Torus position={[10,0,0]}/>
      </Suspense>
    </Canvas>
  );
}

export default App;
