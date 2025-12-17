import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 3000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 150
      positions[i + 1] = (Math.random() - 0.5) * 150
      positions[i + 2] = (Math.random() - 0.5) * 150

      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        // Cyan
        colors[i] = 0
        colors[i + 1] = 0.96
        colors[i + 2] = 1
      } else if (colorChoice < 0.66) {
        // Purple
        colors[i] = 0.66
        colors[i + 1] = 0.33
        colors[i + 2] = 0.97
      } else {
        // Pink
        colors[i] = 0.93
        colors[i + 1] = 0.28
        colors[i + 2] = 0.6
      }
    }

    return [positions, colors]
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003
      pointsRef.current.rotation.x += 0.0001
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingShapes() {
  const shapesRef = useRef<THREE.Group>(null)
  const shapes = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 50,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      type: Math.floor(Math.random() * 3),
      rotationSpeed: {
        x: Math.random() * 0.01,
        y: Math.random() * 0.01,
      },
      floatSpeed: Math.random() * 0.5 + 0.5,
      floatOffset: Math.random() * Math.PI * 2,
      hue: Math.random() * 0.2 + 0.5,
    }))
  }, [])

  useFrame(({ clock }) => {
    if (shapesRef.current) {
      shapesRef.current.children.forEach((child, i) => {
        const shape = shapes[i]
        child.rotation.x += shape.rotationSpeed.x
        child.rotation.y += shape.rotationSpeed.y
        child.position.y += Math.sin(clock.elapsedTime * shape.floatSpeed + shape.floatOffset) * 0.02
      })
    }
  })

  return (
    <group ref={shapesRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} rotation={shape.rotation}>
          {shape.type === 0 && <icosahedronGeometry args={[1.5, 0]} />}
          {shape.type === 1 && <octahedronGeometry args={[1.5, 0]} />}
          {shape.type === 2 && <tetrahedronGeometry args={[1.5, 0]} />}
          <meshBasicMaterial
            color={new THREE.Color().setHSL(shape.hue, 1, 0.5)}
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

function CameraController() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.02
    camera.position.y += (-mouseRef.current.y * 5 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  // Mouse tracking
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    })
  }

  return null
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <CameraController />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
