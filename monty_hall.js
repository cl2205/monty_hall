var noSwitchStrat = function() {

	var loseCount = 0;
	var winCount = 0;

	function playNoSwitch(numTimes) {
		var correct = Math.floor(Math.random() * 3) + 1;	//1, 2, or 3
		var guess = Math.floor(Math.random() * 3) + 1;
		var losePercent = ((loseCount/1000) * 100).toFixed(0);
		var winPercent = ((winCount/1000) * 100).toFixed(0);

		if (numTimes === 0) {
			return "No Switching Strategy - " + "Wins: " + winPercent + "%, Losses: " + losePercent + "%";
		}

		if (guess === correct) {
			winCount++;
		} else {
			loseCount++;
		}

		return playNoSwitch(numTimes - 1);
	}

	console.log(playNoSwitch(1000));

}();


var switchStrat = function() {

	var arr = [1, 2, 3];
	var loseCount = 0;
	var winCount = 0;


	function playSwitch(numTimes) {
		var correctIndex = Math.floor(Math.random() * 2);
		var guessIndex = Math.floor(Math.random() * 2);
		var losePercent = ((loseCount/1000) * 100).toFixed(0);
		var winPercent = ((winCount/1000) * 100).toFixed(0);

		arr[correctIndex] = "correct";
		arr[guessIndex] = "guess";	// if initial guess = correct, "guess" will overwrite "correct"

		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] === "number") {
				arr[i] = "reveal";	// reveal an incorrect number
				break;
			}
		}

		var switchtoCorrect = false;

		for (var j = 0; j < arr.length; j++) {
			if (arr[j] === "correct") {	// if "correct" still exists in arr, switch to correct and win
				winCount++;
				switchtoCorrect = true;
			}
		}

		if (switchtoCorrect === false) {	//if initital guess = "correct," lose
			loseCount++;
		}
	
		if (numTimes === 0) {
			return "Switching Strategy - " + "Wins: " + winPercent + "%, Losses: " + losePercent + "%";
		}

		return playSwitch(numTimes - 1);
	}

	console.log(playSwitch(1000));

}();
