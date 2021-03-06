import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface CubeProps {
  dimensions: [number, number, number];
  position: [number, number, number];
}

function Cube({ dimensions = [1, 1, 1], position = [0, 0, 0] }: CubeProps) {
  const boxRef = useRef<Mesh>();

  useFrame(() => {
    if (boxRef.current !== undefined) {
      boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh ref={boxRef} castShadow position={position}>
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export default Cube;
