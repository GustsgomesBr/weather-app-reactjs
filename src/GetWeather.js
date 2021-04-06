import moment from 'moment'

function GetWeather(){ 
    var daysAgo = {}
    var weekday = {}
    for(var i=1; i<=7; i++) {
        daysAgo[i] = moment().subtract(i, 'days');
        var Xmas95 = new Date(daysAgo[i]);
        weekday[i] = Xmas95.getDay();
    }
    console.log(weekday)
    return weekday
}

export default GetWeather;