import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";

import s from "./Footer.module.scss";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Footer() {
  const model = useLoader(GLTFLoader, "/model/End/scene.gltf");

  return (
    <div className={s.box}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 0, 5], fov: 25, zoom: 1.7 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight color="white" position={[1, 1, 2]} />
        <directionalLight color="white" position={[-1, 1, -2]} />
        <Loader />
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={1.6}
            minPolarAngle={1.5}
            maxAzimuthAngle={0.3}
            minAzimuthAngle={-0.1}
          />
          <mesh position={[0, -0.3, 0]} rotation={[0.3, -0.9, -0.1]}>
            <primitive object={model.scene} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
