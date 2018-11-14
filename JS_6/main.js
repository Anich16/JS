var dateLast = new Date(year, month + 1, 0).getDate(), //find out data of the last day of the month
    days = new Date(year, month, dayLast), // determine the number of days in a month
    dayFirst = new Date(days.getFullYear, days.getMonth, 1).getDate(), // the first day of the month
    dayLast = new Date(daya.getFullYear, days.getMonth, dateLast).getDate(), // the last day of the month
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    calendar = "<tr>";

function drowEmptyItemsStart () { // Draw empty cells before the start of the month
    if (dayFirst != 0) {
        for (var i = 1; i < dayFirst; i++) {
            calendar + = "<td>";
        }
    } else {
        for (var i = 0; i < 6; i++){
            calendar + = "<td>";
        }
    }
}

function drawEmptyItemsEnd () { // Draw empty cells to the end of the table 
    for (var i = 0; i < 7 - dayLast; i++) {
        calendar + = "<td>";
    }
}

