import day_clear from './weather-icons/day_clear.png'
import day_partial_cloud from './weather-icons/day_partial_cloud.png'
import day_rain from './weather-icons/day_rain.png'
import day_rain_thunder from './weather-icons/day_rain_thunder.png'
import angry_clouds from './weather-icons/angry_clouds.png'
import overcast from './weather-icons/overcast.png'
import rain from './weather-icons/rain.png'
import rain_thunder from './weather-icons/rain_thunder.png'
import night_full_moon_clear from './weather-icons/night_full_moon_clear.png'

var Icons_code = 
[
    {
        code: 1000,
        img: day_clear,
        txt: "dia limpo"
    },
    {
        code: 1003,
        img: day_partial_cloud,
        txt: "parcialmente nublado"
    },
    {
        code: 1006,
        img: angry_clouds,
        txt: "nublado"
    },
    {
        code: 1009,
        img: overcast,
        txt: "encoberto"
    },
    {
        code: 1030,
        img: day_partial_cloud,
        txt: "parcialmente nublado"
    },
    {
        code: 1063,
        img: day_rain,
        txt: "Garoa"
    },

    {
        code: 1087,
        img: day_rain_thunder,
        txt: "Possiveis focos de tempestade"
    },
    {
        code: 1153,
        img: day_rain,
        txt: "Garoa fina"
    },
    {
        code: 1183,
        img: day_rain,
        txt: "chuva moderada"
    },
    {
        code: 1186,
        img: day_rain,
        txt: "chuvas moderadas durante o dia"
    },
    {
        code: 1189,
        img: rain,
        txt: "chuvas durante o dia"
    },
    {
        code: 1192,
        img: rain_thunder,
        txt: "chuva forte"
    },
    {
        code: 1198,
        img: rain_thunder,
        txt: ""
    },
    {
        code: 1240,
        img: day_rain,
        txt: "chuva leve"
    },
    {
        code: 1243,
        img: day_rain,
        txt: "chuva torrencial"
    },
    {
        code: 1243,
        img: day_rain,
        txt: "chuva torrencial"
    }

]



function GetIcon(id){
    var icon;
    var fonded = false;
    for (let i = 0; i < Icons_code.length; i++) {
        if(id === Icons_code[i].code){
            icon = Icons_code[i].img;
            fonded = true
        }
    }

    if(!fonded){
        icon = night_full_moon_clear
    }

    return icon
}

export default GetIcon