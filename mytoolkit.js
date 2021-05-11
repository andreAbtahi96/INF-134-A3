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
         var outerCircle = radioGroup.circle(20).fill("none").stroke('black').width(5);
         var innerCircle = radioGroup.circle(20).fill('blue');



         return {
            move: function(x, y) {
                radioGroup.move(x, y);
            }
        }
    }
return {Button,CheckBox,ProgressBar,RadioButton}
}()); //end of tool kit

export{MyToolkit}