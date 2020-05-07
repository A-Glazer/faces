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
    getData(info)
})

async function getData() {
    const response = await fetch('/api')
    const data = await response.json()

    for (item of data) {
        const root = document.createElement("div")
        const caption = document.createElement("div")
        const geo = document.createElement("div")
        const date = document.createElement("div")

        caption.textContent = `caption: ${item.caption}`
        geo.textContent = `${item.lat}°, ${item.lon}°`
        const dateString = new Date(item.timestamp).toLocaleString()
        date.textContent = dateString

        root.append(caption, geo, date)
        document.body.append(root)
    }
    console.log(data)
}

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