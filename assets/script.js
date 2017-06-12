var ver1id, ver2id, ver3id, ver4id;
var color = ["black", "white", "blue", "aqua", "silver", "fuchsia", "navy", "orange", "yellow", "red","gray"];
var textDeco = ["none", "underline", "overline", "line-through"];
var fontWeight = ["100", "300", "400", "500", "700", "100", "300", "400", "500", "700"];

$(document).ready(function(){
	$("#about").hide();



// startRefresh();
// function startRefresh() {
// 		setTimeout(startRefresh,100000);




ver1id = Math.floor(Math.random() * 10);
ver2id = Math.floor(Math.random() * 10);
ver3id = Math.floor(Math.random() * 4);
ver4id = Math.floor(Math.random() * 10);


function thisReality(){

	$("#ver1id").text(ver1id);
	$("#ver1").text(color[ver1id]);
	$(".title").css("color", color[ver1id]);

	$("#ver2id").text(ver2id);
	if(ver2id==ver1id){
		ver2id=10;
	}
	$("#ver2").text(color[ver2id]);
	$("body").css("background", color[ver2id]);

	$("#ver3id").text(ver3id);
	$("#ver3").text(textDeco[ver3id]);
	$("#reality").css("text-decoration", textDeco[ver3id]);

	$("#ver4id").text(ver4id);
	$("#reality").css("font-weight", fontWeight[ver4id]);
	if(ver4id>4){
		$("#reality").css("font-style", "italic");
		$("#ver4").text(fontWeight[ver4id]+"*");

	}else{
		$("#ver4").text(fontWeight[ver4id]);
	}
}
thisReality();


//}



$( "#reality" ).click(function() {

	$("#reality").text("ABOUT");
	$(".hide").hide();
	$("#about").show();

	$( "#reality" ).click(function() {

	location.reload();

});
});
});