

async function GetWeather(city, country){
    const data;
    try{
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=fdb83cfc5a88467a804225243210504&q=${city},${country}&aqi=no`)
        data = await result.json();
    }catch(error){
        console.error(error)
    }

    return data
}

export default GetWeather;