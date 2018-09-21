	
	$(document).ready(function () {
		$(window).scroll(function () {
			if($(this).scrollTop() > 120){
				$("div.header").addClass("headerEffect");
				$("div.header").css({
					position : "fixed",
					opacity : "1"
				} , 5000)
			}else{
				$("div.header").removeClass("headerEffect");
				$("div.header").css({
					position : "absolute",
					opacity : "1"
				})

			}
		})
	})
	
var 
	content  = document.getElementById("context"),
	message1 = document.getElementById("message1"),
	message2 = document.getElementById("b1"),
	message3 = document.getElementById("b2"),
	message3 = document.getElementById("b3"),
 	message5 = document.getElementById("b5"),
	message6 = document.getElementById("b6"),
	message7 = document.getElementById("b7"),
	message8 = document.getElementById("text");


// Funnction Section //

	message1.onclick = function () {
		content.innerHTML = "We are Teamwork in FCI whose love what they do for giving the best product for admiring their clients Our Logo :\" Learn .... Create....Go Head \"";
	} 
	/*message1.ondblclick = function () {
		content.innerHTML = "Welcome To Designy App";
	}*/

/*function message_A() {whose love what they do for giving the best product for admiring our clients
	alert("Hello My Every Body To My New Website !");
}*/
/*var counterB=0;
function message_B() {
	counterB++;
	alert("You Clicked Me : "+ counterB +" Time" +"\nPhoto 1 expressed about : Hydrangeas flowers");
	if (counterB==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterB>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Hydrangeas flowers";
}
var counterC=0;
function message_C() {
	counterC++;
	alert("You Clicked Me : "+ counterC +" Time" +"\nPhoto 1 expressed about : Jellyfish Fish");
	if (counterC==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterC>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Jellyfish flowers";
}
var counterD=0;
function message_D() {
	counterD++;
	alert("You Clicked Me : "+ counterD +" Time" +"\nPhoto 1 expressed about : Lighthouse flowers");
	if (counterD==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterD>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Lighthouse flowers";
}
var counterE=0;
function message_E() {
	counter++;
	alert("You Clicked Me : "+ counterE +" Time" +"\nPhoto 1 expressed about : Desert flowers");
	if (counterE==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterE>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Desert flowers";
}
var counterF=0;
function message_F() {
	counterF++;
	alert("You Clicked Me : "+ counterF +" Time" +"\nPhoto 1 expressed about : Koala flowers");
	if (counterF==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterF>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Koala flowers";
}
var counterG=0;
function message_G() {
	counterG++;
	alert("You Clicked Me : "+ counterG +" Time" +"\nPhoto 1 expressed about : Penguins flowers");
	if (counterG==3) {
		alert("Thank You, This Article Was Saved In your Favourites !")
	}
	if(counterG>3){
		var x = prompt("How Many Points You want to give me >>")
		if (x>=5) {
			alert("Cher , Congratulation !")
		}
	}
	//message2.InnerHTML = "Photo 1 expressed about : Penguins flowers";
}
function message_H() {
	console.log(" We Will Reply you 'SOON'");
}
*/
