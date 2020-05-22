console.log("webcam page")

function setup() {
    // add webcam screen
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(160, 160);

    // add submit button
    const snap = document.createElement('button')
    snap.textContent = "Snap";
    document.body.append(snap);

    let lat, lon;

    snap.addEventListener("click", addCaption)

    function addCaption() {
        console.log("add caption form reached")
        //    <label for="caption">Enter Caption Here:</label>
        //     <input id="caption" value="" />
        //     <button id="submit">Submit</button>

        // <form action="submitForm" name="Add Caption">
        //     <label for="caption">Enter Caption Here:</label>
        //     <input name="caption" id="caption" value="" />
        // </form>

    }
    // const button = document.getElementById('submit');
    snap.addEventListener('click', async event => {


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
}
