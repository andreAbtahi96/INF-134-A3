// File name: mytoolkit.js
import { SVG } from './svg.min.js'

var MyToolkit = (function() {

    //COLOR SCHEME PALLET
    var BLUE = '#004571';
    var YELLOW = '#f6aa0d';
    
    var HOVERBLUE = '#00386c';
    var HOVERYELLOW = '#DF9336';

    var FOCUSCOLOR = '#5e9ed6'; //color: FOCUSCOLOR, width:'4'


    var Button = function(){

    /*
        Visually change for at least three states (e.g., color change on hover).

        Expose a custom label property to set the text on the button.
        
        Expose an event handler that notifies consuming code when the button is clicked.
        
        Expose an event handler that notifies consuming code when the widget state has changed.

    */
        var xDimmension = 200;
        var yDimmension = 50;

        //creating SVG

        //build SVG with fill
        var draw = SVG().addTo('body').size('100%','100%'); //build SVG space

        //creating a group object for button
        var buttonGroup = draw.group();  
        var rect = buttonGroup.rect(200,50).fill(BLUE).radius(10);

        //add text button
        //buttonGroup.text("Click Here").fill('white').attr({"font-size": '20'}).x(5).y(10);
        var text = buttonGroup.text("Button:").fill('white').attr({"font-size": '20'})
        .cx(90).cy(25);

        text.addTo(buttonGroup);

        
        // text.addTo(buttonGroup);

        //Expose an event handler that notifies consuming code when the widget state has changed.
        var clickEvent = null

        //(A) visually change for at least three states 
        //(D) Expose an event handler that notifies consuming code when the widget state has changed.
        rect.mouseover(function(){
            this.fill({ color: HOVERBLUE})
            
        })
        rect.mouseout(function(){
            this.fill({ color: BLUE})
            this.stroke('none')
        })
        rect.mousedown(function(){
            this.fill({ color: HOVERBLUE })
        })
        //captures click event from browser
        rect.click(function(event){
            this.fill({ color: YELLOW})
            this.stroke({color: FOCUSCOLOR, width:'4'} )
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



    var CheckBox = function(){

    /*
    Visually support checked and unchecked states. (DONE)

    Expose a custom label property to set the text that appears to the right of the check box.(DONE)

    Expose an event handler that notifies consuming code when the checked state has changed.

    Expose an event handler that notifies consuming code when the widget state has changed.
    */

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
    downLine.stroke({ color: YELLOW, width: 5, linecap: 'round',padding:'20px 20px'})
    var upLine = checkMarkGroup.line(10,-10,0,0).move(15,15);
    upLine.stroke({ color: YELLOW, width: 5, linecap: 'round', padding:'10px 10px' })
    checkMarkGroup.attr({padding:'100px 50px'})
    checkMarkGroup.addTo(checkBoxGroup);
    checkMarkGroup.move(5,7);
    // checkMarkGroup.hide();

    //add text button
    var text = checkBoxGroup.text("Text").fill(BLUE).attr({"font-size": '20'}).x(30).y(0);
    text.stroke({color: BLUE, width: 1});
    text.addTo(checkBoxGroup);


    //PROCESSING BEGINS

    //Expose an event handler that notifies consuming code when the widget state has changed.
    var clickEvent = null
    var isChecked = false;

    //(A) visually change for at least three states 
    //(D) Expose an event handler that notifies consuming code when the widget state has changed.
    rect.mouseover(function(){
        this.fill({ color: HOVERBLUE})
        // checkMarkGroup.show();
    })
    rect.mouseout(function(){
        this.fill({ color: 'white'})
        // checkMarkGroup.hide();
    })
    rect.mouseup(function(){
        this.fill({ color: 'none'})
    })

    //captures click event from browser
    rect.click(function(event){
        // this.fill({ color: 'black'})

        console.log(event)
        
        if(clickEvent != null){
            clickEvent(event)
        }
        if(checkMarkGroup.visible()){
            checkMarkGroup.hide();
            isChecked = false;
        }
        else if(!checkMarkGroup.visible()){
            checkMarkGroup.show();
            isChecked = true;

        }

        console.log("checkbox clicked");
    })
    checkMarkGroup.click(function(event){
        // this.fill({ color: 'black'})
        
        // if(clickEvent != null){
        //     clickEvent(event)
        // }
        if(checkMarkGroup.visible())
            checkMarkGroup.hide();
        else{
            checkMarkGroup.show();
        }

        console.log("checkbox clicked");
    })


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

        setText: function(userText){

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
    var barHasIncremented, widgetHasIncremented = false;

    //creating SVG space
    var draw = SVG().addTo('body').size('100%', '100%');

    //creating progress bar grouping/design
    var progressBarGroup = draw.group();

        var outerRect = progressBarGroup.rect(200,30).stroke('black')
        .radius(10).fill('none');
        var innerRect = progressBarGroup.rect(0,30).radius(10).fill(BLUE);
        
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
                    barHasIncremented = true;
                    widgetHasIncremented = true;

                }
            },
            getIncrementBarValue: function(){
                return PROGRESSBARVALUE;
            }
            
        }

    }

    var RadioButton = function(){
        /*
        Visually support checked and unchecked states.

        Support 2 to n number of buttons, where n is set by the consuming code, with minimum of two, positioned vertically.
        
        Ensure that only one button can be checked at a time.
        
        Expose a custom label property to set the text that appears to the right of each button.(DONE)
        
        Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
        
        Expose an event handler that notifies consuming code when the widget state has changed.
        */  
        
        var draw = SVG().addTo('body').size('100%','100%'); //build SVG space

         //creating a group object for radio button
         var radioGroup = draw.group();  
         var outerCircle = radioGroup.circle(20).fill('none').stroke({color:'black'});
         var innerCircle = radioGroup.circle(15).fill('white').move(2.5,2.5);


         var text = radioGroup.text(" ").fill(BLUE).attr({"font-size": '16'}).x(30).y(-4);
         text.stroke({color: BLUE, width: 1});
         //text.addTo(radioGroup);


        //innerCircle.hide()
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


        // radioGroup.mouseover(function(){
        //     this.fill({ color: 'blue'})
        // })
        // radioGroup.mouseout(function(){
        //     this.fill({ color: 'red'})
        // })
        // radioGroup.mouseup(function(){
        //     this.fill({ color: 'red'})
        // })
        // //captures click event from browser
        // radioGroup.click(function(event){
        //     this.fill({ color: 'pink'})
        //     if(clickEvent != null)
        //         clickEvent(event)

        //     if(innerCircle.visible()){
        //         innerCircle.hide();
        //         isSelected = false;
        //     }
        //     else{
        //         innerCircle.show();
        //         isSelected = true;
    
        //     }

        //     console.log("button clicked");
        // })

        innerCircle.mouseover(function(){
            innerCircle.fill({color: BLUE})

            // checkMarkGroup.show();
        })
        outerCircle.mouseout(function(){
            if(isSelected){
                innerCircle.fill({ color: BLUE})

            }
            else{
                innerCircle.fill({ color: 'white'})
            }
            // checkMarkGroup.hide();
        })
        outerCircle.mouseup(function(){
            innerCircle.fill({ color: BLUE})
            isSelected = true;
        })
        radioGroup.mousedown(function(){
            innerCircle.fill({ color: HOVERBLUE})
            isSelected = true;

        })

    
        //captures click event from browser
        radioGroup.click(function(event){
            // this.fill({ color: 'black'}))

            innerCircle.fill({color: BLUE})
    
            isSelected = true;

    
            console.log("radio clicked");
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
            },
            setText: function(userText){
                text.text(userText);
            }
        }
    }

    var TextBox = function(){

        /*
        Visually support a caret | that informs the user about the position of the cursor. The caret should only be visually present when the widget has hover focus.

        Expose a custom property to get the text entered by the user.

        Expose an event handler that notifies consuming code when the text has changed.

        Expose an event handler that notifies consuming code when the widget state has changed.
        */

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

        /*
        Expose a custom property to set the height of the scroll bar.

        Expose a custom property to get the position of the scroll thumb.

        Expose an event handler that notifies consuming code when the scroll thumb has moved and in which direction.

        Expose an event handler that notifies consuming code when the widget state has changed.
        */
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

    var AddAComment = function(){

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //1.box with comment text
        //creating a group object for button
        var buttonGroup = draw.group();  
        var rect = buttonGroup.rect(100,40).fill('red').radius(10);

        //add text button
        var buttonText = buttonGroup.text("Comment").fill('white').attr({"font-size": '20'})
        .move(10,8)

        //3. text box on side
        //creating textbox grouping/design
        var textBoxGroup = draw.group();
        var outerRect = textBoxGroup.rect(200,40).stroke('black')
        .radius(10).fill('white');
        var text = textBoxGroup.text("placeholder").move(5,5);
        var caret = textBoxGroup.line(45,2.5,45,25).stroke({width:1,color:"black"}).move(80,5)
        textBoxGroup.move(100,40)
        //4. on click -> box goes away and text box appears to add text.
        
        return{
            move: function(x,y){
                buttonGroup.move(x,y);
            }
        }
    }
return {Button,CheckBox,ProgressBar,RadioButton,TextBox,ScrollBar,AddAComment}
}()); //end of tool kit

export{MyToolkit}