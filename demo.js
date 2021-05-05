// File name: demo.js

import {MyToolkit} from './mytoolkit.js';


// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(100,100);
btn.onclick(function(e){
	console.log(e);
});

// var checkBox = new MyToolkit.CheckBox;
// checkBox.move(500,500);

