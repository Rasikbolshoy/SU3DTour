const panorama = new PANOLENS.ImagePanorama('images/outside.jpg');
const panorama2 = new PANOLENS.ImagePanorama('images/floor_1.jpg');
const panorama3 = new PANOLENS.ImagePanorama('images/floor_1_office_101.jpg');
const panorama4 = new PANOLENS.ImagePanorama('images/floor_1_office_102.jpg');
const panorama5 = new PANOLENS.ImagePanorama('images/floor_1_holl.jpg');

let imageContainer = document.querySelector('.image-container');

var infospotPositions = [
  new THREE.Vector3(-1900.06, 30.3, 1.14),
  new THREE.Vector3(430.06, 1.3, -1000.14),
  new THREE.Vector3(-6000.06, 1.3, -4290.14),
  new THREE.Vector3(6000.06, 296.3, -4290.14),
  new THREE.Vector3(-6000.06, 296.3, -4290.14),
];

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

panorama.link(panorama2, infospotPositions[0]);
panorama2.link(panorama3, infospotPositions[1]);
panorama3.link(panorama4, infospotPositions[2]);
panorama4.link(panorama5, infospotPositions[3]);
panorama5.link(panorama, infospotPositions[4]);

viewer.add(panorama, panorama2, panorama3, panorama4, panorama5);
