// save tasks to empty array
var tasks = [];
var currentTime =moment().hour();

// load tasks from local storage
var loadSchedule = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

// save tasks to local storage
var saveSchedule = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// edit p element on click inside scheduler
$('.text-area').on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$('.text-area').on("blur", ".text-area", function() {
    var text = $(this)
    .val()
    .trim();

    var workP = $("<p>")
    .addClass("m-1")
    .text(text);

    $(this).replaceWith(workP);
});

// save task when user clicks button with save id tag
$('.saveBtn').on("click", function() {
    console.log("saved");
    saveSchedule();
});

// change background color of tasks depending on time of day



$(".time-block").each(function() {
    if (currentTime === 9) {
        $("#9").addClass("current");
    }
    else if (currentTime > 9) {
        $("#9").addClass("past");
    }
    else if (currentTime < 9) {
        $("#9").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 10) {
        $("#10").addClass("current");
    }
    else if (currentTime > 10) {
        $("#10").addClass("past");
    }
    else if (currentTime < 10) {
        $("#10").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 11) {
        $("#11").addClass("current");
    }
    else if (currentTime > 11) {
        $("#11").addClass("past");
    }
    else if (currentTime < 11) {
        $("#11").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 12) {
        $("#12").addClass("current");
    }
    else if (currentTime > 12) {
        $("#12").addClass("past");
    }
    else if (currentTime < 12) {
        $("#12").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 1) {
        $("#1").addClass("current");
    }
    else if (currentTime > 1) {
        $("#1").addClass("past");
    }
    else if (currentTime < 1) {
        $("#1").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 2) {
        $("#2").addClass("current");
    }
    else if (currentTime > 2) {
        $("#2").addClass("past");
    }
    else if (currentTime < 2) {
        $("#2").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 3) {
        $("#3").addClass("current");
    }
    else if (currentTime > 3) {
        $("#3").addClass("past");
    }
    else if (currentTime < 3) {
        $("#3").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 4) {
        $("#4").addClass("current");
    }
    else if (currentTime > 4) {
        $("#4").addClass("past");
    }
    else if (currentTime < 4) {
        $("#4").addClass("future");
    }
});

$(".time-block").each(function() {
    if (currentTime === 5) {
        $("#5").addClass("current");
    }
    else if (currentTime > 5) {
        $("#5").addClass("past");
    }
    else if (currentTime < 5) {
        $("#5").addClass("future");
    }
});

 loadSchedule();