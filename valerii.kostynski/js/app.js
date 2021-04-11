"use strict";

const myCircle = document.getElementById('circle');
const inputNumber = document.getElementById('inputNumber');
const radiusMyCircle = myCircle.attributes.r.value;
const circumference = 2 * Math.PI * radiusMyCircle;

myCircle.style.strokeDasharray = ` ${circumference}` * 10;

inputNumber.addEventListener('change', () => setProgress(inputNumber.value));

function setProgress(perecent) {
	var offset = (circumference - perecent / 100 * circumference) * 10;
	myCircle.style.strokeDashoffset = offset;
}
