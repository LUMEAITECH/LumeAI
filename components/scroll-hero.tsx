/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useTime, MotionValue } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from 'three';

const color = "#FFFFFF";

// const Icosahedron = () => (
//     <mesh rotation-x={0.35}>
//         <icosahedronGeometry args={[1, 0]} />
//         <meshBasicMaterial wireframe color={color} />
//     </mesh>
// );

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    );
};

function Scene({ numStars = 100, scrollYProgress }: { numStars: number, scrollYProgress: any }) {
    const gl = useThree((state: { gl: any; }) => state.gl);

    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [4, 2]);
    const time = useTime();

    useFrame(({ camera }: { camera: any }) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get() * 1.1,
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star key={i} p={progress(0, numStars, i)} />);
    }
    return (
        <>
            {/* <Icosahedron /> */}
            {stars}
        </>
    );
}

export default function ScrollHero({scrollYProgress}: {scrollYProgress: MotionValue<number>}) {
    return (
        <div className="w-full h-screen absolute">
            <Canvas gl={{ antialias: false }}>
                <Scene numStars={50} scrollYProgress={scrollYProgress} />
            </Canvas>
        </div>
    );
}