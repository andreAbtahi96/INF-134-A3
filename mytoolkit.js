// File name: mytoolkit.js
import { SVG } from './svg.min.js'

var MyToolkit = (function() {
/*
    Visually change for at least three states (e.g., color change on hover).

    Expose a custom label property to set the text on the button.
    
    Expose an event handler that notifies consuming code when the button is clicked.
    
    Expose an event handler that notifies consuming code when the widget state has changed.

*/
    var Button = function(){

        var xDimmension = 200;
        var yDimmension = 50;

        //creating SVG

        //build SVG with fill
        var draw = SVG().addTo('body').size('100%','100%'); //build SVG space

        //creating a group object for button
        var buttonGroup = draw.group();  
        var rect = buttonGroup.rect(200,50).fill('red').radius(10);

        //add text button
        //buttonGroup.text("Click Here").fill('white').attr({"font-size": '20'}).x(5).y(10);
        var text = buttonGroup.text("Button:").fill('white').attr({"font-size": '20'})
        .cx(90).cy(25);
        // text.addTo(buttonGroup);

        //Expose an event handler that notifies consuming code when the widget state has changed.
        var clickEvent = null

        //(A) visually change for at least three states 
        //(D) Expose an event handler that notifies consuming code when the widget state has changed.
        rect.mouseover(function(){
            this.fill({ color: 'blue'})
        })
        rect.mouseout(function(){
            this.fill({ color: 'red'})
        })
        rect.mouseup(function(){
            this.fill({ color: 'red'})
        })
        //captures click event from browser
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)

            console.log("button clicked");
        })
        //on intantiation, these fire off.
        return {
            move: function(x, y) {
                buttonGroup.move(x, y);
            },

            //(C): Expose an event handler that notifies consuming code when the button is clicked.
            onclick: function(eventHandler){
                clickEvent = eventHandler
                console.log("button clicked");
            },

            
            //IN PROGRESS(B): Expose a custom label property to set the text on the button.
            // Providing a more dynamic experience when adding text.

            text: function(userText){

                //(A)
                // if(userText.length > 10){

                //     var firstHalf = userText.slice(0, userText.length/2);
                //     var secondHalf = userText.slice(firstHalf.length, userText.length);
                    
                //     text.build(true); //enabled build mode

                //     var tspan = text.tspan(firstHalf).newLine();

                //     text.tspan(secondHalf).newLine();
                //     rect.size(xDimmension,yDimmension*2);
                //     text.tspan.tspan(secondHalf).newLine();
                // }
                text.text(userText);
            },
            setId: function(id){
                rect.attr("id", id);
            }
        }
    }//Button
        


// //in progress
// var CheckBox = function(){
//     var draw = SVG().addTo('body').size('100%','50%');

//     //rectangle and design
//     var checkBoxGroup = draw.group();
//     var rect = checkBoxGroup.rect(25,25).fill('none');
//     rect.stroke({color: 'gray', width: 2});

//     //adding checkmark design
//     var checkMarkGroup = draw.group();
//     var downLine = checkMarkGroup.line(0,0,5,5).move(10,20);
//     downLine.stroke({ color: '#f06', width: 5, linecap: 'round' })
//     var upLine = checkMarkGroup.line(10,-10,0,0).move(15,15);
//     upLine.stroke({ color: '#f06', width: 5, linecap: 'round' })

//     checkMarkGroup.addTo(checkBoxGroup);
//     checkMarkGroup.move(5,10)

//     //Expose an event handler that notifies consuming code when the widget state has changed.
//     var clickEvent = null

//     //captures click event from browser
//     checkBoxGroup.click(function(event){
//         console.log("clicked")
//         if(checkMarkGroup.visible())
//             checkMarkGroup.hide();
//         {
//             checkMarkGroup.show();
//         }
//         // if(clickEvent != null)
//         //     clickEvent(event)

//         console.log("button clicked");
//     })

//     return {
//         move: function(x, y) {
//             checkBoxGroup.move(x, y);
//         },
//         setId: function(id){
//             rect.attr("id", id);
//         },
//         onclick: function(eventHandler){

//             clickEvent = eventHandler
//             console.log("checkbox clicked");
//             // if(this.checkBoxGroup.checkMark.visible())
//             //     this.checkMarkGroup.hide();
//             // else{
//             //     this.checkMarkGroup.show();
//             // }

            
//         },

//     }
// }//CheckBox


