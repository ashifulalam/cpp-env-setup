function roundIt(n) {
    // Convert the number to a string and split at the decimal point
    let parts = n.toString().split('.');
    
    // Count the number of digits on the left and right of the decimal point
    let leftDigits = parts[0].length;   // Number of digits on the left side
    let rightDigits = parts[1].length;  // Number of digits on the right side
  
    // Apply the appropriate rounding method
    if (leftDigits < rightDigits) {
      // If there are fewer digits on the left, round up
      return Math.ceil(n);
    } else if (leftDigits > rightDigits) {
      // If there are more digits on the left, round down
      return Math.floor(n);
    } else {
      // If the digits are equal on both sides, round normally
      return Math.round(n);
    }
  }
  