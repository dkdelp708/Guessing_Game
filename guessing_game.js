var number = '3';
	var guess = prompt("How many times have you traveled outside of the U.S.");
	if (guess === number) {
		alert("That's great, you have definitely taken the time to explore other parts of the world") 
	}
	else {
		if (guess < number) {
			alert("You should try and take some time off and vacation somewhere you would like to explore")
			alert("Try checking out this website: http://travel.usnews.com/Rankings/Worlds_Best_Vacations/")
		}
		if (guess > number) {
			alert ("That is amazing, you have traveled more than most.")
		}
	}
	alert("Traveling is amazing, we all are busy, but you have to make time!")
	