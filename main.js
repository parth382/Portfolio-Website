import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#canvas');

// 1. Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Create a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create an Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585' , emissive: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#B4B4B3' , emissive: '#B4B4B3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Create a Light
const light = new THREE.SpotLight( '#006769', 10);
light.position.set( 1, 1, 1);
scene.add(light);

// 5. Create a Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio));
renderer.render(scene, camera);

// 6. Add Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = false;

// 7. Animate the scene
function animate() {
    requestAnimationFrame(animate);
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
}
animate();

// 8. Add Event Listener for Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});










// 1. Create a Scene
const cubescene = new THREE.Scene();
cubescene.background = new THREE.Color('#F0F0F0');

// 2. Add the Camera
const cubecamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
cubecamera.position.z = 5;

// 3. Create and Add a Cube Object
const cubegeometry = new THREE.BoxGeometry(2,0.1,2);
const cubematerial = new THREE.MeshBasicMaterial({ color: '#468585' , emissive: '#468585' });

const cube = new THREE.Mesh(cubegeometry, cubematerial);
cubescene.add(cube);

// 4. Create and Add a Light
const cubelight = new THREE.DirectionalLight(0x9CDBA6, 10);
cubelight.position.set(1, 1, 1);
cubescene.add(cubelight);

// 5. SETUP RENDERER
const cuberenderer = new THREE.WebGLRenderer();
cuberenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(cuberenderer.domElement);

// 6. Animate the scene
function cubeanimate() {
    requestAnimationFrame(cubeanimate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cuberenderer.render(cubescene, cubecamera);
}

cubeanimate();
