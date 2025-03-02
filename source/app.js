function updateWatch() {
    let cityName = document.querySelector("#cairo");
    let cityDate = cityName.querySelector(".date");
    let cityTime = cityName.querySelector(".time");
    let cityTimeWatch = moment().tz("Africa/Cairo");

    cityDate.innerHTML = cityTimeWatch.format("dddd, Do MMMM YYYY");

    cityTime.innerHTML = cityTimeWatch.format("h:mm:ss [<small>]A[</small>]");


    let cityNameCT = document.querySelector("#capetown");
    let cityDateCT = cityNameCT.querySelector(".date");
    let cityTimeCT = cityNameCT.querySelector(".time");
    let cityTimeWatchCT = moment().tz("Africa/Johannesburg");

    cityDateCT.innerHTML = cityTimeWatchCT.format("dddd, Do MMMM YYYY");

    cityTimeCT.innerHTML = cityTimeWatchCT.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let cityNameManila = document.querySelector("#manila");
    let cityDateManila = cityNameManila.querySelector(".date");
    let cityTimeManila = cityNameManila.querySelector(".time");
    let cityTimeWatchManila = moment().tz("Asia/Manila");

    cityDateManila.innerHTML = cityTimeWatchManila.format("dddd, Do MMMM YYYY");

    cityTimeManila.innerHTML = cityTimeWatchManila.format("h:mm:ss [<small>]A[</small>]");
}



function updateCities(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess();
    }
    let cityNameEle = cityTimezone.replace("_", " ").split("/")[1];
    let cityWatch = moment().tz(cityTimezone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML =`
       <div class="city">
             <div>
               <h2>${cityNameEle}</h2>
             <div class="date">${cityWatch.format("dddd, Do MMMM YYYY")}</div>
             </div>
            <div class="time">${cityWatch.format("h:mm:ss ")}<small>${cityWatch.format("A")}</small></div>
       </div>
      </div>
      <a href="index.html">Back to cities</a>`;

}
updateWatch();
setInterval(updateWatch, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCities)