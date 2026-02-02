import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';

// Get the canvas element
const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

// Create the Babylon.js engine
const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

// Create the scene
const createScene = (): Scene => {
  const scene = new Scene(engine);

  // Create a free camera and position it
  const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  // Create a hemispheric light
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Create a ground plane
  const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene);

  // Create a box
  const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
  box.position.y = 1;

  // Create a sphere
  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 1.5 }, scene);
  sphere.position = new Vector3(3, 1, 0);

  return scene;
};

// Create the scene
const scene = createScene();

// Run the render loop
engine.runRenderLoop(() => {
  scene.render();
});

// Handle window resize
window.addEventListener('resize', () => {
  engine.resize();
});
