// variaveis
const apiKey = 'f8d93f917d7685ab2268c4296a329c51'
const apiCountryURL = 'https://restcountries.com/v3.1/name/'

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

// funções

const getWeatherData = async city => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${apiKey}&lang=pt-BR`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}

const showWeatherData = city => {
    getWeatherData(city)
}

// eventos
searchBtn.addEventListener('click', e => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})
