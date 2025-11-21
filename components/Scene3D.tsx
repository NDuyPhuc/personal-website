import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, TorusKnot } from '@react-three/drei';

// Fix for missing intrinsic elements in TypeScript definition
// Augmenting React's JSX namespace to support R3F elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Also augment global JSX for broader compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const AnimatedShape = () => {
  // Use any to avoid importing Mesh from three directly, fixing the multiple instances warning
  const meshRef = useRef<any>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Gentle rotation
    if (meshRef.current) {
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
        // Floating effect
        meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1.8, 0.6, 128, 32]} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#1f2833"
        attach="material"
        distort={0.4} // Strength, 0 disables the effect (default=1)
        speed={1.5} // Speed (default=1)
        roughness={0.2}
        metalness={0.9}
        emissive="#45A29E"
        emissiveIntensity={0.1}
        wireframe={true}
      />
    </TorusKnot>
  );
};

const FloatingSphere = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => {
    const ref = useRef<any>(null!);
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(ref.current) {
            ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
        }
    });

    return (
        <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
            <meshStandardMaterial color={color} transparent opacity={0.3} roughness={0} metalness={0.5} />
        </Sphere>
    )
}

export const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#66FCF1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        
        <AnimatedShape />
        
        {/* Decorative Spheres representing data points */}
        <FloatingSphere position={[-3, 2, -2]} color="#66FCF1" scale={0.5} />
        <FloatingSphere position={[-2, -2, 0]} color="#FFD700" scale={0.3} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};