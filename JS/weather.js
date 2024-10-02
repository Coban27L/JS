const API_KEY = "c46024ce0740cd5c27a89701af36582f"


function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.getElementById = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("can't find you. No weather fo you." )
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)