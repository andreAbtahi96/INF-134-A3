//File name: demo.js

import { MyToolkit } from './mytoolkit.js';

// Implement a MyToolkit Button
 var btn = new MyToolkit.Button;

 //set text
 btn.setText("Click Here");

 //move
 btn.move(0,25);

//event handlers
 btn.onMouseOver(function(e){
	  console.log("Button Hover!");
 });

 btn.onMouseOut(function(e){
	console.log("Button Hover Out!");
});
 btn.onMouseDown(function(e){
	console.log("Button Mouse Down!");
});
 btn.onClick(function(e){
	console.log("Button Pressed!");
});
 


// init a checkbox
var checkBox = new MyToolkit.CheckBox;

//expose a custom labelm property to set the text
checkBox.setText("CheckBox");

checkBox.move(10, 5);

//event handlers
checkBox.onMouseOver(function (e) {
	console.log("Checkbox Hover!");
});
checkBox.onMouseOut(function (e) {
	console.log("Checkbox Hover Out!");
});
checkBox.onMouseUp(function (e) {
	console.log("Checkbox Mouse Up!");
});
checkBox.onMouseDown(function (e) {
	console.log("Checkbox Mouse Down!");
});
checkBox.onCheck(function (e) {
	console.log("Checkbox Checked!");
});
checkBox.onUnCheck(function (e) {
	console.log("Checkbox UnChecked!");
});
 

 var progressBar = new MyToolkit.ProgressBar;
 progressBar.move(10,5);
 progressBar.setWidthOfBar(500);
 progressBar.setIncrementBarValue(69);

 var value = progressBar.getIncrementBarValue()
 console.log(value);


//support 2 or more buttons
var setOfRadios = new MyToolkit.RadioButton(5);

//expose text on right of radio 

for (let index = 0; index < 5; index++) {
	setOfRadios.radioSet.setText("Radio",index + 1)	
}

//event handlers
setOfRadios.onMouseOver(function (e) {
	console.log("Radio Hover!");
});
setOfRadios.onMouseOut(function (e) {
	console.log("Radio Hover Out!");
});
setOfRadios.onMouseUp(function (e) {
	console.log("Radio Mouse Up!");
});
setOfRadios.onMouseDown(function (e) {
	console.log("Radio Mouse Down!");
});
setOfRadios.onCheck(function (e) {
	console.log("Radio Checked!");
});
setOfRadios.onUnCheck(function (e) {
	console.log("Radio UnChecked!");
});

 // radio.setText("efe")
 //console.log(radio[0].node.lastChild.lastChild.innerHTML = "r")
 //radio[0].node.lastChild.lastChild.innerHTML = "r"

 
 var textBox = new MyToolkit.TextBox;
 textBox.move(5,5);
 // textBox.setId("king");
 // var text = document.querySelector("king");

 var scroll = new MyToolkit.ScrollBar;
 scroll.move(1,5)

 var text = new MyToolkit.AddAComment;
 text.move(1,40); 

