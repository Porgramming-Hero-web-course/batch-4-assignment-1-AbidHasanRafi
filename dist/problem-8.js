"use strict";
function validateKeys(obj, keys) {
    const doesExist = keys.every(key => key in obj);
    return doesExist;
}
const sample = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(sample, ["name", "age"]));
