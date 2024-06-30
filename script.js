// Roman numeral to integer conversion function
function romanToInt(input) {
    // Convert the input to uppercase to handle case insensitivity
    input = input.toUpperCase();

    // Regular expression to check for invalid patterns like "VIIII", "XXXX", etc.
    const invalidPattern = /(IIII|VIIII|XXXX|LXXXX|CCCC|DCCCC|MMMM)/;

    // Check if input contains any invalid patterns
    if (invalidPattern.test(input)) {
        throw new Error('Invalid Roman numeral: ' + input);
    }

    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < input.length; i++) {
        let currentNumeral = romanToIntMap[input[i]];
        let nextNumeral = romanToIntMap[input[i + 1]];

        // If the current numeral is less than the next numeral, subtract it (e.g., IV = 4, IX = 9)
        if (nextNumeral && currentNumeral < nextNumeral) {
            result -= currentNumeral;
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

// Event listener for the Convert button
document.getElementById("convertBtn").addEventListener("click", function() {
    // Get the input value from the text box
    let inputText = document.getElementById("text").value;

    try {
        // Convert Roman numeral to integer (case insensitive)
        let output = romanToInt(inputText);

        // Display the output
        document.getElementById("output").innerText = output;
        
    } catch (error) {
        // Display error message
        alert(error.message);
    }
});
