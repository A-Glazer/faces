function setup() {
    let lat, lon;
    const webcamButton = document.getElementById('webcam');
    const drawButton = document.getElementById('draw');
    const button = document.getElementById('submit');
    webcamButton.addEventListener("click", addWebcam)
    drawButton.addEventListener("click", addDraw)



    if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat, lon);
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = lon;
        });
    } else {
        console.log('geolocation not available');
    }


    function addWebcam() {
        noCanvas();
        const video = createCapture(VIDEO);
        video.size(160, 120);
        button.addEventListener('click', async event => {
            const caption = document.getElementById('caption').value;
            video.loadPixels();
            const image64 = video.canvas.toDataURL();
            const data = { lat, lon, caption, image64 };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);
        });
    }

    function addDraw() {
        const canvas = createCanvas(160, 120);
        pixelDensity(1);
        background(0);

        button.addEventListener('click', async event => {
            const caption = document.getElementById('caption').value;
            canvas.loadPixels();
            const image64 = canvas.elt.toDataURL();
            const data = { lat, lon, caption, image64 };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);
        });

        function keyPressed() {
            if (key == 'c') {
                background(0);
            }
        }

        function draw() {
            stroke(255);
            strokeWeight(8);
            if (mouseIsPressed) {
                line(pmouseX, pmouseY, mouseX, mouseY);
            }
        }
    }

}

