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
        Visually change for at least three states (e.g., color change on hover). (DONE)

        Expose a custom label property to set the text on the button.(DONE)
        
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

                alert("YOU CLICKED ME")
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
                //console.log("button clicked");
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
                text.attr({'label': userText});
                
            },
            setId: function(id){
                rect.attr("id", id);
            }
        }
    }//Button
        
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
        setText: function(userText){
            text.text(userText);
        },
        setId: function(id){
            checkBoxGroup.attr("id", id);
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
            },
            setId: function(id){
                progressBarGroup.attr("id", id);
            }
            
        }

    }

    var RadioButton = function(number){
        var list=[]; //list of radio buttons.


        var height = number *40;
        var heightOfSVG = height.toString();
        console.log(heightOfSVG)
        /*
        Visually support checked and unchecked states.

        Support 2 to n number of buttons, where n is set by the consuming code, with minimum of two, positioned vertically.
        
        Ensure that only one button can be checked at a time.
        
        Expose a custom label property to set the text that appears to the right of each button.(DONE)
        
        Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
        
        Expose an event handler that notifies consuming code when the widget state has changed.
        */  
        if(number<2){
            console.log("need 2 or more")
        }
        var draw = SVG().addTo('body').size("100%",heightOfSVG); //build SVG space



        //INPROGRESS: TRYING TO CREATE MULTIPLE RADIO BUTTONS

         //creating a group object for radio button
         //var radioGroups = draw.group(); 

        //  var radioGroup = draw.group();  
        //  var outerCircle = radioGroup.circle(20).fill('none').stroke({color:'black'});
        //  var innerCircle = radioGroup.circle(15).fill('white').move(2.5,2.5);
        //  var text = radioGroup.text(" ").fill(BLUE).attr({"font-size": '20'}).x(30).y(-8);
        //  text.stroke({color: BLUE, width: 1});

         


         //text.addTo(radioGroup);
         for(var i = 0; i< number; i++){


            var radioGroup = draw.group();  
            var outerCircle = radioGroup.circle(20).fill('none').stroke({color:'black'});
            var innerCircle = radioGroup.circle(15).fill('white').move(2.5,2.5);
            var text = radioGroup.text("enter text").fill(BLUE).attr({"font-size": '20'}).x(30).y(-8);
            text.stroke({color: BLUE, width: 1});
            radioGroup.move(10,i*40)

           
            list.push(radioGroup)

             //new RadioButton;

             //  list[i].move(5,i*5)
        }
        
 
        return list;
        // list.each('fill','green');
        // console.log(list)

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
            // setText: function(userText,elementNumber){
            //     //list[elementNumber].node.lastChild.lastChild.innerHTML = userText

            //     radioGroup.text.text(userText)
            //     //this.lastChild.key = userText
                
            // },
            setText: function(text){
                list[0].node.lastChild.lastChild.innerHTML = "r"
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
        var clickEvent = null
        var USERTEXT = "";


        //creating textbox grouping/design
        var textBoxGroup = draw.group();
        var outerRect = textBoxGroup.rect(200,30).stroke('black')
        .radius(10).fill('white');
        var text = textBoxGroup.text("").move(5,0);
        //var caret = textBoxGroup.line(45,2.5,45,25).stroke({width:1,color:"black"}).move(80,5)


    //     //captures click event from browser
        textBoxGroup.click(function(event){
        outerRect.fill({ color: 'gray'})
        console.log(event);
        
        if(clickEvent != null){
            clickEvent = event;
        }

        //for characters only
        SVG.on(window,'keypress',function(e){
            logKey(e);
        })

        //for backspace and shift only
        SVG.on(window,'keydown',function(e){
            if(e.key === "backspace" || e.key === "shift"){
                console.log("here");
                
            }
            modifyText(e)
        })



    })

       
    // function userInput(event){
    //     var text;
    //     // text += event.value.text;
    //     console.log(text);
    // }

    function logKey(e){



        // if(USERTEXT.length > outerRect.siz ){
        //     console.log("huhf3")
        // }
        //userText = userText + e.key 
        var editedText = USERTEXT + e.key;
        USERTEXT = editedText;
        //console.log(USERTEXT);
        text.text(USERTEXT);

        //console.log(txt.key);

    }
    function modifyText(e){
        if(e.key === "Backspace" ){
            console.log("backspace")
            var editedText = USERTEXT.slice(0,-1);
            USERTEXT = editedText;
            text.text(USERTEXT);
            //console.log(USERTEXT);
        }
    }
        

        //methods
        return{
            move: function(x,y){
                textBoxGroup.move(x,y);
            },
            insertText: function(userText){
                text.text(userText);

            },
            setId: function(id){
                textBoxGroup.attr("id", id);
            },
            onClick: function(eventHandler){
                clickEvent = eventHandler;
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
            },
            setId: function(id){
                scrollBarGroup.attr("id", id);
            }
        }
    }

    var AddAComment = function(){

        var clickEvent = null;
        var userComment = "";

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
        
        //     //captures click event from browser
        textBoxGroup.click(function(event){
            outerRect.fill({ color: 'gray'})
            
            if(clickEvent != null){
                clickEvent = event;
            }
            SVG.on(window,'keydown',function(e){
                updateText(e);
                
            })
            // SVG.on(window,'keydown',function(e){
            //     if(e.keycode == 8 || e.keycode == 46 ){
            //         console.log('backspace is pressed')
            //     }
            // })

        })

        function updateText(txt){

            if(txt.key == "Backspace" ){
                console.log('backspace is pressed')
                //remove last character from string
            }
            else if(txt.key == "ShiftLeft" || txt.key == "Shift") //if shift
            console.log("shift pressed");
            // console.log("txt.key")
            // userComment += txt.key
            // text.text(userComment);
        }

        return{
            move: function(x,y){
                buttonGroup.move(x,y);
            },
            setId: function(id){
                buttonGroup.attr("id", id);
            }
            
        }
    }
return {Button,CheckBox,ProgressBar,RadioButton,TextBox,ScrollBar,AddAComment}
}()); //end of tool kit

export{MyToolkit}