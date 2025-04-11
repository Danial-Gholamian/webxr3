import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import ForceGraph3D from '3d-force-graph';
import { scene, camera, renderer } from './sceneSetup.js';
import graphData from './graphData.js';

document.body.appendChild(VRButton.createButton(renderer));

const container = document.createElement('div'); // dummy
const Graph = ForceGraph3D({ renderer, extraRenderers: [] })(container)
  .graphData(graphData)
  .nodeAutoColorBy('group')
  .enableNodeDrag(false);

scene.add(Graph.scene());

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
