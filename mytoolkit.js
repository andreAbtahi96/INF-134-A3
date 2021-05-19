// File name: mytoolkit.js
import { SVG } from './svg.min.js'

var MyToolkit = (function () {

    //COLOR SCHEME PALLET
    var BLUE = '#004571';
    var YELLOW = '#f6aa0d';

    var HOVERBLUE = '#00386c';
    var HOVERYELLOW = '#DF9336';

    var FOCUSCOLOR = '#5e9ed6'; //color: FOCUSCOLOR, width:'4'

    /**
     * ![alternate text](images/button.png)
     * @class Button
     */
    var Button = function () {

        /*
            Visually change for at least three states (e.g., color change on hover). (DONE)
    
            Expose a custom label property to set the text on the button.(DONE)
            
            Expose an event handler that notifies consuming code when the button is clicked.(DONE)
            
            Expose an event handler that notifies consuming code when the widget state has changed.(DONE)
    
        */

        var xDimmension = 200;
        var yDimmension = 50;

        //creating SVG
        //build SVG with fill
        var draw = SVG().addTo('body').size('100%', '100%'); //build SVG space

        //creating a group object for button
        var buttonGroup = draw.group();
        var rect = buttonGroup.rect(200, 50).fill(BLUE).radius(10);

        //add text button
        var text = buttonGroup.text("Button:").fill('white').attr({ "font-size": '20' })
            .cx(90).cy(25);

        text.addTo(buttonGroup);


        // text.addTo(buttonGroup);

        //Expose an event handler that notifies consuming code when the widget state has changed.
        //var clickEvent = null

        //handlers
        var mouseoverHandler, mouseoutHandler, mousedownHandler, pressedHandler = null;

        //(A) visually change for at least three states 
        //(D) Expose an event handler that notifies consuming code when the widget state has changed.
        rect.mouseover(function (event) {
            this.fill({ color: HOVERBLUE })

            if (mouseoverHandler != null) {
                mouseoverHandler(event)
            }

        })
        rect.mouseout(function (event) {
            this.fill({ color: BLUE })
            this.stroke('none')

            if (mouseoutHandler != null) {
                mouseoutHandler(event)
            }
        })
        rect.mousedown(function (event) {
            this.fill({ color: HOVERBLUE })

            if (mousedownHandler != null) {
                mousedownHandler(event)
            }

        })
        //captures click event from browser
        rect.click(function (event) {
            this.fill({ color: YELLOW })
            this.stroke({ color: FOCUSCOLOR, width: '4' })
            if (pressedHandler != null) {
                pressedHandler(event)
            }

        })
        //on intantiation, these fire off.
        return {

            /**
             * 
             * Move object
             * @memberof Button
             * @param  {number} x - is a horizontal value
             * @param  {number} y - is a vertical value
             */
            move: function (x, y) {
                buttonGroup.move(x, y);
            },
            /** Listener for mouse over behavior
             * @memberof Button
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseOver: function (event) {
                mouseoverHandler = event;
            },
            /** Listener for mouse out behavior
             * @memberof Button
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseOut: function (event) {
                mouseoutHandler = event;
            },
            /** Listener for mouse press-down behavior
             * @memberof Button
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseDown: function (event) {
                mousedownHandler = event;
            },
            /** Listener for mouse click behavior
             * @memberof Button
             * @param  {any} event - is a user's Mouse Event
             */
            onClick: function (event) {
                pressedHandler = event;
                //console.log("button clicked");
            },

            /** Set the text on the button.
             * @memberof Button
             * @param  {String} userText - is a user's desired text
             */
            setText: function (userText) {

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
                text.attr({ 'label': userText });

            },
            /** Set the identifier for the button.
             * @memberof Button
             * @param  {String} id - is a user's desired name 
             */
            setId: function (id) {
                rect.attr("id", id);
            }
        }
    }//Button

    /**
     * @class CheckBox
     */
    var CheckBox = function () {

        /*
        Visually support checked and unchecked states. (DONE)
    
        Expose a custom label property to set the text that appears to the right of the check box.(DONE)
    
        Expose an event handler that notifies consuming code when the checked state has changed. (DONE)
    
        Expose an event handler that notifies consuming code when the widget state has changed. (DONE)
        */

        var xDimmension = 200;
        var yDimmension = 50;

        //creating SVG

        //build SVG with fill
        var draw = SVG().addTo('body').size('100%', '100%'); //build SVG space

        //creating a group object for checkbox
        var checkBoxGroup = draw.group();
        var rect = checkBoxGroup.rect(25, 25).fill('white').radius(5);
        rect.attr({ padding: '50px 50px' })
        var stroke = checkBoxGroup.stroke({ color: 'gray', width: 2 });
        //adding checkmark design
        var checkMarkGroup = draw.group();
        var downLine = checkMarkGroup.line(0, 0, 5, 5).move(10, 20);
        downLine.stroke({ color: YELLOW, width: 5, linecap: 'round', padding: '20px 20px' })
        var upLine = checkMarkGroup.line(10, -10, 0, 0).move(15, 15);
        upLine.stroke({ color: YELLOW, width: 5, linecap: 'round', padding: '10px 10px' })
        checkMarkGroup.attr({ padding: '100px 50px' })
        checkMarkGroup.addTo(checkBoxGroup);
        checkMarkGroup.move(5, 7);
        checkMarkGroup.hide();
        var isChecked = false; //initialized to false

        //add text button
        var text = checkBoxGroup.text("Text").fill(BLUE).attr({ "font-size": '20' }).x(30).y(0);
        text.stroke({ color: BLUE, width: 1 });
        text.addTo(checkBoxGroup);


        //event handelers
        var mouseoverHandler, mouseoutHandler, mouseupHandler, mousedownHandler, checkedHandler, uncheckedHandler = null;




        rect.mouseover(function (event) {
            this.fill({ color: HOVERBLUE })

            if (mouseoverHandler != null) {
                mouseoverHandler(event)
            }
            // checkMarkGroup.show();
        })
        rect.mouseout(function (event) {
            this.fill({ color: 'none' })

            if (mouseoutHandler != null) {
                mouseoutHandler(event)
            }
            // checkMarkGroup.hide();
        })
        rect.mouseup(function (event) {
            this.fill({ color: 'none' })

            if (mouseupHandler != null) {
                mouseupHandler(event)
            }

        })
        rect.mousedown(function (event) {
            this.fill({ color: HOVERBLUE })

            if (mousedownHandler != null) {
                mousedownHandler(event)
            }
        })

        //captures click event from browser
        rect.click(function (event) {
            // this.fill({ color: 'black'})

            //on action change state prior to processessing.
            isChecked = !isChecked;


            //state management and checkmark visibility status

            //if checked and handler isn't null -> feed CheckedHandler. 
            if (isChecked == true && checkedHandler != null) {
                checkedHandler(event);
                checkMarkGroup.show();
            }

            //otherwise unchecked and handler isn't null -> feed unCheckedHandler. 
            else if (!isChecked && uncheckedHandler) {
                uncheckedHandler(event);
                checkMarkGroup.hide();
            }


        })



        //on intantiation, these fire off.
        return {
            /**
             * Move object
             * @memberof CheckBox
             * @param  {number} x - is a horizontal value
             * @param  {number} y - is a vertical value
             */
            move: function (x, y) {
                checkBoxGroup.move(x, y);
            },

            //(C): Expose an event handler that notifies consuming code when the button is clicked.
            onclick: function (event) {
                pressedHandler = event

            },
            onMouseOver: function (event) {
                mouseoverHandler = event;
            },
            /** Listener for mouse out behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseOut: function (event) {
                mouseoutHandler = event;
            },
            /** Listener for mouse press-up behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseUp: function (event) {
                mouseupHandler = event;
            },
            onMouseDown: function (event) {
                mousedownHandler = event;
            },
            /** Listener for mouse click behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onCheck: function (event) {
                checkedHandler = event;
            },
            onUnCheck: function (event) {
                uncheckedHandler = event;
            },
            setText: function (userText) {
                text.text(userText);
            },
            setId: function (id) {
                checkBoxGroup.attr("id", id);
            }
        }
    }//Button
    /**
     * @class ProgressBar
     */
    var ProgressBar = function () {
        /*     
            
            Expose a custom property to set the width of the progress bar. (DONE)
    
            Expose a custom property to set the increment value of the progress bar. (DONE)
    
            Expose a custom property to get the increment value of the progress bar. (DONE)
    
            Expose a custom method to increment the value of the progress bar. The method should support an arbitrary numerical value from 0-100. (DONE)
    
            Expose an event handler that notifies consuming code when the progress bar has incremented. (DONE)
    
            Expose an event handler that notifies consuming code when the widget state has changed. (DONE)
                    
        */

        //object variables
        var WIDTH
        var PROGRESSBARVALUE = 0;
        var INCREMENTVALUE = 0;
        var barHasIncremented, widgetHasIncremented = false;
        var onProgressChange, onWidgetChange = null;

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //creating progress bar grouping/design
        var progressBarGroup = draw.group();

        var outerRect = progressBarGroup.rect(200, 30).stroke('black')
            .radius(10).fill('none');
        var innerRect = progressBarGroup.rect(0, 30).radius(10).fill(BLUE);



        function onProgressChange(onProgressChange) {
            console.log("progress changed!")
        }

        function onWidgetUpdate(onWidgetChange) {
            if (onWidgetChange) {
                console.log("Progress Bar widget has incremented!")
            }
        }


        return {
            /**
             * Move object
             * @memberof ProgressBar
             * @param  {number} x - is a horizontal value
             * @param  {number} y - is a vertical value
             */
            move: function (x, y) {
                progressBarGroup.move(x, y);
            },
            /**
             *
             *Adjust width of progress bar 
             * @memberof ProgressBar
             * @param  {number} width - is a horizontal value
             */
            setWidthOfBar: function (width) {
                WIDTH = width;
                outerRect.attr("width", width);

            },
            //using percentages
            /**
             * 
             * setting the overall value of the progress bar
             * @memberof ProgressBar
             * @param  {number} zeroThroughHundredValue
             * @param  {any} event
             */
            setTotalBarValue: function (zeroThroughHundredValue, event) {
                var argumentInPercentage = zeroThroughHundredValue / 100;
                var portionOfBar = argumentInPercentage * WIDTH;

                if (zeroThroughHundredValue > 100) {
                    alert("value exceeds 100. Enter a value 0-100.")
                }
                else {
                    //innerRect.size(zeroThroughHundredValue,30).radius(10);

                    // var percentageOfWidth = (zeroThroughHundredValue/WIDTH)*WIDTH;
                    innerRect.attr("width", portionOfBar);
                    PROGRESSBARVALUE = zeroThroughHundredValue
                    barHasIncremented = true;
                    widgetHasIncremented = true;
                    this.on("change", onProgressChange, false);
                    onProgressChangeHandler(widgetHasIncremented);

                }
            },
            /**
             * 
             * returns increment value in number
             * @memberof ProgressBar
             */
            getIncrementValue: function () {
                return INCREMENTVALUE
            },
            /**
             * returns total bar value in number
             * @memberof ProgressBar
             */
            getTotalBarValue: function () {
                return PROGRESSBARVALUE;
            },
            /**
             * adding desired length to previous bar value
             * @memberof ProgressBar
             * @param  {number} userValue - a number ranging from 1-100
             */
            setIncrementValue: function (userValue) {
                var argumentInPercentage = userValue / 100;
                var portionOfBar = argumentInPercentage * WIDTH;


                if (userValue > 100) {
                    alert("value exceeds 100. Enter a value 0-100.")
                }
                else {
                    //innerRect.size(zeroThroughHundredValue,30).radius(10);
                    INCREMENTVALUE = userValue;
                    // var percentageOfWidth = (zeroThroughHundredValue/WIDTH)*WIDTH;
                    innerRect.attr("width", portionOfBar);
                    PROGRESSBARVALUE += userValue;

                    barHasIncremented = true;
                    widgetHasIncremented = true;
                    this.onProgressChange(widgetHasIncremented);
                    this.onWidgetUpdate(widgetHasIncremented);
                }
            },
            /**
             * @memberof ProgressBar
             * @param  {string} id - represents an identifier for the object
             */
            setId: function (id) {
                progressBarGroup.attr("id", id);
            },
            /**
             * updates consuming code when progress has changed.
             * @memberof ProgressBar
             * @param  {boolean} widgetHasIncremented
             */
            onProgressChange: function (widgetHasIncremented) {
                if (widgetHasIncremented) {
                    var onProgressChangeHandler = widgetHasIncremented;
                    console.log("Progress Bar has incremented!")
                }

            },
            /**
             * updates consuming code when progress bar widget has changed.
             * @memberof ProgressBar
             * @param  {boolean} widgetHasIncremented
             */
            onWidgetUpdate: function (widgetHasIncremented) {
                if (widgetHasIncremented) {
                    //var onProgressChangeHandler = widgetHasIncremented;
                    console.log("Progress Widget has changed!")
                }

            }

        }

    }

    /**
     * @class RadioButton
     * @param  {number} number - represents the amount of buttons needed
     */
    var RadioButton = function (number) {
        //var list = []; //list of radio buttons.


        var height = number * 50;
        var heightOfSVG = height.toString();
        //console.log(heightOfSVG)
        /*
        Visually support checked and unchecked states. (IN PROGRESS)

        Support 2 to n number of buttons, where n is set by the consuming code, with minimum of two, positioned vertically. (DONE)
        
        Ensure that only one button can be checked at a time.
        
        Expose a custom label property to set the text that appears to the right of each button.(DONE)
        
        Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
        
        Expose an event handler that notifies consuming code when the widget state has changed.
        */

        if (number < 2) {
            throw "please instantiate 2 or more radio buttons";
            // alert("instantiate 2 or more")
        }
        var draw = SVG().addTo('body').size("100%", heightOfSVG); //build SVG space




        //creating a group object for radio button
        var radioSet = draw.group();

        //creating desired number of radion elements
        for (var i = 1; i <= number; i++) {

            //each radio will be in the set of radios
            var radioButton = radioSet.group();

            //content of radio button will be in radio
            var buttonContent = radioButton.group();

            var outerCircle = buttonContent.circle(20).fill('none').stroke({ color: 'black' });
            var innerCircle = buttonContent.circle(15).fill('white').move(2.5, 2.5);
            var radioText = buttonContent.text("Radio " + (i)).fill(BLUE).attr({ "font-size": '20' }).x(30).y(-4);
            radioText.stroke({ color: BLUE, width: 1 });
            var createSelectionSpace = buttonContent.rect(200, 20)
                .opacity(0).front();
            radioButton.move(10, i * 40)

            radioButton.data({
                isChecked: false
            })

        }

        //return list;

        //event handlers
        var mouseoverHandler, mouseoutHandler, mouseupHandler, mousedownHandler, checkedHandler, uncheckedHandler, clickEvent = null;
        createSelectionSpace.mouseover(function (e) {

            //check state of button



            innerCircle.fill({ color: BLUE })

            if (mouseoverHandler != null) {
                mouseoverHandler(e);
            }

            // checkMarkGroup.show();
        })
        createSelectionSpace.mouseout(function (e) {
            if (radioButton.data('isChecked') === true) {
                innerCircle.fill({ color: BLUE })

            }
            else {
                innerCircle.fill({ color: 'white' })
            }

            if (mouseoutHandler != null) {
                mouseoutHandler(e);
            }
            // checkMarkGroup.hide();
        })
        createSelectionSpace.mouseup(function (e) {
            innerCircle.fill({ color: BLUE })
            //radioButton.data({'isChecked':true})

            if (mouseupHandler != null) {
                mouseupHandler(e);
            }

        })
        createSelectionSpace.mousedown(function (e) {
            innerCircle.fill({ color: HOVERBLUE })
            //radioButton.data({'isChecked':true})

            // isSelected = true;

            if (mousedownHandler != null) {
                mousedownHandler(e);
            }
        })

        //captures click event from browser
        createSelectionSpace.click(function (e) {
            // this.fill({ color: 'black'}))

            // console.log( radioSet.get(1).node)

            radioSelected(radioButton);
            innerCircle.fill({ color: BLUE })

            //radioButton.data({'isChecked':true})
            //isSelected = true;

            //console.log(e.target.previousElementSibling.previousElementSibling)
            console.log("radio clicked");

            var isChecked = radioSelected(this)
            //if checked and handler isn't null -> feed CheckedHandler. 
            if (radioButton.data('currentState') == false && checkedHandler != null) {

            }

            //otherwise unchecked and handler isn't null -> feed unCheckedHandler. 
            else if (!isChecked && uncheckedHandler) {
                uncheckedHandler(e);
                checkMarkGroup.hide();
            }
        })

        function radioSelected(radioButton) {

            //console.log(radioButton.node)
            //console.log(radioSet.get(1).node.get(1))

            //clear all selections
            // for (var i = 0; i< number; i++) {
            //     radioSet.get(i).node

            // }
            //then update

            //updated state of button to selected
            var updateState = !(radioButton.data('isChecked'));
            radioButton.data('isChecked', updateState);

            //if selected fill
            if (updateState == true) {
                //fill
                innerCircle.fill(BLUE)
            }
            else {
                innerCircle.fill('white');
            }
            return updateState;

            //else deselect




            //console.log(updateState)

            //newly selected

        }


        return {
            move: function (x, y, elem) {
                var radioButton = radioSet.get(elem);
                radioButton.move(x, y);
            },
            onclick: function (event) {
                clickEvent = event
            },
            setId: function (id, elem) {
                var radioButton = radioSet.get(elem - 1);
                radioButton.attr("id", id);
            },
            setText: function (text, elem) {
                //list[0].node.lastChild.lastChild.innerHTML = "r"

                //grab specific radio button
                var radioButton = radioSet.get(elem - 1);
                //console.log(radioButton);
                var radioText = radioButton.get(2); //cir-cir-text
                radioText.text(text);
                //console.log(radioButton);
            },

            onclick: function (event) {
                pressedHandler = event

            },
            onMouseOver: function (event) {
                mouseoverHandler = event;
            },
            /** Listener for mouse out behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseOut: function (event) {
                mouseoutHandler = event;
            },
            /** Listener for mouse press-up behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onMouseUp: function (event) {
                mouseupHandler = event;
            },
            onMouseDown: function (event) {
                mousedownHandler = event;
            },
            /** Listener for mouse click behavior
             * @memberof CheckBox
             * @param  {any} event - is a user's Mouse Event
             */
            onCheck: function (event) {
                checkedHandler = event;
            },
            onUnCheck: function (event) {
                uncheckedHandler = event;
            },

        }
    }
    /**
     * @class TextBox
     */
    var TextBox = function () {

        /*
        Visually support a caret | that informs the user about the position of the cursor. The caret should only be visually present when the widget has hover focus.(DONE)

        Expose a custom property to get the text entered by the user.(PROGRESS)

        Expose an event handler that notifies consuming code when the text has changed. (DONE)

        Expose an event handler that notifies consuming code when the widget state has changed.(DONE)
        */

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //variables
        var id;
        var clickEvent = null
        var USERTEXT = "";


        //creating textbox grouping/design
        var textBoxGroup = draw.group();
        var outerRect = textBoxGroup.rect(200, 30).stroke('black')
            .radius(10).fill('white');
        var text = textBoxGroup.text("").move(5, 0);
        var caret = textBoxGroup.line(45, 2.5, 45, 25).stroke({ width: 1, color: "black" }).x(5).y(4.5)
            .move(5, 4.5)


        var mouseOverHandler, mouseOutHandler, mouseUpHandler, mouseDownHandler, textChangeHandler = null;


        textBoxGroup.mouseover(function (e) {
            outerRect.fill({ color: 'gray' })

            if (mouseOverHandler != null) {
                mouseOverHandler(e);
            }
        })

        textBoxGroup.mouseout(function (e) {
            outerRect.fill({ color: 'white' })
            
            if(mouseOutHandler != null) {
                mouseOutHandler(e);
            }
        })

        textBoxGroup.mousedown(function (e) {
            outerRect.fill({ color: 'gray' })

            if (mouseDownHandler != null) {
                mouseDownHandler(e);
            }
        })

        textBoxGroup.mouseup(function (e) {
            outerRect.fill({ color: 'white' })

            if (mouseUpHandler != null) {
                mouseUpHandler(e);
            }
        })
        //     //captures click event from browser
        textBoxGroup.click(function (event) {
            //caret.animate().loop(1000,true,0);
            //caret.timeline().play()
            //outerRect.fill({ color: 'gray' })
            //console.log(event);

            if (clickEvent != null) {
                clickEvent = event;
            }

            //for characters only
            SVG.on(window, 'keypress', function (e) {
                logKey(e);
            })

            //for backspace and shift only
            SVG.on(window, 'keydown', function (e) {
                if (e.key === "backspace" || e.key === "shift") {

                }
                modifyText(e)
            })



        })

        function logKey(e) {

            var editedText = USERTEXT + e.key;
            USERTEXT = editedText;

            caret.x(textBoxGroup.x() + 13 + text.length())

            text.text(USERTEXT);

            return USERTEXT;

            //console.log(txt.key);

        }
        function modifyText(e) {
            if (e.key === "Backspace") {
                console.log("backspace")
                var editedText = USERTEXT.slice(0, -1);
                USERTEXT = editedText;
                //textBoxGroup.plain(USERTEXT);
                //caret.x(text.leading()+ text.length())
                caret.x(textBoxGroup.x() + 1 + text.length() - 3.5)
                text.text(USERTEXT);

                //console.log(USERTEXT);
            }
            if (textChangeHandler != null) {
                textChangeHandler(e);
            }
        }


        //methods
        return {
            move: function (x, y) {
                textBoxGroup.move(x, y);
            },
            insertText: function (userText) {
                text.text(userText);

            },
            setId: function (id) {
                textBoxGroup.attr("id", id);
            },
            getText: function () {
                //return this.node.childNodes[1].part.value
            },
            mouseDown: function (e) {
                mouseDownHandler = e;
            },
            mouseUp: function (e) {
                mouseUpHandler = e;
            },
            mouseOver: function (e) {
                mouseOverHandler = e;
            },
            mouseOut: function (e) {
                mouseOutHandler = e;
            },
            textChange: function (e) {
                textChangeHandler = e;
            },
            onClick: function (eventHandler) {
                clickEvent = eventHandler;
            },

        }
    }

    /**
     * @class ScrollBar
     */
    var ScrollBar = function () {

        /*
        Expose a custom property to set the height of the scroll bar.

        Expose a custom property to get the position of the scroll thumb.

        Expose an event handler that notifies consuming code when the scroll thumb has moved and in which direction.

        Expose an event handler that notifies consuming code when the widget state has changed.
        */
        var HEIGHT;

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //design
        var scrollBarGroup = draw.group();

        //1.vertical rectangle
        var outerRect = scrollBarGroup.rect(30, 130).stroke('black')
            .fill('none').radius;

        //2.two small squares at each end
        var topRect = scrollBarGroup.rect(30, 30).stroke('black')
            .fill('none');
        var topArrow = scrollBarGroup.polygon('50,0 60,20 40,20').move(6, 4);

        var buttomRect = scrollBarGroup.rect(30, 100).stroke('black')
            .fill('none');
        var bottomArrow = scrollBarGroup.polygon('50,20 60,0 40,0').move(6, 105);

        //3.eclipse for the dragger
        var shifter = scrollBarGroup.rect(30, 30).move(0, 30).stroke('black').fill('gray');

        //4.grip
        var grip1 = scrollBarGroup.line(0, 0, 30, 0).stroke({ color: 'black', width: 2 }).move(0, 40)
        var grip2 = scrollBarGroup.line(0, 0, 30, 0).stroke({ color: 'black', width: 2 }).move(0, 45)
        var grip3 = scrollBarGroup.line(0, 0, 30, 0).stroke({ color: 'black', width: 2 }).move(0, 50)

        return {
            move: function (x, y) {
                scrollBarGroup.move(x, y);
            },
            setId: function (id) {
                scrollBarGroup.attr("id", id);
            }
        }
    }

    /**
     * @class AddAComment
     */
    var AddAComment = function () {
        var clickEvent = null;
        var userComment = "";

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        //1.box with comment text
        //creating a group object for button
        var buttonGroup = draw.group();
        var rect = buttonGroup.rect(100, 40).fill(BLUE).radius(10);

        //add text button
        var buttonText = buttonGroup.text("Comment").fill('white').attr({ "font-size": '20' })
            .move(10, 8)

        //3. text box on side
        //creating textbox grouping/design
        var buttonTextGroup = draw.group();
        var outerRect = buttonTextGroup.rect(200, 40).stroke('black')
            .radius(10).fill('white');
        var text = buttonTextGroup.text("placeholder").move(5, 5);
        var caret = buttonTextGroup.line(45, 2.5, 45, 25).stroke({ width: 1, color: "black" });
        // buttonTextGroup.addTo(buttonGroup)
        //var totalGroup = buttonGroup.buttonTextGroup
        buttonTextGroup.move(124,40)
        buttonTextGroup.hide()

        //event handler
        var mouseOverButtonHandler, mouseOutButtonHandler, mouseDownButtonHandler, mouseUpButtonHandler, pressedUpButtonHandler = null;
        var mouseOverTextButtonHandler, mouseOutTextButtonHandler, mouseDownTextButtonHandler, mouseUpTextButtonHandler, pressedUpTextButtonHandler, keyUpHandler, keyDownHandler, textButtonChangeHandler, textButtonClickHandler = null;

        buttonGroup.mouseover(function (e) {
            outerRect.fill({ color: 'gray' })

            if (mouseOverButtonHandler != null) {
                mouseOverButtonHandler(e);
            }
        })

        buttonGroup.mouseout(function (e) {
            outerRect.fill({ color: 'white' })

            if (mouseOutButtonHandler != null) {
                mouseOutButtonHandler(e);
            }
        })

        buttonGroup.mousedown(function (e) {
            outerRect.fill({ color: 'gray' })

            if (mouseDownButtonHandler != null) {
                mouseDownButtonHandler(e);
            }
        })

        buttonGroup.mouseup(function (e) {
            outerRect.fill({ color: 'white' })

            if (mouseUpButtonHandler != null) {
                mouseUpButtonHandler(e);
            }
        })
        //     //captures click event from browser
        buttonGroup.click(function (event) {
            //caret.animate().loop(1000,true,0);
            //caret.timeline().play()
            //outerRect.fill({ color: 'gray' })
            //console.log(event);

            if (pressedUpButtonHandler != null) {
                pressedUpButtonHandler = event;
            }

            //for characters only
            SVG.on(window, 'keypress', function (e) {
                logKey(e);
            })

            //for backspace and shift only
            SVG.on(window, 'keydown', function (e) {
                if (e.key === "backspace" || e.key === "shift") {

                }
                modifyText(e)
            })



        })
        //captures click event from browser
        buttonGroup.click(function (event) {
            outerRect.fill({ color: 'gray' })

            if (pressedUpButtonHandler != null) {
                pressedUpButtonHandler = event;
            }
            SVG.on(window, 'keydown', function (e) {
                updateText(e);

            })
            // SVG.on(window,'keydown',function(e){
            //     if(e.keycode == 8 || e.keycode == 46 ){
            //         console.log('backspace is pressed')
            //     }
            // })

        })
        function logKey(e) {

            var editedText = userComment + e.key;
            userComment = editedText;

            caret.x(buttonTextGroup.x() + 13 + text.length())

            text.text(userComment);

            return userComment;

            //console.log(txt.key);

        }
        function modifyText(e) {
            if (e.key === "Backspace") {
                //console.log("backspace")
                var editedText = userComment.slice(0, -1);
                userComment = editedText;
                //buttonTextGroup.plain(userComment);
                //caret.x(text.leading()+ text.length())
                caret.x(textBoxGroup.x() + 1 + text.length() - 3.5)
                text.text(userComment);
                return userComment;

                //console.log(userComment);
            }
            if (textChangeHandler != null) {
                textChangeHandler(e);
            }
        }


        // buttonTextGroup.addEventListener("mouseover",function(event){
        //     console.log("pressed button text ")
        // })



    
        buttonGroup.mouseover(function (e) {
            rect.fill({ color: HOVERBLUE })
            // if(mouseOverTextButtonHandler!= null){
            //     mouseOverHandler(e)
            // }

        })
        buttonGroup.mouseout(function (e) {
            rect.fill({ color: BLUE })
            rect.stroke('none')
            // if(mouseOutTextButtonHandler!= null){
            //     mouseOutTextButtonHandler(e)
            // }
        })
        buttonGroup.mousedown(function (e) {
            rect.fill({ color: HOVERBLUE })

            // if(mouseDownTextButtonHandler!= null){
            //     mouseDownTextButtonHandler(e)
            // }
        })
        buttonGroup.mouseover(function(e){
            rect.fill({ color: BLUE })
            // if(mouseUpTextButtonHandler != null){
            //     mouseUpTextButtonHandler(e)
            // }
        }) 
        buttonGroup.click(function (e) {
            if (buttonTextGroup.visible()) {
                buttonTextGroup.hide()
            }
            else {
                buttonTextGroup.show()

            }

            var outRect = buttonGroup.get(0);
            outRect.fill({ color: YELLOW })
            outRect.stroke({ color: FOCUSCOLOR, width: '4' })
            if (clickEvent != null)
                clickEvent(e)

            //buttonTextGroup.show()
        })  




        //for backspace and shift only
        SVG.on(window, 'keydown', function (e) {
            if (e.key === "backspace" || e.key === "shift") {
                console.log("here");

            }
            modifyText(e)
            if (textButtonChangeHandler != null) {
                textButtonChangeHandler(e);
            }

        })

        function modifyText(e) {
            console.log(e)
            if (e.key === "Backspace") {
                console.log("backspace")
                var editedText = userComment.slice(0, -1);
                userComment = editedText;
                text.text(userComment);
                //console.log(userComment);
            }
        }

        function updateText(txt) {

            if (txt.key == "Backspace") {
                console.log('backspace is pressed')
                //remove last character from string
            }
            else if (txt.key == "ShiftLeft" || txt.key == "Shift") //if shift
                console.log("shift pressed");
            // console.log("txt.key")
            // userComment += txt.key
            // text.text(userComment);
        }
        function logKey(e) {

            var editedText = userComment + e.key;
            userComment = editedText;

            caret.x(buttonTextGroup.x() + 13 + text.length())

            text.text(userComment);

            //return userComment;

            //console.log(txt.key);

        }

        return {
            setId: function (id) {
                buttonGroup.attr("id", id);
            },
            textChange: function (e) {
                textButtonChangeHandler = e;
            },
            /**
             * 
             * Move object
             * @memberof AddAComment
             * @param  {number} x - is a horizontal value
             * @param  {number} y - is a vertical value
             */
            move: function (x, y) {
                buttonGroup.move(x, y);
            },
            /** Listener for mouse over behavior
             * @memberof AddAComment
             * @param  {any} event - is a user's Mouse Event
             */
             mouseover: function (event) {
                mouseOverButtonHandler = event;
            },
            /** Listener for mouse out behavior
             * @memberof AddAComment
             * @param  {any} event - is a user's Mouse Event
             */
            mouseout: function (event) {
                mouseOutButtonHandler = event;
            },
            /** Listener for mouse press-down behavior
             * @memberof AddAComment
             * @param  {any} event - is a user's Mouse Event
             */
            mousedown: function (event) {
                mouseDownButtonHandler = event;
            },
            mouseup: function (event) {
                mouseUpButtonHandler = event;
            },
            /** Listener for mouse click behavior
             * @memberof AddAComment
             * @param  {any} event - is a user's Mouse Event
             */
            onClick: function (event) {
                pressedHandler = event;
            },
            /* mouseove: function(event){
                mouseOverTextButtonHandler = event;
            },
            mouseoutTextBox: function(event){
                mouseOutTextButtonHandler = event;
            },
            mouseDownTextBox: function(event){
                mouseOutTextButtonHandler = event;
            },
            mouseUpTextButton: function(event){
                mouseUpTextButtonHandler = event;
            }
             */
            //var mouseOverTextButtonHandler, mouseOutTextButtonHandler, mouseDownTextButtonHandler, mouseUpTextButtonHandler, pressedUpTextButtonHandler, keyUpHandler, keyDownHandler, textButtonChangeHandler, textButtonClickHandler = null;


        }
    }

    /**
     * @class ToggleSwitch
     */
    var ToggleSwitch = function(){

        var isOn = false;
        var WIDTH = 0;
        var HEIGHT = 0;

        //creating SVG space
        var draw = SVG().addTo('body').size('100%', '100%');

        var toggleGroup = draw.group();
        var rect = toggleGroup.rect(50, 20).fill(BLUE).radius(13);

        var circle = toggleGroup.circle(20).fill('white').x(WIDTH).y(HEIGHT)

        var toggleOnHandler, toggleOffHandler = null

        circle.addTo(toggleGroup);
        //on click -> move circle on x direction to the end of the rect
        circle.click(function(e){
            isOn = !isOn

            if(isOn){
                this.x(WIDTH + 35)
                rect.fill(YELLOW);
                toggleOnHandler(e)
            }
            else{
                this.x(WIDTH);
                rect.fill(BLUE);
                toggleOffHandler(e);
            }


        })


        // function drag(e){
           
        // }
        return{
            move: function(x,y){
                toggleGroup.move(x,y)
                WIDTH = x;
                HEIGHT = y;
            },
            toggleOn: function(e){
                toggleOnHandler = e;
            },
            toggleOff: function(e){
                toggleOffHandler = e;
            }
        }


    }
    return { Button, CheckBox, ProgressBar, RadioButton, TextBox, ScrollBar, AddAComment, ToggleSwitch }
}()); //end of tool kit

export { MyToolkit }