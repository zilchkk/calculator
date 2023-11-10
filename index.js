document.addEventListener("DOMContentLoaded",  () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    
    // Add a click event listener to each button
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (buttonText === "=") {
          try {
            currentInput = eval(currentInput);
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
        } else if (buttonText === "C") {
          currentInput = "";
          display.value = "";
        } else {
          currentInput += buttonText;
          display.value = currentInput;
        }
      });
    });
  });
  

//   document.addEventListener("DOMContentLoaded", function () {
//     // This part ensures that the JavaScript code runs after the HTML document has fully loaded.
  
//     const display = document.getElementById("display");
//     // This line selects the HTML element with the ID "display" and stores it in the 'display' variable.
    
//     const buttons = document.querySelectorAll(".button");
//     // This line selects all HTML elements with the class "button" and stores them in the 'buttons' variable as a list.
    
//     let currentInput = "";
//     // This variable is used to keep track of the current input or calculation.
  
//     // Add a click event listener to each button
//     buttons.forEach(button => {
//       // This loop iterates over each button element in the 'buttons' list.
      
//       button.addEventListener("click", function() {
//         // This code adds a click event listener to each button.
  
//         const buttonText = button.innerText;
//         // This line retrieves the text content (the text inside the button) of the clicked button and stores it in the 'buttonText' variable.
  
//         if (buttonText === "=") {
//           // If the clicked button is "=", we perform the calculation and display the result.
  
//           try {
//             currentInput = eval(currentInput);
//             // The 'eval' function takes the 'currentInput' (a string representing a mathematical expression), calculates it, and stores the result back in 'currentInput'.
            
//             display.value = currentInput;
//             // The result is displayed in the 'display' input field.
  
//           } catch (error) {
//             // If there is an error during calculation (e.g., if the input is not a valid mathematical expression), we catch the error and handle it.
  
//             display.value = "Error";
//             // "Error" is displayed in the 'display' input field to indicate a problem.
  
//           }
//         } else if (buttonText === "C") {
//           // If the clicked button is "C," we clear the input and display.
  
//           currentInput = "";
//           // The 'currentInput' is reset to an empty string.
  
//           display.value = "";
//           // The 'display' input field is cleared.
  
//         } else {
//           // If the clicked button is a number, operator, or decimal point, we add it to the current input.
  
//           currentInput += buttonText;
//           // The clicked button's text is appended to the 'currentInput'.
  
//           display.value = currentInput;
//           // The updated 'currentInput' is displayed in the 'display' input field.
  
//         }
//       });
//     });
//   });
  



