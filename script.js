function playGame(){
	var 1=Rock;
	var 2=Paper;
	var 3=Sissors;
	var computerChoice = document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 4);
	playerChoice = 
	document.getElementByID(computerChoice).Style.display = "none"
}

function playGame(){
	var computerChoice = document.getElementById("play").innerHTML =
Math.floor(Math.random() * 4);
	var Rock="1";
	var Paper="2";
	var Sissors="3";

	playerChoice = 
	document.getElementByID(computerChoice).Style.display = "none"
}

function checkResult(){
	var Rock;
	var Paper;
	var Sissors;
	
	if(playerChoice==computerChoice){
		document.getElementByID("selectionCheck").innerHTML="You Draw";
	{
	else if(playerChoice=Rock && computerChoice==Sissors){
		document.getElementByID("selectionCheck").innerHTML="You Win";
	}
	else if(playerChoice=Rock && computerChoice==Paper){
		document.getElementByID("selectionCheck").innerHTML="You Win";
	}
	else if(playerChoice=Paper && computerChoice==Sissors){
		document.getElementByID("selectionCheck").innerHTML="You Lose";
	}
	else if(playerChoice=Paper && computerChoice==Rock){
		document.getElementByID("selectionCheck").innerHTML="You Win";
	}
	else(){
	}
}
