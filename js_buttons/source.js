
// Grow button
$('#button1').click(function(){
    $("#box").height("+=10").width("+=20")
})


// Make the BG color blue
$("#button2").click(function(){
    $("#box").css({"background-color":"blue"});
})

// Make it fade
$("#button3").click(function(){
    $("#box").fadeTo("slow",.1);
})
// Reset to Home
$("#button4").click(function(){
    $("#box").css({"height":"150px", "width":"150px", "background-color":"orange", "margin":"25px","opacity":"1","border-radius":"0"})
});

//Move Right
$("#button5").click(function(){
    $("#box").animate({"margin-left" : "+=200"})
});

// Move Left
$("#button6").click(function(){
    $("#box").animate({"margin-left" : "-=200"})
});

$("#button7").click(function(){
    $("#box").css({"border-radius":"65px","background-color":"green"})
});

