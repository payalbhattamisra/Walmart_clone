import {
    Environment,
    RenderTexture,
    CameraControls
  } from "@react-three/drei";
  import { useThree } from "@react-three/fiber";
  import { useControls } from "leva";
  import { useEffect, useRef } from "react";
  import { Scene } from "./Scene";
  
  const house = {
    path: "models/sofa_chair.glb",
    mainColor: "#c0ffe1",
  };
  
  const CameraHandler = ({ slideDistance }) => {
    const cameraControls = useRef();
    const { dollyDistance } = useControls({
      dollyDistance: {
        value: 10,
        min: 0,
        max: 50,
      },
    });
  
    const setInitialCameraPosition = () => {
      if (cameraControls.current) {
        cameraControls.current.setLookAt(
          0, 0, 5,
          0, 0, 0,
          true
        );
      }
    };
  
    useEffect(() => {
      setInitialCameraPosition();
    }, []);
  
    return (
      <CameraControls
        ref={cameraControls}
        touches={{ one: 0, two: 0, three: 0 }}
        mouseButtons={{ left: 0, middle: 0, right: 0 }}
      />
    );
  };
  
  export const Experience = () => {
    const viewport = useThree((state) => state.viewport);
    const { slideDistance } = useControls({
      slideDistance: {
        value: 1,
        min: 0,
        max: 10,
      },
    });
  
    return (
      <>
        <ambientLight intensity={0.2} />
        <Environment preset="sunset" />
        <CameraHandler slideDistance={slideDistance} />
        
        <group>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} />
            <meshBasicMaterial toneMapped={false}>
              <RenderTexture attach="map">
                <Scene {...house} />
              </RenderTexture>
            </meshBasicMaterial>
          </mesh>
        </group>
      </>
    );
  };