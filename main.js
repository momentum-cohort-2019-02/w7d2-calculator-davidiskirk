
(function() {
    "use strict";
//shortcut to get elements from page
let el = function(element) {
    if (element.charAt(0) === "#"){ //if passed an Id
        return document.querySelector(element); //returns a single element
    }
    return document.querySelectorAll(element); // otherwise returns a list of nodes

};

//setting up some variables to be used
let view = el("#viewer"), /// screen where calculations are displayed
    equals = el("#equals"), // equals button
    nums = el(".num "), //number list
    ops = el(".ops"), /// operator list
    theNum = "", ///current number
    oldNum = "", //First number
    resultNum,  //result
    operator;  ///???

/// when number is clicked get the current number selected
let setNum = function() {
    if (resultNum) { /// if a result is displayed, reset number
        theNum = this.getAttribute("data-num");
        resultNum = "";
    } else { ///otherwise add digit to previous number (a string)
        theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; /// display current number

    };

/// when operator is clicked pass number to oldNum and save operator

var moveNum = function() {
    oldNum = theNum;
    theNum = '';
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); ///reset result in attribute
};

//when equals is clicked it will calculate result 
var displayNum = function() {
    /// convert string input into numbers (floats)
    oldNum = parseFloat(oldNum);
    theNum = parsefloat(theNum);

    ///performn operation

    switch (operator) {
        case "plus":
            result = oldNum + theNum;
            break;
        case "minus":
            resultNum = oldNum - theNum;
            break;
        case "times":
            resultNum = oldNum * theNum;
            break;

        case "divided by":
            resultNum = oldNum / theNum;
            break;

        default:
        resultNum = theNum;

    }
    

    }

    //display result!

    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);


    // reset oldNum & keeo results

    oldNum = 0;
    theNum = resultNum;

let clearAll = function(){
    oldNum = "";
    theNum = '';
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);

};

//CLICK EVENTS HOOYAH

///add click events to numbers

for (let i =0, l = nums.Length; i < l; i++){
    nums[i].onclick = setNum;
}
//add click events to operators
for (let i = 0, l = ops.lemgth; i < l; i++){
    ops[i].onclick = moveNum;
}

///add click event to equal sign

equals.onclick = displayNum;

///add click to reset button

el("#clear").onclick = function(){
    window.location = window.location;

};

}());


