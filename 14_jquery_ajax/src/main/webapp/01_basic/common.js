$(document).ajaxStart(function () {
	$("body").waitMe({
		effect: "ios",
		text: "처리중입니다.",
		bg: "rgba(255, 255, 255, 0.7)",
		color: "#000"
		});
   })
   .ajaxStop(function () {
	   $("body").waitMe("hide");
   });