//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var totaltip = billAmt * serviceQual;
  totaltip = totaltip.toFixed(2);
  var totalBill = parseFloat(totaltip) + parseFloat(billAmt);
  var personBill = totalBill / parseInt(numOfPeople);
  totalBill = totalBill.toFixed(2);
  personBill = personBill.toFixed(2);

  var persontip = totaltip / parseInt(numOfPeople);
  //round to two decimal places
  persontip = Math.round(persontip * 100) / 100;
  //next line allows us to always have two digits after decimal point
  persontip = persontip.toFixed(2);

  //Display the tip

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("btotal").innerHTML = totalBill;
  document.getElementById("ptotal").innerHTML = personBill;
  document.getElementById("tip").innerHTML = persontip;
  document.getElementById("tiptotal").innerHTML = totaltip;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
