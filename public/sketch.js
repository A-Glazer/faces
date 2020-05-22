import * as draw from './choices/draw/draw.js'
import * as webcam from './choices/webcam/webcam.js'
   
   const webcamButton = document.getElementById('webcam');
    const drawButton = document.getElementById('draw');
    const button = document.getElementById('submit');
    let box = document.getElementById('box');
    webcamButton.addEventListener("click", webcam)
    drawButton.addEventListener("click", draw)

    // if ('geolocation' in navigator) {
    //     console.log('geolocation available');
    //     navigator.geolocation.getCurrentPosition(position => {
    //         lat = position.coords.latitude;
    //         lon = position.coords.longitude;
    //         console.log(lat, lon);
    //         document.getElementById('latitude').textContent = lat;
    //         document.getElementById('longitude').textContent = lon;
    //     });
    // } else {
    //     console.log('geolocation not available');
    // }


    // function addWebcam() {
    //     noCanvas();
    //     document.getElementById("box").value = createCapture(VIDEO);
    //     // const video = createCapture(VIDEO);
    //     box.size(160, 160);
    //     button.addEventListener('click', async event => {
    //         const caption = document.getElementById('caption').value;
    //         box.loadPixels();
    //         const image64 = box.canvas.toDataURL();
    //         const data = { lat, lon, caption, image64 };
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         };
    //         const response = await fetch('/api', options);
    //         const json = await response.json();
    //         console.log(json);
    //     });
    // }

    // function addDraw() {
    //     document.getElementById("box").value = createCanvas(160, 160);
    //     pixelDensity(1);
    //     background(65);

    //     button.addEventListener('click', async event => {
    //         const caption = document.getElementById('caption').value;
    //         box.loadPixels();
    //         const image64 = box.elt.toDataURL();
    //         const data = { lat, lon, caption, image64 };
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         };
    //         const response = await fetch('/api', options);
    //         const json = await response.json();
    //         console.log(json);
    //     });

    // }
    // function keyPressed() {
    //     if (key == 'c') {
    //         background(0);
    //     }
    // }

    // function draw() {
    //     stroke(255);
    //     strokeWeight(8);
    //     if (mouseIsPressed) {
    //         line(pmouseX, pmouseY, mouseX, mouseY);
    //     }
    // }


