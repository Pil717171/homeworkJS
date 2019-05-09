const wheatherButton = document.querySelector('button');
wheatherButton.addEventListener('click', function (e) {
    getWeather();
});

function getWeather () {
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1d0c020e8d2aef13cd322f60fa7e17a2/53.677835, 23.834723?lang=ru&units=si `;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            renderWeather(JSON.parse(xhr.responseText));
        }
    }
}

function renderWeather (obj) {
    let container = document.querySelector('.weather');
    let weather = obj.daily.data[1];
    let div = document.createElement('div');
    let template = `<p> Завтра в Гродно ${weather.summary}. Скорость ветра составит ${weather.windSpeed} м/с.
    Максимальная температура на протяжении дня ${weather.temperatureMax} градусов по Цельсию, минимальная составит ${weather.temperatureMin} градусов по Цельсию</p> `
    div.innerHTML = template;
    container.appendChild(div);
}







