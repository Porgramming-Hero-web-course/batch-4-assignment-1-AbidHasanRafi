"use strict";
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
