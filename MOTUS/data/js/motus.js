function turn () {
	var a = getWord();
	var b = getPlayedString();
	listPlayedWord(b,checkLetters(a,b));
	setCorrectLetters(correctLetters(a,b));
}

/*function setgame () {

}*/






/***********
word parsing
***********/
/*function lettersOf (word) { 
	//2D array with letters of word number of each
	var out[][];
	for(i=0;i<word.length;i++){

	}
}*/

function correctLetters (word, attempt) {
	var out = "";
	for(i=0;i<word.length;++i){
		if(word[i]==attempt[i]) {
			out = out+word[i];
		} else out = out+'-';
	}
	return out;
}

function checkLetters (word, attempt) {
	var out = "";
	var usedLtrIndexes = new Array;
	for(i=0;i<attempt.length;++i){
		var x = word.indexOf(attempt.charAt(i));
		if(word[i]==attempt[i]) {
			usedLtrIndexes.push(i);
			out = out+'G';
		}
		else if(x==-1) out = out + 'w';
		else {
			if(usedLtrIndexes.indexOf(x)==-1){
				out = out + 'o';
				usedLtrIndexes.push(x);
			} else {
				out = out + 'w';
			}
		}
		console.log(out);
	}
	return out;
}

function listPlayedWord (word, colors) {
	console.log("listing Played Word: "+word+" with code "+colors);
	var reps = window.document.getElementById("reps");
	var outxtelem = window.document.createElement("li");
	
	for(i=0;i<word.length;i++){
		var outltr = window.document.createTextNode(word[i]);
		var outspan = window.document.createElement("span");
		outspan.appendChild(outltr);
		if(colors[i]=='G') outspan.style.backgroundColor = "lightgreen";
		else if(colors[i]=='o') outspan.style.backgroundColor = "yellow";
		console.log(outspan);
		outxtelem.appendChild(outspan);
	}

	reps.appendChild(outxtelem);

}


/*****************
basic getfunctions
*****************/
function getPlayedString () {
	return window.document.getElementById("usrin").value;
}
function getWord () {
	return window.document.getElementById("word").value;
}

/*****************
basic setfunctions
*****************/
function setCorrectLetters (ltrs){
	window.document.getElementById("usrin").value = ltrs;
}