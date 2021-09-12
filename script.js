const err = document.getElementById('err');
const name1 = document.getElementById('name');
const para = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const inp = document.getElementById('city');
const btn = document.querySelector('button');
function setData(e) {
    e.preventDefault();
    let city = inp.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f87c1770a52689fac7e165582695e88&units=metric`;
    getData(url);
}

async function getData(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        var data = await response.json();
        var json = JSON.stringify(data);
        var t = JSON.stringify(data.main.temp);
        var h = JSON.stringify(data.main.humidity);
        var p = JSON.stringify(data.main.pressure);
        name1.innerHTML = ("City " + data.name);
        para.innerHTML = ("Temperature " + t + " °C");
        humidity.innerHTML = ("Humidity " + h + " %");
        pressure.innerHTML = ("Pressure " + p + " hPa");
        err.innerHTML = ("");
    }
    else {
        err.innerHTML = ("No Result Found !!");
        name1.innerHTML = ("");
        para.innerHTML = ("");
        humidity.innerHTML = ("");
        pressure.innerHTML = ("");
    }
}

btn.addEventListener('click', setData);