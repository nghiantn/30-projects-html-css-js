const $ = document.querySelector.bind(document)
const search = $('.search')
const city = $('.city')
const country = $('.country')
const time = $('.time')
const value = $('.value')
const shortDesc = $('.short-description')
const visibility = $('.visibility span')
const wind = $('.wind span')
const sun = $('.sun span')
const content = $('.content')
const body = $('body')

async function changeWeather(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=31a4580e983e0181ecb45da6fdc1d1b0`

    let data = await fetch(apiURL).then(res => res.json())

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.className = 'hot'
        if (temp < 20) body.className = 'cold'
    } else {
        content.classList.add('hide')
    }

}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalValue = search.value.trim()
        changeWeather(capitalValue)
    }
})

changeWeather('Hanoi')