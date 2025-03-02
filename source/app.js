function updateWatch() {
    let cityName = document.querySelector("#cairo");
    let cityDate = cityName.querySelector(".date");
    let cityTime = cityName.querySelector(".time");
    let cityTimeWatch = moment().tz("African/Cairo");

    cityDate.innerHTML = cityTimeWatch.format("dddd, Do MMMM YYYY");

    cityTime.innerHTML = cityTimeWatch.format("h:mm:ss [<small>]A[</small>]");
}



function updateCities(event) {
    let cityTimezone = event.target.value;
    let cityNameEle = cityTimezone.replace("_", " ").split("/")[1];
    let cityWatch = moment().tz(cityTimezone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML =`
       <div class="city">
             <div>
               <h2>${cityNameEle}</h2>
             <div class="date">${cityWatch.format("dddd, Do MMMM YYYY")}</div>
             </div>
            <div class="time">${cityWatch.format("h:mm:ss")}<small>${cityWatch.format("A")}</small></div>
       </div>
      </div>`;

}
updateWatch();
setInterval(updateWatch, 1000);  

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCities)