getLocalStorageText();

$("#9am-btn").on("click", function(){
    let nineText = $("#9am-text").val();
    localStorage.setItem("9AM Text", nineText);
});

$("#10am-btn").on("click", function(){
    let tenText = $("#10am-text").val();
    localStorage.setItem("10AM Text", tenText);
});

$("#11am-btn").on("click", function(){
    let elevenText = $("#11am-text").val();
    localStorage.setItem("11AM Text", elevenText);
});

$("#12pm-btn").on("click", function(){
    let twelveText = $("#12pm-text").val();
    localStorage.setItem("12PM Text", twelveText);
});
$("#1pm-btn").on("click", function(){
    let oneText = $("#1pm-text").val();
    localStorage.setItem("1PM Text", oneText);
});
$("#2pm-btn").on("click", function(){
    let twoText = $("#2pm-text").val();
    localStorage.setItem("2PM Text", twoText);
});
$("#3pm-btn").on("click", function(){
    let threeText = $("#3pm-text").val();
    localStorage.setItem("3PM Text", threeText);
});
$("#4pm-btn").on("click", function(){
    let fourText = $("#4pm-text").val();
    localStorage.setItem("4PM Text", fourText);
});
$("#5pm-btn").on("click", function(){
    let fiveText = $("#5pm-text").val();
    localStorage.setItem("5PM Text", fiveText);
});

function getLocalStorageText(){
    let savedNineText = localStorage.getItem("9AM Text");
    let savedTenText = localStorage.getItem("10AM Text");
    let savedElevenText = localStorage.getItem("11AM Text");
    let savedTwelveText = localStorage.getItem("12PM Text");
    let savedOneText = localStorage.getItem("1PM Text");
    let savedTwoText = localStorage.getItem("2PM Text");
    let savedThreeText = localStorage.getItem("3PM Text");
    let savedFourText = localStorage.getItem("4PM Text");
    let savedFiveText = localStorage.getItem("5PM Text");
    $("#9am-text").val(savedNineText);
    $("#10am-text").val(savedTenText);
    $("#11am-text").val(savedElevenText);
    $("#12pm-text").val(savedTwelveText);
    $("#1pm-text").val(savedOneText);
    $("#2pm-text").val(savedTwoText);
    $("#3pm-text").val(savedThreeText);
    $("#4pm-text").val(savedFourText);
    $("#5pm-text").val(savedFiveText);
}