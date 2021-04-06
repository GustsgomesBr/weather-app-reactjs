import moment from 'moment'

function GetLastWeek(){ 
    var daysAgo = {}
    var weekday = {}
    for(var i=1; i<=7; i++) {
        daysAgo[i] = moment().subtract(i, 'days');
        var Xmas95 = new Date(daysAgo[i]);
        weekday[i] = Xmas95.getDay();
    }
    return weekday
}

export default GetLastWeek;