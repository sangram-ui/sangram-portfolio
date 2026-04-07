let endListener = false;

clickElement.addEventListener("click", () => {
  if (endListener) {
    endListener = false;
  } else {
    endListener = true;
  }
});

video.addEventListener("ended", () => {
  if (endListener) return console.log("listener ended");

  //endListener =false then below code runs

  console.log("Video has ended");
});





// function replaceVowelsAtEvenIndex(str) {
//     let vowels = "aeiouAEIOU";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0 && vowels.includes(str[i])) {
//             result += "0";
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }


// // Example usage
// let input = "HelloWorld";
// let output = replaceVowelsAtEvenIndex(input);

// console.log("Original:", input);
// console.log("Modified:", output);






// function replaceSpaces(str) {
//     return str.replace(/ /g, "-");
// }

// // Example usage
// let input = "Hello World JavaScript";
// let output = replaceSpaces(input);

// console.log("Original:", input);
// console.log("Modified:", output);






function removeDigits(str) {
    return str.replace(/[0-9]/g, "");
}

// Example usage
let input = "abc123def456";
let output = removeDigits(input);

console.log("Original:", input);
console.log("Modified:", output);