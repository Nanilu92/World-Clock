function updateTime() {
  let JoziElement = document.querySelector("#Jozi");
  if (JoziElement) {
    let JoziDateElement = JoziElement.querySelector(".date");
    let JoziTimeElement = JoziElement.querySelector(".time");
    let JoziTime = moment().tz("Africa/Johannesburg");

    JoziDateElement.innerHTML = JoziTime.format("MMMM	Do YYYY");
    JoziTimeElement.innerHTML = JoziTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let MthathaElement = document.querySelector("#Mthatha");
  if (MthathaElement) {
    let MthathaDateElement = MthathaElement.querySelector(".date");
    let MthathaTimeElement = MthathaElement.querySelector(".time");
    let MthathaTime = moment().tz("Africa/Mthatha");

    MthathaDateElement.innerHTML = MthathaTime.format("MMMM	Do YYYY");
    MthathaTimeElement.innerHTML = MthathaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let KumasiElement = document.querySelector("#Kumasi");
  if (KumasiElement) {
    let KumasiDateElement = KumasiElement.querySelector(".date");
    let KumasiTimeElement = KumasiElement.querySelector(".time");
    let KumasiTime = moment().tz("Africa/Kumasi");

    KumasiDateElement.innerHTML = KumasiTime.format("MMMM	Do YYYY");
    KumasiTimeElement.innerHTML = KumasiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
