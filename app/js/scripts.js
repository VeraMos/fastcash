$(document).ready(function () {

$("#range").slider({
range: "min",
max: 80000,
min: 1000,
value: 30,
slide: function(e, ui) {
$("#currentVal").html(ui.value);
}
});
});

$(document).ready(function () {

$("#range-new").slider({
range: "min",
max: 30,
min: 5,
value: 1,
slide: function(e, ui) {
$("#currentVal-new").html(ui.value);
}
});
});

  
