// var outputElement = document.getElementById("result1");
// function run_example01() {
//   var bigger = parseInt(document.getElementById("first-tb").value);
//   var smaller = parseInt(document.getElementById("second-tb").value);

//   if (smaller> bigger)
//   {
//       bigger = smaller;
//   }  

//   outputElement.innerHTML = "The greater number is: " + bigger;  
// }

// function run_example02(){
//   var s = document.getElementById("first-tb").value;
//   var number = parseInt(s);

//   if (typeof(number)==="number")
//     {
//        if (number % 2 == 0)
//         {
//           outputElement.innerHTML = "This number is even.";
//         }
//        else
//        {
//         outputElement.innerHTML = "This number is odd.";
//        }       
//     }
//   else {
//         outputElement.innerHTML = "Not a number";
//   }

// }

function run_example03() {

    var x = parseFloat(document.getElementById("second-tb").value);
    var f;

    if ((-2 <= x) && (x < 2)) {
        f = x;
    } else {
        f = 4;
    }



}

function run_example04() {

    var x = parseInt(document.getElementById("second-tb").value);
    var f1 = x * x + 4 * x + 5;


    if ((-2 <= x)) {

        f1 = x;

    } else {

        1 / f1;
    }

    outputElement.innerHTML = "Result is : " + f1;

}