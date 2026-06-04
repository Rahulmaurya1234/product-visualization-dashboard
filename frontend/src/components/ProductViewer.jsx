import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function ProductViewer() {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        margin: "20px 0",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[2, 2, 2]}
          intensity={2}
        />

        <Cube />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ProductViewer;