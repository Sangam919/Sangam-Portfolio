import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Data Pipeline & Streaming Flow Visualization ───
function StreamingDataMesh({ scrollProgress, mouse }) {
  const meshGroupRef = useRef();
  const streamsRef = useRef();
  const nodesRef = useRef();
  const packetsRef = useRef();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const streamCount = isMobile ? 18 : 36;
  const nodeCount = isMobile ? 35 : 70;
  const packetCount = isMobile ? 25 : 60;

  // Generate grid nodes distributed across depth
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < nodeCount; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 8 - 1,
        vx: (Math.random() - 0.5) * 0.003,
        vy: (Math.random() - 0.5) * 0.003,
        size: Math.random() * 0.05 + 0.02,
        color: i % 4 === 0 ? '#22d3ee' : i % 4 === 1 ? '#3b82f6' : i % 4 === 2 ? '#8b5cf6' : '#10b981',
      });
    }
    return arr;
  }, [nodeCount]);

  // Generate vertical & diagonal pipeline stream paths
  const streamPaths = useMemo(() => {
    const lines = [];
    for (let i = 0; i < streamCount; i++) {
      const x = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 6 - 2;
      const pts = [
        new THREE.Vector3(x, 8, z),
        new THREE.Vector3(x + (Math.random() - 0.5) * 2, 0, z),
        new THREE.Vector3(x + (Math.random() - 0.5) * 2, -8, z),
      ];
      const curve = new THREE.CatmullRomCurve3(pts);
      const points = curve.getPoints(30);
      lines.push(new THREE.BufferGeometry().setFromPoints(points));
    }
    return lines;
  }, [streamCount]);

  // Data packets traveling along pipeline
  const packetData = useMemo(() => {
    const pos = new Float32Array(packetCount * 3);
    const speeds = new Float32Array(packetCount);
    for (let i = 0; i < packetCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      speeds[i] = Math.random() * 0.03 + 0.015;
    }
    return { pos, speeds };
  }, [packetCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshGroupRef.current) {
      // Gentle sway reacting to mouse & scroll
      const targetRotY = mouse.x * 0.12 + Math.sin(t * 0.1) * 0.05;
      const targetRotX = -mouse.y * 0.1 + Math.cos(t * 0.12) * 0.05;
      meshGroupRef.current.rotation.y = THREE.MathUtils.lerp(meshGroupRef.current.rotation.y, targetRotY, 0.05);
      meshGroupRef.current.rotation.x = THREE.MathUtils.lerp(meshGroupRef.current.rotation.x, targetRotX, 0.05);

      // Smooth vertical shift based on scroll progress
      const targetY = (scrollProgress - 0.5) * 3;
      meshGroupRef.current.position.y = THREE.MathUtils.lerp(meshGroupRef.current.position.y, targetY, 0.05);
    }

    // Animate streaming data packets traveling downwards
    if (packetsRef.current) {
      const positions = packetsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < packetCount; i++) {
        positions[i * 3 + 1] -= packetData.speeds[i];
        if (positions[i * 3 + 1] < -8) {
          positions[i * 3 + 1] = 8;
          positions[i * 3] = (Math.random() - 0.5) * 14;
        }
      }
      packetsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={meshGroupRef}>
      {/* Pipeline stream guide lines */}
      {streamPaths.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color={i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#8b5cf6' : '#3b82f6'}
            transparent
            opacity={0.09}
          />
        </line>
      ))}

      {/* Floating distributed data nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={[node.x, node.y, node.z]}>
            <sphereGeometry args={[node.size, 8, 8]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.65}
            />
          </mesh>
        ))}
      </group>

      {/* Streaming data packets */}
      <points ref={packetsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={packetCount}
            array={packetData.pos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#22d3ee"
          size={isMobile ? 0.06 : 0.08}
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Ambient background data horizon ring */}
      <mesh position={[0, -4, -4]} rotation={[-Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[4, 9, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

// ─── Mouse tracker ───
function MouseTracker({ onMouseMove }) {
  const { viewport } = useThree();
  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      onMouseMove({ x, y });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [onMouseMove, viewport]);
  return null;
}

// ─── Main DataCore Component ───
export default function DataCore({ scrollProgress = 0 }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
      frameloop={isMobile ? 'demand' : 'always'}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
    >
      <MouseTracker onMouseMove={setMouse} />
      <StreamingDataMesh scrollProgress={scrollProgress} mouse={mouse} />
    </Canvas>
  );
}
