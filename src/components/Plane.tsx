interface PlaneProps {
  position: [number, number, number];
}

function Plane({ position = [0, -3, 0] }: PlaneProps) {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Plane;
