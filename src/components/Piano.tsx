interface PianoProps {
  position: number[];
  color: String;
}

function Piano({ position = [0, -3, 0], color }: PianoProps) {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Piano;
