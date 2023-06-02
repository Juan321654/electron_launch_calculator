const { ipcRenderer } = require('electron');

// Function to launch the Windows calculator
function launchCalculator() {
  ipcRenderer.send('launchCalculator');
}

// Listen for a button click event in your renderer process
document.addEventListener('DOMContentLoaded', () => {
  const calculatorButton = document.getElementById('calculatorButton');
  calculatorButton.addEventListener('click', () => {
    launchCalculator();
  });
});
