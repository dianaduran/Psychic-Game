
//alert("stoy");

var win=0;
var loss=0;
var guessL=9;

var letter=getLetter();

function myFunction(event) {

var key = event.key;
document.getElementById("idGuess").innerHTML = key;



 
 if(guessL==0)
	 {
		document.getElementById("idWin").innerHTML="Win: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+guessL;

		document.getElementById("idGameOver").innerHTML="Game Over";

		win=0;
		loss=0;
		guessL=9;
		document.getElementById("idGuess").disabled = true;
	}
	else if(key==letter && guessL>0)
	{
		guessL--;
		win++;
		document.getElementById("idWin").innerHTML="Wins: "+ win;
		document.getElementById("idLoss").innerHTML="Loss: "+ loss;
		document.getElementById("idGuessL").innerHTML="Guess Left: "+ guessL;
		letter=getLetter();
	}
	else {
		guessL--;
		loss++;
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







