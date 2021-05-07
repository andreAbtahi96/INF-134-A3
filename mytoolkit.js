// File name: mytoolkit.js
import { SVG } from './svg.min.js'

var MyToolkit = (function() {

    //creating the window

    /*
    INPROGRESS:
        -custom label to set text
        -expose event handler that notifies cosuming code when checked state has changed.
        -Expose an event handler that notifies consuming code when the widget state has changed

        
    TODO:

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
COMPLETE: 
    -Fix check state of checkbox

INPROGRESS:
    -Fix check state of checkbox
    
TODO:
    -expose a custom label property to set text on the right of checkbox
    -expose event handler that notifies cosuming code when checked state has changed.
    -Expose an event handler that notifies consuming code when the widget state has changed
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
        Create progress bar components
            -rect with border radius
            -fill(width given)
    */

    //creating SVG space
    var draw = SVG.addTo('body').size('100%, 100%').move(20,20);

    //creating progress bar grouping
    progressBarGroup = draw.group();

        //rectangle
        var rect = progressBarGroup.rect(100,30).stroke('black')
        .attr({"border-radius":"5px"});


}
return {Button,CheckBox,ProgressBar}
}()); //end of tool kit

export{MyToolkit}