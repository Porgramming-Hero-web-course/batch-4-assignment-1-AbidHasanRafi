"use strict";
function removeDuplicates(n) {
    const uniqueNums = [];
    for (let i = 0; i < n.length; i++) {
        if (!uniqueNums.includes(n[i])) {
            uniqueNums.push(n[i]);
        }
    }
    return uniqueNums;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
