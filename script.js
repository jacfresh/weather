let city = "default city"
let key = "6c93a1de048a4d108b001259232007"
//let requestUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`//
console.log(requestUrl)

const inputbox= document.querySelector("#textInput")
const citydisplay= document.querySelector("#cityName")
const tempdisplay = document.querySelector("#temp")
const button = document.querySelector("#submitButton")

button.addEventListener("click",()=>{
    city=inputbox.value
    let requestUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
    axios.get(requestUrl)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
})