/*
Visually support checked and unchecked states.

Expose a custom label property to set the text that appears to the right of the check box.

Expose an event handler that notifies consuming code when the checked state has changed.

Expose an event handler that notifies consuming code when the widget state has changed.
*/
    var CheckBox = function(){

    var xDimmension = 200;
    var yDimmension = 50;

    //creating SVG

    //build SVG with fill
    var draw = SVG().addTo('body').size('100%','100%'); //build SVG space

    //creating a group object for checkbox
    var checkBoxGroup = draw.group();  
    var rect = checkBoxGroup.rect(25,25).fill('white').radius(5);
    rect.attr({padding: '50px 50px'})
    var stroke = checkBoxGroup.stroke({color: 'gray', width: 2});
    //adding checkmark design
    var checkMarkGroup = draw.group();
    var downLine = checkMarkGroup.line(0,0,5,5).move(10,20);
    downLine.stroke({ color: '#f06', width: 5, linecap: 'round',padding:'20px 20px'})
    var upLine = checkMarkGroup.line(10,-10,0,0).move(15,15);
    upLine.stroke({ color: '#f06', width: 5, linecap: 'round', padding:'10px 10px' })
    checkMarkGroup.attr({padding:'50px 50px'})
    checkMarkGroup.addTo(checkBoxGroup);
    checkMarkGroup.move(5,10);
    checkMarkGroup.hide();

    //add text button
    var text = checkBoxGroup.text("Text").fill('#f06').attr({"font-size": '20'}).x(30).y(5);
    text.stroke({color: '#f06', width: 1});
    text.addTo(checkBoxGroup);


    //PROCESSING BEGINS

    //Expose an event handler that notifies consuming code when the widget state has changed.
    var clickEvent = null
    var isChecked = false;

    //(A) visually change for at least three states 
    //(D) Expose an event handler that notifies consuming code when the widget state has changed.
    rect.mouseover(function(){
        this.fill({ color: 'white'})
        // checkMarkGroup.show();
    })
    rect.mouseout(function(){
        this.fill({ color: 'none'})
        // checkMarkGroup.hide();
    })
    rect.mouseup(function(){
        this.fill({ color: 'white'})
    })

    //captures click event from browser
    rect.click(function(event){
        // this.fill({ color: 'black'})
        
        if(clickEvent != null){
            clickEvent(event)
        }
        if(checkMarkGroup.visible()){
            checkMarkGroup.hide();
            isChecked = false;
        }
        else{
            checkMarkGroup.show();
            isChecked = true;

        }

        console.log("checkbox clicked");
    })
    // checkMarkGroup.click(function(event){
    //     // this.fill({ color: 'black'})
        
    //     if(clickEvent != null){
    //         clickEvent(event)
    //     }
    //     if(checkMarkGroup.visible())
    //         checkMarkGroup.hide();
    //     else{
    //         checkMarkGroup.show();
    //     }

    //     console.log("checkbox clicked");
    // })


    //on intantiation, these fire off.
    return {
        move: function(x, y) {
            checkBoxGroup.move(x, y);
        },

        //(C): Expose an event handler that notifies consuming code when the button is clicked.
        onclick: function(eventHandler){
            clickEvent = eventHandler
            console.log("button clicked");
        },

        
        //IN PROGRESS(B): Expose a custom label property to set the text on the button.
        // Providing a more dynamic experience when adding text.

        text: function(userText){

            //(A)
            // if(userText.length > 10){

            //     var firstHalf = userText.slice(0, userText.length/2);
            //     var secondHalf = userText.slice(firstHalf.length, userText.length);
                
            //     text.build(true); //enabled build mode

            //     var tspan = text.tspan(firstHalf).newLine();

            //     text.tspan(secondHalf).newLine();
            //     rect.size(xDimmension,yDimmension*2);
            //     text.tspan.tspan(secondHalf).newLine();
            // }
            text.text(userText);
        },
        setId: function(id){
            rect.attr("id", id);
        }
    }
    }//Button

    var ProgressBar = function(){
    /*     
        
        Expose a custom property to set the width of the progress bar. (DONE)

        Expose a custom property to set the increment value of the progress bar. (DONE)

        Expose a custom property to get the increment value of the progress bar. (DONE)

        Expose a custom method to increment the value of the progress bar. The method should support an arbitrary numerical value from 0-100. (DONE)

        Expose an event handler that notifies consuming code when the progress bar has incremented.

        Expose an event handler that notifies consuming code when the widget state has changed.
                
    */

    //object variables
    var WIDTH, PROGRESSBARVALUE;

    //creating SVG space
    var draw = SVG().addTo('body').size('100%', '100%');

    //creating progress bar grouping/design
    var progressBarGroup = draw.group();

        var outerRect = progressBarGroup.rect(200,30).stroke('black')
        .radius(10).fill('none');
        var innerRect = progressBarGroup.rect(0,30).radius(10).fill('green');
        
        return {
            move: function(x, y) {
                progressBarGroup.move(x, y);
            },
    
            //(C): Expose an event handler that notifies consuming code when the button is clicked.
            onclick: function(eventHandler){
                clickEvent = eventHandler
                console.log("button clicked");
            },
            
            setWidthOfBar: function(width){
                WIDTH = width;
                outerRect.attr("width", width);

            },

            // setIncrementBarValue: function(zeroThroughHundredValue){
            //     if(zeroThroughHundredValue > WIDTH){
            //         alert("value exceeds width of progress bar. Try again.")
            //     }
            //     else{
            //         //innerRect.size(zeroThroughHundredValue,30).radius(10);
            //         innerRect.attr("width", zeroThroughHundredValue);
            //         PROGRESSBARVALUE = zeroThroughHundredValue;

            //     }
            //using percentages
            setIncrementBarValue: function(zeroThroughHundredValue){
                var argumentInPercentage = zeroThroughHundredValue/100;
                var portionOfBar = argumentInPercentage * WIDTH;

                if(zeroThroughHundredValue > 100){
                    alert("value exceeds 100. Enter a value 0-100.")
                }
                else{
                    //innerRect.size(zeroThroughHundredValue,30).radius(10);

                    // var percentageOfWidth = (zeroThroughHundredValue/WIDTH)*WIDTH;
                    innerRect.attr("width", portionOfBar);
                    PROGRESSBARVALUE = zeroThroughHundredValue

                }
            },
            getIncrementBarValue: function(){
                return PROGRESSBARVALUE;
            }
            
        }

    }

    var RadioButton = function(){
        //build SVG with fill

        
        var draw = SVG().addTo('body').size('100%','100%'); //build SVG space

         //creating a group object for radio button
         var radioGroup = draw.group();  
         var outerCircle = radioGroup.circle(20).stroke('black').fill('#89cff0');
         var innerCircle = radioGroup.circle(15).fill('blue').move(2.5,2.5);

         //standard init provides 2 radio buttons at minimum
        //  function constructor(number){
        //     var listOfButtons = [];
        //      for (let index = 0; index < number; index++) {
        //         listOfButtons.push(new RadioButton());
                
        //     }
        //     return listOfButtons;
        // }
         

        //Expose an event handler that notifies consuming code when the widget state has changed.
        var clickEvent = null
        var isSelected = false;


        radioGroup.mouseover(function(){
            this.fill({ color: 'blue'})
        })
        radioGroup.mouseout(function(){
            this.fill({ color: 'red'})
        })
        radioGroup.mouseup(function(){
            this.fill({ color: 'red'})
        })
        //captures click event from browser
        radioGroup.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)

            if(innerCircle.visible()){
                innerCircle.hide();
                isSelected = false;
            }
            else{
                innerCircle.show();
                isSelected = true;
    
            }

            console.log("button clicked");
        })


         return {
            move: function(x, y) {
                radioGroup.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
                console.log("button clicked");
            },
            setId: function(id){
                radioGroup.attr("id", id);
            }
        }
    }

    var TextBox = function(){
        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //variables
        var id;

        //creating textbox grouping/design
        var textBoxGroup = draw.group();
        var outerRect = textBoxGroup.rect(200,30).stroke('black')
        .radius(10).fill('white');
        var text = textBoxGroup.text("placeholder").move(5,5);
        var caret = textBoxGroup.line(45,2.5,45,25).stroke({width:1,color:"black"}).move(80,5)

        //captures click event from browser
        text.click(function(event){
        // this.fill({ color: 'black'})
        
        if(clickEvent != null){
            clickEvent(event)
            this.text.addEventListener("input",logKey);
        }


    })

    function logKey(txt){
        console.log(userText);
    }
        

        //methods
        return{
            move: function(x,y){
                textBoxGroup.move(x,y);
            },
            insertText: function(userText){
                text.text(userText);

            }
        }
    }

    var ScrollBar = function(){

        var HEIGHT;

        //creating SVG space
        var draw = SVG().addTo('body').size('100%','100%');

        //design
        var scrollBarGroup = draw.group();

        //1.vertical rectangle
        var outerRect = scrollBarGroup.rect(30,130).stroke('black')
        .fill('none').radius;

        //2.two small squares at each end
        var topRect = scrollBarGroup.rect(30,30).stroke('black')
        .fill('none');
        var topArrow = scrollBarGroup.polygon('50,0 60,20 40,20').move(6,4);

        var buttomRect = scrollBarGroup.rect(30,100).stroke('black')
        .fill('none');
        var bottomArrow = scrollBarGroup.polygon('50,20 60,0 40,0').move(6,105);

        //3.eclipse for the dragger
        var shifter = scrollBarGroup.rect(30, 30).move(0,30).stroke('black').fill('gray');

        //4.grip
        var grip1 = scrollBarGroup.line(0,0,30,0).stroke({color:'black', width:2}).move(0,40)
        var grip2 = scrollBarGroup.line(0,0,30,0).stroke({color:'black', width:2}).move(0,45)
        var grip3 = scrollBarGroup.line(0,0,30,0).stroke({color:'black', width:2}).move(0,50)

        return{
            move: function(x,y){
                scrollBarGroup.move(x,y);
            }
        }
    }
return {Button,CheckBox,ProgressBar,RadioButton,TextBox,ScrollBar}
}()); //end of tool kit

export{MyToolkit}