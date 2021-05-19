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

 
 progressBar.setWidthOfBar(100);

//increment by user amount and notify consuming code of change.
 progressBar.setIncrementValue(10);
 progressBar.setIncrementValue(50);
 

console.log("Increment value is: " + progressBar.getIncrementValue().toString());
console.log("Total progress bar value: " + progressBar.getTotalBarValue().toString);




//support 2 or more buttons
var setOfRadios = new MyToolkit.RadioButton(5);

//expose text on right of radio 

// for (let index = 0; index < 5; index++) {

// 	setOfRadios.radioSet.setText("Radio",index + 1)	

// 	//setOfRadios.radioSet.setText("Radio",index + 1)	

// }



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
 
 textBox.mouseDown(function(e){
	 console.log("Text Box pressed down")
 })

 textBox.mouseUp(function(e){
	 console.log("Text Box pressed up")
 })

 textBox.mouseOver(function(e){
	 console.log("Text Box Mouse Over")
 })
 textBox.mouseOut(function(e){
	console.log("Text Box Mouse Out")
})
 textBox.textChange(function(e){
	 console.log("Text changed!");
 })

 



 var scroll = new MyToolkit.ScrollBar;
 scroll.move(1,5)

 var comment = new MyToolkit.AddAComment;
 comment.move(5,40); 

 
 
 comment.mousedown(function(e){
	 console.log("Comment Box pressed down")
 })

 comment.mouseup(function(e){
	 console.log("Comment Box pressed up")
 })

 comment.mouseover(function(e){
	 console.log("Comment Box Mouse Over")
 })
 comment.mouseout(function(e){
	console.log("Comment Box Mouse Out")
})
 comment.textChange(function(e){
	 console.log("Comment changed!");
 })

var toggleSwitch = new MyToolkit.ToggleSwitch;
toggleSwitch.move(5,0);

toggleSwitch.toggleOn(function(e){
	console.log("Toggle is ON!");
})

toggleSwitch.toggleOff(function(e){
	console.log("Toggle is OFF!");
	
})

 // comment.setId("king");
 // var text = document.querySelector("king");

