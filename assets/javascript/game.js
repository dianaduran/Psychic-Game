
//alert("stoy");

var win=0;
var loss=0;
var guessL=9;

var letter=getLetter();
var key = "";

function myFunction(event) {

key = event.key;
document.getElementById("idGuess").innerHTML = key;



 
 if(guessL==0)
	 {
	 	document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+ loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+9;

		document.getElementById("idGuess").innerHTML = " ";
		guessL=9;
		validate();
		//document.getElementById("idGameOver").innerHTML="Game Over";

		
	 	//document.getElementById("idGuess").disabled = true;	
		
	}
	else validate();
}



function validate(){
//debugger;

	if(key==letter)
	{
		guessL--;
		win++;
		document.getElementById("idWin").innerHTML="Wins: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+ loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+ guessL;
		letter=getLetter();
		document.getElementById("idGuess").value = "";

	}
	 else if(key!==letter && guessL==1){

	 	loss++;
	 	guessL--;
		document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+guessL;
		letter=getLetter();
		document.getElementById("idGuess").value = "";
		guessL=9
	 }	

	else if(key!==letter && guessL>0) {
		guessL--;
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







