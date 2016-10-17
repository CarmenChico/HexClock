clockOutput1 = document.getElementById("box1");
clockOutput2 = document.getElementById("box2");
clockOutput3 = document.getElementById("box3");

var intervalID = setInterval(function(){updateClock(clockOutput1, clockOutput2, clockOutput3)}, 1000);

function updateClock(clockID1, clockID2, clockID3){
	var clockTime = new Date();
	var stringClock = clockTime.toLocaleTimeString();
	var parsedClock = stringClock.split(" ")[0];
	clockID1.innerHTML = parsedClock;

	if (clockTime.getHours() >12){
		hourTime = clockTime.getHours()- 12;
	} else {
		hourTime = clockTime.getHours();
	}
	hourTime = checkZero(hourTime);
	minTime = checkZero(clockTime.getMinutes());
	secTime = checkZero(clockTime.getSeconds());

	var hexHourTime = hexString(hourTime);
	var hexMinTime = hexString(minTime);
	var hexSecTime = hexString(secTime);

	standardTime=(hourTime+minTime+secTime);
	hexTime = hexHourTime + hexMinTime + hexSecTime;
	clockID2.innerHTML = ("#" + standardTime);
	clockID2.style.background = ("#" + hexTime);


	var totalHexTime = hexString(Math.round(clockTime.getTime()/1000));
	totalHexTime = totalHexTime.slice(totalHexTime.length-6, totalHexTime.length);
	clockID3.innerHTML = totalHexTime;
	console.log("#" +totalHexTime)
	clockID3.style.background = ("#" + totalHexTime);
	// clockID.style.color = ("#" + opHexTime);


}

function checkZero(number){
	if (number<10){
		return ('0'+ number);
	} else {
		return number;
	}
}

function hexString(orgString){
	tempNum = Number(orgString);
	tempString = tempNum.toString(16);
	tempString = tempString.toUpperCase();
	if (tempNum<16){
		return ("0" + tempString);
	} else {
		return tempString;
	}
}
