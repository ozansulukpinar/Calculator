var calculation = "";
var signs = ["+", "-", "*", "/"];

$("#main").on("click", ".box", function () {
  var id = jQuery(this).closest("th").attr("id");

  if (id === "=") {
    if (
      calculation === "" ||
      (calculation.indexOf("+") < 0 &&
        calculation.indexOf("-") < 0 &&
        calculation.indexOf("*") < 0 &&
        calculation.indexOf("/") < 0)
    ) {
      // do nothing
    } else {
    // make calculation
            var indexes = [
        calculation.indexOf("+"),
        calculation.indexOf("-"),
        calculation.indexOf("*"),
        calculation.indexOf("/")
      ];
      
            var temp = 0;
      var tempIndex = 0;

      for (var index in indexes) {
        if (indexes[index] != -1) {
          temp = signs[index];          
          tempIndex = index;
        }
      }

      var firstNumber = calculation.substring(0,
        calculation.indexOf(temp));
      var secondNumber = calculation.substring(
        calculation.indexOf(temp) + 1
      );     
      
      var result;
      
      switch(tempIndex){
        case "0":
      result = Number(firstNumber) + Number(secondNumber);          
          break;
        case "1":
          result = Number(firstNumber) - Number(secondNumber);          
          break;
        case "2":
          result = Number(firstNumber) * Number(secondNumber);          
          break;
        case "3":
          result = Number(firstNumber) / Number(secondNumber);          
          break;
        default:
          // do nothing
      }
      
      $("#result").text(result);
      
      result = result + "";
      if(result  === "Infinity" || result === "NaN"){        
        calculation = "";
      }
      else{
        calculation = result;   
      }
    }
  } else if (id === "C") {
    // delete current calculation
    calculation = "";
    $("#result").text("");
  } else if (id === "+" || id === "-" || id === "*" || id === "/") {
    if (
      calculation.indexOf("+") >= 0 ||
      calculation.indexOf("-") >= 0 ||
      calculation.indexOf("*") >= 0 ||
      calculation.indexOf("/") >= 0
    ) {
      // do nothing
    } else {
      if (calculation === "") {
        calculation = "0";
      }
      calculation = calculation + id;
      $("#result").text(calculation);
    }
  } else if (id === ".") {    
    if (calculation.indexOf(".") < 0) {
      // there is no point
      if (calculation === "") {
        // do nothing
      } else {
        calculation = calculation + id;
        $("#result").text(calculation);
      }
    } else if (
      calculation.indexOf("+") >= 0 ||
      calculation.indexOf("-") >= 0 ||
      calculation.indexOf("*") >= 0 ||
      calculation.indexOf("/") >= 0
    ) {
      var indexes = [
        calculation.indexOf("+"),
        calculation.indexOf("-"),
        calculation.indexOf("*"),
        calculation.indexOf("/")
      ];

      var temp = 0;

      for (var index in indexes) {
        if (indexes[index] != -1) {
          temp = signs[index];
        }
      }

      var temporaryCalculation = calculation.substring(
        calculation.indexOf(temp) + 1
      );
      if (temporaryCalculation.indexOf(".") < 0) {
        calculation = calculation + id;
        $("#result").text(calculation);
      } else {
        // do nothing
      }
    } else if (
      calculation.indexOf(".") >= 0 &&
      (calculation.indexOf("+") < 0 ||
        calculation.indexOf("-") < 0 ||
        calculation.indexOf("*") < 0 ||
        calculation.indexOf("/") < 0)
    ) {
      // do nothing
    }
  } else if (id === "result") {
    // do nothing
  }
  else {
    calculation = calculation + id;
    $("#result").text(calculation);
  }
});
