interface PianoProps {
  position: [number, number, number];
}

function Piano({ position = [0, -3, 0] }: PianoProps) {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Piano;
