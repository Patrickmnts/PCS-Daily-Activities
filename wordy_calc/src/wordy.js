// Wordy Calculator
// Write a program that takes a word problem in the format:
// What is 5 plus 13?
// and returns the answer as an integer.
// The program should handle large numbers and negative numbers.
// Use the tests to drive your solution by deleting the skip in one test at a time.

  function Calculate(question) {

    var nArray = question.match(/What is (-?\d+) (plus|minus|times|over) (-?\d+)/);
    var operand = nArray[2];

      if(operand == 'plus') {
          return parseInt(nArray[1], 10) + parseInt(nArray[3], 10);
      } else if (operand == 'minus') {
          return parseInt(nArray[1], 10) - parseInt(nArray[3], 10);
      } else if (operand == 'times') {
          return parseInt(nArray[1], 10) * parseInt(nArray[3], 10);
      } else if (operand == 'over') {
          return parseInt(nArray[1], 10) / parseInt(nArray[3], 10);
      } else {
          console.log("Cannot Compute...");
      }

    console.log(nArray[0]);
    console.log(nArray[1]);
    console.log(nArray[2]);
    console.log(nArray[3]);
  };
