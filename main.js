import * as THREE from './libs/three.module.js';
import { VRButton } from './libs/VRButton.js';
import ForceGraph3D from './libs/3d-force-graph.module.js';

import { scene, camera, renderer } from './sceneSetup.js';
import graphData from './graphData.js';

document.body.appendChild(VRButton.createButton(renderer));

const container = document.createElement('div'); // dummy container
const Graph = ForceGraph3D({ renderer, extraRenderers: [] })(container)
  .graphData(graphData)
  .nodeAutoColorBy('group')
  .enableNodeDrag(false);

scene.add(Graph.scene());

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
