var boujeePics = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDDw4NBC-cvk1onIW8n1kHEKihO9Pzgfh9pnqCQ2YnESRJR9QPg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONC4MuAjXl7mwX1qD0Ve04Lmwv9Uy5j_ODfLoYP5t9kUHXKKD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5o2Mx_JSxLwTV1TM70tMkRmwJDL8Iz6Ns7Di3xh_nGjU_73-D4w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9BZhy-DSx-71flcnTSdbruAY6jgLY5wrjq7FE0wMJQhqA2Adkw"
    ];
var basicPics = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjN9nFdO5U7ZIEOcKJjhfMa6oEFlt9IESn1ABONdQop-e_-2B", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW9ZVWWz2WRmTyRMMrHQQQRZAatXNVJ4iG33aMf8KqbkHi0HF", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_S-EK9twC7V39O3BEEbHuonKd4d5PfVuuNUp1r_JIiaT8KfwZg"
    ];
$("button").click(function() {
    var input = $("input").val();
    console.log(input);
    $(".images").html("");
    if (input === "boujee") {
        bougie();
        $(".options").hide();
        $(".possible").hide();
    } else if (input=== "basic") {
        boring();
        $(".options").hide();
        $(".possible").hide();
    } else{
     alert("Oh my goodness dude. Enter basic or boujee!");   
    }
});

function bougie(){
    changeBackgroundColor("purple");
    console.log("hi");
    changeTextColor("pink");
    displayImage(boujeePics);
    changeButtonColor('purple');
}
function boring(){
    changeBackgroundColor("grey");
    changeTextColor("blue");
    displayImage(basicPics);
    changeButtonColor('black');
}
function changeBackgroundColor(backgroundColor){
    $('body').css('background-color', backgroundColor);
    console.log(backgroundColor);
}
function changeTextColor(color){
    $('body').css('color', color);
}
function displayImage(images){
    $('div').empty();
    images.forEach(function(photos){
        $('div').append("<img src=" + photos + ">");
    });
}
function changeButtonColor(buttton){
$('button').css('color', buttton);
}