"use strict";
function countWordOccurrences(sentence, word) {
    const words = sentence.toLowerCase().split(" ");
    const targetWord = word.toLowerCase();
    let count = 0;
    for (let w of words) {
        if (w === targetWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
