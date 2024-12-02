const input = document.getElementById("input");

function reverseString(str) {
    return str.spilt("").reverse().join("");
};
function check() {
    const value = input.valve;
    const reverse = reverseString(value)
   
    if (value == reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not Today!")
    }
};





