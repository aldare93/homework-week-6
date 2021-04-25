$(document).ready(function() {

    $("#searchBtn").click(function() {
        let searchText = $("#city-search").val();
        // appendToSearchHistory(searchText);
        // getWeather(searchText);
        console.log(searchText);
        getWeather(searchText)
        getForecast(searchText)
        getForecast2(searchText)
        getForecast3(searchText)
        getForecast4(searchText)
        getForecast5(searchText)
    })


    function getWeather(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            console.log(`temp: ${res.main.temp}`)
            let card = $(`<div>`).addClass("card-body")
            let name = $(`<h3>`).addClass("card-title").text(res.name)
            let temp = $(`<p>`).addClass("card-text").text(`Temp: ${res.main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.main.humidity} %`)
            let windspeed = $(`<p>`).addClass("card-text").text(`Windspeed: ${res.wind.speed} mph`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.weather[i = 0].description}`)
            card.append(name,temp,humidity,windspeed,description)
            $(`#current-weather`).append(card)
        } ) ;
    }

    function getForecast(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            let card = $(`<div>`).addClass("card-body")
            let date = $(`<h5>`).addClass("card-title").text(res.list[i = 4].dt_txt)
            let tempForecast = $(`<p>`).addClass("card-text").text(`Temp: ${res.list[i = 4].main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.list[i = 4].main.humidity} %`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.list[i = 4].weather[i = 0].description} `)
            card.append(date,tempForecast,humidity,description)
            $(`#forecast-weather`).append(card)
        } ) ;
    }

    function getForecast2(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            let card = $(`<div>`).addClass("card-body")
            let date = $(`<h5>`).addClass("card-title").text(res.list[i = 12].dt_txt)
            let tempForecast = $(`<p>`).addClass("card-text").text(`Temp: ${res.list[i = 12].main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.list[i = 12].main.humidity} %`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.list[i = 12].weather[i = 0].description} `)
            card.append(date,tempForecast,humidity,description)
            $(`#forecast-weather2`).append(card)
        } ) ;
    }

    function getForecast3(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            let card = $(`<div>`).addClass("card-body")
            let date = $(`<h5>`).addClass("card-title").text(res.list[i = 20].dt_txt)
            let tempForecast = $(`<p>`).addClass("card-text").text(`Temp: ${res.list[i = 20].main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.list[i = 20].main.humidity} %`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.list[i = 20].weather[i = 0].description} `)
            card.append(date,tempForecast,humidity,description)
            $(`#forecast-weather3`).append(card)
        } ) ;
    }

    function getForecast4(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            let card = $(`<div>`).addClass("card-body")
            let date = $(`<h5>`).addClass("card-title").text(res.list[i = 28].dt_txt)
            let tempForecast = $(`<p>`).addClass("card-text").text(`Temp: ${res.list[i = 28].main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.list[i = 28].main.humidity} %`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.list[i = 28].weather[i = 0].description} `)
            card.append(date,tempForecast,humidity,description)
            $(`#forecast-weather4`).append(card)
        } ) ;
    }

    function getForecast5(cityName) {
        let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2dfc132280e4d265752823a3d0799b54&units=imperial`;
        fetch(apiURL)
        .then(response => response.json())
        .then(res => {
            let card = $(`<div>`).addClass("card-body")
            let date = $(`<h5>`).addClass("card-title").text(res.list[i = 36].dt_txt)
            let tempForecast = $(`<p>`).addClass("card-text").text(`Temp: ${res.list[i = 36].main.temp} F`)
            let humidity = $(`<p>`).addClass("card-text").text(`Humidity: ${res.list[i = 36].main.humidity} %`)
            let description = $(`<p>`).addClass("card-text").text(`Description: ${res.list[i = 36].weather[i = 0].description} `)
            card.append(date,tempForecast,humidity,description)
            $(`#forecast-weather5`).append(card)
        } ) ;
    }


})