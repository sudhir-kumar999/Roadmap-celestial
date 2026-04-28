"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function narrow(details) {
    if (typeof details === 'string') {
        console.log(details.toUpperCase());
    }
    else if (typeof details === 'number') {
        console.log(details * 10);
    }
}
// let details="sudhir"
let details = 10;
// narrow(details)
// Exhaustive check
function beverages(size) {
    if (size === 'small') {
        console.log("small cup");
    }
    if (size === 'medium' || size === "large") {
        console.log("medium with large");
    }
    console.log(size);
}
function isOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== 'null' &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serve(item) {
    if (isOrder(item)) {
        return `serving ${item.type}`;
    }
    return `custom {$itme}`;
}
//# sourceMappingURL=typeNarrowing.js.map