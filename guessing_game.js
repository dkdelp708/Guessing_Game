var questions = ["How often have you traveled outside US?", 
				 "How often have you traveled to NYC?", 
				 "How often have you been to Washington D.C.?"];

var answers = ['3','1','0'];

var correctResponses = ["That's great, you have definitely taken time to travel outside US", 
						"Glad to hear, NYC is a fun place to check out at least once",
						"Yes, I would not bother, too much crime"];

var incorrectResponses = ["You should make more time to travel",
							"Quit being lame and travel to NYC",
							"Be careful why you are there!"];

var imageArray = ["/images/New_Zealand", "/images/NYC", "/images/Washington_DC"];

for (var i = 0; i <questions.length; i ++) {
	var guess = prompt(questions[i]);
	if (guess === answers[i]) {
		alert(correctResponses[i]); 
		var el = document.getElementById("img"+i);
		console.log(el);
		el.innerHTML = imageArray[i];
	}
	else {
			alert(incorrectResponses[i]);
		var el = document.getElementById("img" +i);
		el.innerHTML = "/images/Frownie_Face";
		}
	};
	
		
	