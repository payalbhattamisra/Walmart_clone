import {
    AccumulativeShadows,
    Environment,
    Lightformer,
    OrbitControls,
    PerspectiveCamera,
    Sphere,
    useGLTF,
  } from "@react-three/drei";
  import * as THREE from "three";
  import React, { useEffect } from "react";
  import { DEG2RAD } from "three/src/math/MathUtils";
  
  export const Scene = ({ mainColor, path, ...props }) => {
    const { nodes, materials, scene } = useGLTF(path);
  
    useEffect(() => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = true;
        }
      });
    });
    const ratioScale = Math.min(2, Math.max(50, window.innerWidth / 1920));
  
    return (
      <>
        <color attach="background" args={["#ffffff"]} />
        <group {...props} dispose={null}>
          <PerspectiveCamera makeDefault position={[3, 3, 18]} near={0.5} />
          <OrbitControls
            autoRotate
            enablePan={false}
            maxPolarAngle={DEG2RAD * 75}
            minDistance={6}
            maxDistance={10}
            autoRotateSpeed={0.5}
          />
          <primitive object={scene} scale={ratioScale * 0.9} /> {/* Adjust scale */}
  
          <ambientLight intensity={0.1} color="white" />
          <AccumulativeShadows
            frames={100}
            alphaTest={0.9}
            scale={30}
            position={[0, -0.005, 0]}
            color="pink"
            opacity={0.8}
          >
            <directionalLight
              position={[5, 5, 5]}             
              intensity={0.5} // Reduce intensity
              color="white"
              castShadow
            />
            <directionalLight
              position={[-5, -5, -5]} // Adjust position
              intensity={0.3} // Reduce intensity
              color="white"
            />
  
          </AccumulativeShadows>
          <Environment file={"./spree_bank_1k.hdr"} blur={0.8} background>
            <Sphere scale={15}>
              <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
            </Sphere>
            <Lightformer
            position={[5, 0, -5]}
            form="rect"
            intensity={0.8} 
            color="#FFB347" 
            scale={[3, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[-5, 0, 1]}
            form="circle"
            intensity={0.5} 
            color="#87CEEB"
            scale={[2, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 5, -2]}
            form="ring"
            intensity={0.3} 
            color="#FFFFFF"
            scale={[10, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 0, 5]}
            form="rect"
            intensity={0.4} 
            color="#FFD700"
            scale={[10, 5]}
            target={[0, 0, 0]}
          />
  
  </Environment>
        </group>
      </>
    );
  };
  
  useGLTF.preload("/models/sofa_chair.glb");