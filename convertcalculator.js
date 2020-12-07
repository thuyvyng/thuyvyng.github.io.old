function convert() {
    var number1 = document.getElementById("number").value;

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
    var converted = parseInt(value, 10).toString(2);
    var converted2= parseInt(value, 10).toString(8);
    var converted3 = parseInt(value, 10).toString(16);

    document.getElementById("result").style.display = "block";
    document.getElementById("tiptotal").style.display = "block";
    document.getElementById("tiptotal").innerHTML = "Binary = " + converted;

    document.getElementById("tiptotal2").style.display = "block";
    document.getElementById("tiptotal2").innerHTML =  "Octal = " + converted2;

    document.getElementById("tiptotal3").style.display = "block";
    document.getElementById("tiptotal3").innerHTML = " Hex = " + converted3;
    
}

//Hide the tip amount on load
document.getElementById("tiptotal").style.display = "none";
document.getElementById("result").style.display = "none";

document.getElementById("tiptotal2").style.display = "none";

document.getElementById("tiptotal3").style.display = "none";



//click to call function
document.getElementById("calculate").onclick = function () {
    convert();

};