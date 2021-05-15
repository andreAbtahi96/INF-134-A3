// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// // Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.setId("button1");
btn.text("Click Here");
btn.move(0,25);
btn.onclick(function(e){
	console.log("entered demo version of onclick function");
	console.log(e);
});

// var event = function(e){
// 	console.log(e);
// }
// btn.onclick(event);


// Implement a MyToolkit Checkbx
var checkBox = new MyToolkit.CheckBox; //init checkbox
checkBox.setId("checkbox1");	//set id
checkBox.setText("Is this statement true");	//set text on 
checkBox.move(10,5);
checkBox.onclick(function(e){
	console.log(e);
})
checkBox.onclick(function(e){
	console.log(e);
});

var progressBar = new MyToolkit.ProgressBar;
progressBar.move(10,5);
progressBar.setWidthOfBar(500);
progressBar.setIncrementBarValue(69);

var value = progressBar.getIncrementBarValue()
console.log(value);

var radio = new MyToolkit.RadioButton;
radio.setText("test");
radio.move(5,5)

var textBox = new MyToolkit.TextBox;
textBox.move(5,5);
textBox.insertText("hello")

var scroll = new MyToolkit.ScrollBar;
scroll.move(1,5);

var text = new MyToolkit.AddAComment;
text.move(1,40);
