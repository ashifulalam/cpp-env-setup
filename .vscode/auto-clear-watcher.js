const fs = require('fs');
const path = require('path');

const workspaceDir = path.join(__dirname, '..');
const filesToWatch = ['testJS.js', 'testcpp.cpp'];
const inputTxt = path.join(workspaceDir, 'input.txt');
const outputTxt = path.join(workspaceDir, 'output.txt');

filesToWatch.forEach(file => {
  const filePath = path.join(workspaceDir, file);
  
  // Create file if it doesn't exist so we can watch it
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }

  // Watch for changes
  fs.watch(filePath, (eventType) => {
    if (eventType === 'change') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        // If the file is completely empty or just whitespace
        if (content.trim() === '') {
          fs.writeFileSync(inputTxt, '');
          fs.writeFileSync(outputTxt, '');
        }
      } catch (e) {
        // Ignore read errors
      }
    }
  });
});

console.log("Watching testJS.js and testcpp.cpp for auto-clear...");
