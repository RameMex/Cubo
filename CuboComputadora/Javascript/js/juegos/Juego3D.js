var angX = 0;
var angY = 0;
var sum = 0.2;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 4, 4, 4 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
var loader = new THREE.GLTFLoader();

loader.load( 'html/es.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
scene.add( bus.frame )
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    function checkKey(e) {

        e = e || window.event;
    
        if (e.keyCode == '38') {
            // Arriba
            angX = angX + sum;
        }
        else if (e.keyCode == '40') {
            // Abajo
            angX = angX - sum;
    
        }
        else if (e.keyCode == '37') {
           // Izquierda
           angY = angY - sum;
        }
        else if (e.keyCode == '39') {
           // Derecha
           angY = angY + sum;
        }
    }
    requestAnimationFrame( animate );

	cube.rotation.x += angX;
	cube.rotation.y += angY;
	renderer.render( scene, camera );
};

animate();