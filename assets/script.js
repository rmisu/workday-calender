// show current day and time
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(currentDay);

// format() returns string
var currentHour = parseInt(moment().format("H"));
//save button for user input data in local storage
$(".saveBtn").on("click",function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text)})

    $("#9am .description").val(localStorage.getItem("9am"));
        $("#10am .description").val(localStorage.getItem("10am"));
        $("#11am .description").val(localStorage.getItem("11am"));
        $("#12pm .description").val(localStorage.getItem("12pm"));
        $("#1pm .description").val(localStorage.getItem("1pm"));
        $("#2pm .description").val(localStorage.getItem("2pm"));
        $("3pm .description").val(localStorage.getItem("3pm"));
        $("4pm .description").val(localStorage.getItem("4pm"));
        $("5pm .description").val(localStorage.getItem("5pm"));

var checkHour = function (scheduleItem) {
    var currentTime = moment().hour();
    var scheduleTime = moment().hour(i).format('H');
    console.log(scheduleTime, currentTime);
        
    //if function to apply correct class to depending on time
    if (currentTime > scheduleTime) {
        $(scheduleItem).addClass("past");
        $(scheduleItem).removeClass("future present");
        }
    else if (currentTime === scheduleTime) {
        $(scheduleItem).addClass("present");
        $(scheduleItem).removeClass("past future");
    }
    else {
        $(scheduleItem).addClass("future");
        $(scheduleItem).removeClass("past present");
        }
    }
