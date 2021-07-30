let { TAU } = Zdog;
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    dragRotate: true,
    zoom: 10
  });
  
// ---- model ---- //

let head = new Zdog.Shape({
  addTo: illo,
  stroke: 12,
  color: '#464646',
});

let eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2,
    quarters: 2, // semi-circle
    translate: { x: -2, y: 1, z: 4.5 },
    // rotate semi-circle to point up
    rotate: { z: TAU/4 },
    color: '#616161',
    stroke: 0.5,
    // hide when front-side is facing back
    backface: false,
  });

  eye.copy({
    translate: { x: 2, y: 1, z: 4.5 },
  });
// -- animate --- //

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();