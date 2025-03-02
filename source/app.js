function updateWatch() {
    let cityName = document.querySelector("#cairo");
    let cityDate = cityName.querySelector(".date");
    let cityTime = cityName.querySelector(".time");
    let cityTimeWatch = moment().tz("African/Cairo");

    cityDate.innerHTML = cityTimeWatch.format("dddd, Do MMMM YYYY");

    cityTime.innerHTML = cityTimeWatch.format("h:mm:ss [<small>]A[</small>]");
}

updateWatch();
setInterval(updateWatch, 1000)