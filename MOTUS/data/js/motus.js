function turn () {
	console.log("turn");
	var a = getWord();
	var b = getPlayedString();
	console.log(lettersOf(a));
	listPlayedWord(b,colourLetters(a,b));
	setCorrectLetters(hint(a,correctLetters(a,b)));
}

/*function setgame () {

}*/






/***********
word parsing
***********/
function lettersOf (word) { 
	var out = new Array(26).fill(0);
	for(i=0;i<word.length;i++){
		index = word.charCodeAt(i)-65;
		out[index]++;
	}
	return out;
}

function correctLetters (word, attempt) {
	var out = "";
	for(i=0;i<word.length;++i){
		if(word[i]==attempt[i]) {
			out = out+word[i];
		} else out = out+'-';
	}
	return out;
}

function remainingLetters (word, attempt) {
	var ltrs = lettersOf(word);
	var corr = correctLetters(word,attempt);
	for(i=0;i<corr.length;i++)
		if(corr[i]!='-') 
			ltrs[corr.charCodeAt(i)-65]--;

	return ltrs;
}

function colourLetters (word, attempt) {
	var out = "";
	var letterlist = remainingLetters(word,attempt);
	console.log(letterlist);
	for(i=0;i<attempt.length;++i){

		if(word[i]==attempt[i]) {
			out = out+'G';
		}
		else if(word.indexOf(attempt.charAt(i))==-1) out = out + 'w';
		else {
			var abcIndex = attempt.charCodeAt(i)-65;
			if(letterlist[abcIndex]!=0){
				console.log("letter availiable");
				letterlist[abcIndex]--;
				out = out +'o';
			} else {
				out = out +'w';
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

function hint (word, stringN) {
	var archiv = getletterarchive();
	var out = "";
	out = out + word.charAt(0);
	if(archiv.length == stringN.length){
		for(i=1;i<stringN.length;i++){
			if(stringN.charAt(i)=="-" && archiv.charAt(i)!="-")
				out = out +	archiv.charAt(i);
			else
				out = out + stringN.charAt(i);
		}
	} else {
		for(i=1;i<stringN.length;i++) {
			out = out + stringN.charAt(i);
		}
	}
	console.log(out);
	return out;
}

/*****************
playCheckFunctions
*****************/
//function checkWord () {
//}

/*****************
basic getfunctions
*****************/
function getPlayedString () {
	return window.document.getElementById("usrin").value;
}
function getWord () {
	return window.document.getElementById("word").value;
}
function getletterarchive () {
	return window.document.getElementById("usrin").placeholder;
}

/*****************
basic setfunctions
*****************/
function setCorrectLetters (ltrs){
	window.document.getElementById("usrin").value = "";
	window.document.getElementById("usrin").placeholder = ltrs;
}