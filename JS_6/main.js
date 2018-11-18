arrowBack = document.getElementById("arrow-back"),
arrowForward = document.getElementById("arrow-forward"),
monthYear = document.getElementById("month-year");

creatCalendar (calendar, new Date().getFullYear(), new Date().getMonth()); // Draw full calendar

function drawEmptyItemsStart (dayFirst, calendar) { // Draw empty cells before the start of the month
    if (dayFirst != 0) {
        for (var i = 1; i < dayFirst; i++) {
            calendar += "<td>";
        }
    } else {
        for (var i = 0; i < 6; i++){
            calendar += "<td>";
        }
    }
    return calendar;
}

function drawEmptyItemsEnd (dayLast, calendar) { // Draw empty cells to the end of the table 
    for (var i = 0; i < 7 - dayLast; i++) {
        calendar += "<td>";
    }
    return calendar;
}

function creatCalendar (id, year, month) {
    var dateLast = new Date(year, month + 1, 0).getDate(), //find out data of the last day of the month
        days = new Date(year, month, dateLast), // determine the number of days in a month
        dayFirst = new Date(days.getFullYear(), days.getMonth(), 1).getDay(), // the first day of the month
        dayLast = new Date(days.getFullYear(), days.getMonth(), dateLast).getDay(), // the last day of the month
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        calendar = "<tr>";

    calendar = drawEmptyItemsStart (dayFirst, calendar);

    for (var i = 1; i <= dateLast; i++) {
        if (i == new Date().getDate() && days.getFullYear() == new Date().getFullYear() && days.getMonth() == new Date().getMonth()) {
            calendar += "<td class='today'>" + i;
        } else {
            calendar += "<td class='day'>" + i;
        }

        if (new Date(days.getFullYear(), days.getMonth(), i).getDay() == 0) {
            calendar += "<tr>";
        }
    }

   calendar = drawEmptyItemsEnd (dayLast, calendar);

   document.getElementById("calendar-body").innerHTML = calendar;
   monthYear.innerHTML = month[days.getMonth()] +' '+ days.getFullYear();
   monthYear.dataset.month = days.getMonth();
   monthYear.dataset.year = days.getFullYear();


}

arrowBack.addEventListener("click", function() {
    creatCalendar(calendar, monthYear.dataset.year, parseFloat(monthYear.dataset.month) - 1);
});

arrowForward.addEventListener("click", function() {
    creatCalendar(calendar, monthYear.dataset.year, parseFloat(monthYear.dataset.month) + 1);
});





