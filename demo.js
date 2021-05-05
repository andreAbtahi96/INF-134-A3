// File name: demo.js

import {MyToolkit} from './mytoolkit';


// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(100,100);
btn.onclick(function(e){
	console.log(e);
});