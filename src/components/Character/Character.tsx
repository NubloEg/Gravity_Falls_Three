import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import {
  CharacterName,
  getCharacter,
} from "../../common/Characters/Characters";
import s from "./Character.module.scss";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Props {
  name: CharacterName;
  index: number;
}

export default function Character({ name, index }: Props) {
  const state = getCharacter(name);
  const model = useLoader(GLTFLoader, state.model);

  return (
    <div
      id={state?.name}
      style={{ backgroundColor: state?.color }}
      className={s.block}
    >
      <div style={{ order: index % 2 === 0 ? 0 : 1 }} className={s.imgBlock}>
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 0, 5], fov: 25, zoom: state.zoom }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight color="white" position={[1, 1, 2]} />
          <directionalLight color="white" position={[-1, 1, -2]} />
          <Suspense fallback={<div>Грузим...</div>}>
            <OrbitControls enablePan={false} enableZoom={false} />
            <mesh position={state.position} rotation={state.rotate}>
              {state?.model && <primitive object={model.scene} />}
            </mesh>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <div className={s.textBlock}>
        <div className={s.center}>
          <div className={s.name}>{state?.name}</div>
          <div className={s.desciption}>{state?.desciption}</div>
        </div>
      </div>
    </div>
  );
}
