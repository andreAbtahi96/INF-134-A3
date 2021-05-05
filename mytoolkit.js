// File name: mytoolkit.js
import { SVG } from './svg.min.js'

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var rect = draw.rect(100,50).fill('red')
        var clickEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'blue'})
        })
        rect.mouseout(function(){
            this.fill({ color: 'red'})
        })
        rect.mouseup(function(){
            this.fill({ color: 'red'})
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }//Button
        
return {Button}

// //in progress
// var CheckBox = function(){
//     var draw = SVG().addTo('body').size('100%','100%');
//     var box = draw.rect(100,50).fill('blue')

//     return {
//         move: function(x, y) {
//             rect.move(x, y);
//         }
//     }
// }//CheckBox
// return {CheckBox}


}()); //end of tool kit

export{MyToolkit}