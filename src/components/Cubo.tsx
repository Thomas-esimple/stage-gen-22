interface CuboProps {
  args?: number[];
  position?: Array<number>;
  color: String;
}

function Cubo({ args = [1, 1, 1], position = [0, 0, 0], color }: CuboProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cubo;
