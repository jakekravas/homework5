displayDate();
getLocalStorageText();

function displayDate(){
    let dateObj = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let year = dateObj.getFullYear();
    let month = months[dateObj.getMonth()];
    let date = dateObj.getDate();
    let day = days[dateObj.getDay()];
    let today = day + ", " + month + " " + date + ", " + year;
    $("#today").text(today);
}

$("#9am-btn").on("click", function(){
    let nineText = $("#9am-text").val();

    // Setting the value of "9AM Text" to nineText
    localStorage.setItem("9AM Text", nineText);
});

$("#10am-btn").on("click", function(){
    let tenText = $("#10am-text").val();

    // Setting the value of "10AM Text" to tenText
    localStorage.setItem("10AM Text", tenText);
});

$("#11am-btn").on("click", function(){
    let elevenText = $("#11am-text").val();

    // Setting the value of "11AM Text" to elevenText
    localStorage.setItem("11AM Text", elevenText);
});

$("#12pm-btn").on("click", function(){
    let twelveText = $("#12pm-text").val();

    // Setting the value of "12PM Text" to twelveText
    localStorage.setItem("12PM Text", twelveText);
});
$("#1pm-btn").on("click", function(){
    let oneText = $("#1pm-text").val();

    // Setting the value of "1PM Text" to oneText
    localStorage.setItem("1PM Text", oneText);
});

$("#2pm-btn").on("click", function(){
    let twoText = $("#2pm-text").val();

    // Setting the value of "2PM Text" to twoText
    localStorage.setItem("2PM Text", twoText);
});

$("#3pm-btn").on("click", function(){
    let threeText = $("#3pm-text").val();

    // Setting the value of "3PM Text" to threeText
    localStorage.setItem("3PM Text", threeText);
});

$("#4pm-btn").on("click", function(){
    let fourText = $("#4pm-text").val();

    // Setting the value of "4PM Text" to fourText
    localStorage.setItem("4PM Text", fourText);
});

$("#5pm-btn").on("click", function(){
    let fiveText = $("#5pm-text").val();

    // Setting the value of "5PM Text" to fiveText
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