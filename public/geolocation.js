let lat, lon
const submitButton = document.getElementById("submit-data")
submitButton.addEventListener("click", async event => {
    const caption = document.getElementById("caption").value
    const data = { lat, lon, caption }
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('/api', options)
    const info = await response.json()
    console.log(info)
})

if ('geolocation' in navigator) {
    console.log("geolocation is available")
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude
        lon = position.coords.longitude
        document.getElementById("latitude").textContent = lat
        document.getElementById("longitude").textContent = lon

    });
} else {
    console.log("geolocation IS NOT available")
} 