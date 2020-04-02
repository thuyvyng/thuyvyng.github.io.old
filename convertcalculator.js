function convert() {
    var number1 = document.getElementById("number").value;
    var number2type = document.getElementById("convertType").value;

    //validate input
    
    if (number1 === "") {
        alert("Please enter values");
        return;
    }
    value = parseInt(number1);
    if (value < 0) {
        alert("Please enter values");
        return;
    }
    var converted;
    switch(number2type){
        case "binary":
            converted = parseInt(value, 10).toString(2);
            break;
        case 'octal':
            converted = parseInt(value, 10).toString(8);
            break;
        case "hex":
            converted = parseInt(value, 10).toString(16);
            break;
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("tiptotal").style.display = "block";
    document.getElementById("tiptotal").innerHTML = "= " + converted;
    
}

//Hide the tip amount on load
document.getElementById("tiptotal").style.display = "none";
document.getElementById("result").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function () {
    convert();

};