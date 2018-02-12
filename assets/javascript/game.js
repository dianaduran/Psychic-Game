


var win=0;
var loss=0;
var guessL=9;

var letter=getLetter(); //get the letter ramdom
var key = "";



//function when start the key
function textonly(e){

var code;

if (!e) var e = window.event; // get letter press
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);

    var AllowRegex  = /^[\ba-zA-Z\s-]$/;
    if (AllowRegex.test(character)) {
    	myFunction(character);
    	return true;
    	}     
    return false; 
}



function myFunction(ch) {

key = ch.toLowerCase(); // get letter press


if(guessL==0)
	 {
	 	document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+ loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+9;

		document.getElementById("idGuess").innerHTML = " ";
		guessL=9;
		validate(); // go to function to validate
			
	}
	else validate(); // go to function to validate
}


//function validate if the letter is correct
function validate(){


	if(key==letter) //ask if the letters are ==
	{
		guessL--;
		win++;
		document.getElementById("idBody").classList.remove("opa");
		document.getElementById("idWin").innerHTML="Wins: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+ loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+ guessL;
		letter=getLetter();
		document.getElementById("idGuess").value = "";
		

	}
	 else if(key!==letter && guessL==1) // ask if the letter aren't == and don't have guessL
	 {
	 	loss++;
	 	guessL--;
		document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+guessL;
		letter=getLetter();
		document.getElementById("idGuess").value = "";
		guessL=9
	 }	

	else if(key!==letter && guessL>0) //// ask if the letter aren't == and have guessL
	{
		guessL--;
		document.getElementById("idBody").classList.add("opa");
		document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+guessL;
		
	}

}


//fuction get letter
function getLetter(){
	

  var letter="abcdefghijklmnopqrstuvwxyz"; 
  var word="";

  for (var i = 0; i <=1; i++) //loop to do the word
  {
   word=letter.charAt(Math.floor(Math.random() * letter.length)); // charAt(position), floor(round), random(values random)
  }
  //console.log(word);
  return word;
 }







