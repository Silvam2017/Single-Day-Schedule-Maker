var tasks = {};

var loadSchedule = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

var saveSchedule = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

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

$("#save").on("click", function() {
    saveSchedule();
});

loadSchedule();