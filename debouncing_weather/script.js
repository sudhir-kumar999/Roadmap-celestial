
    const output=document.getElementById("output")

async function callData(){
    try {
        output.innerHTML = "Loading...";
        const city=document.getElementById("city")
        const cityName=city.value 
        const data = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
        const result = await data.json();

        console.log("result", result);
        const latitude=result.results[0].latitude
        const longitude=result.results[0].longitude

        console.log(latitude)
        console.log(longitude)
        let weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    let weatherData=await weatherRes.json();
    console.log(weatherData)
    output.innerHTML = "";
    const para=document.createElement("p")
    para.textContent=`${weatherData.current_weather.temperature}`
    output.appendChild(para)
    

    } catch (error) {
        console.log("Error:", error);
    }
}
function debounce(func , delay){
        let timeout;
        return function(...args){
            clearTimeout(timeout)
            timeout=setTimeout(()=>{
                func.apply(this,args)
            },delay)
        }
    }
const btn=document.getElementById("data")
    const debounced=debounce(callData,5000)

btn.addEventListener("click",debounced)