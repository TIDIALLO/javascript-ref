class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-files-like');
        this.wind = document.getElementById('w-wind ');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.dewpoint = document.getElementById('w-dewpoint');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
        this.feelslike.textContent = `Feels like: ${weather.feelsLike_string    }`;
        this.humidity.textContent = `DewPoint : ${weather.dewpoint_string}`;
        this.humidity.wind = `Wind : ${weather.wind_string}`;

    }
}