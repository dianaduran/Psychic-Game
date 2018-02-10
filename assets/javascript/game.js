


var win=0;
var loss=0;
var guessL=9;

var letter=getLetter(); //get the letter ramdom
var key = "";

//function when start the key
function myFunction(event) {

key = event.key; // get letter press
document.getElementById("idGuess").innerHTML = key;



 
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
  console.log(word);
  return word;
 }







