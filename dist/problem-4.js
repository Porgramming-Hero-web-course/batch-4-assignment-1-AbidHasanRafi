"use strict";
function calculateShapeArea(shape) {
    let area;
    if (shape.shape === "circle") {
        area = Math.PI * shape.radius * shape.radius;
    }
    else {
        area = shape.width * shape.height;
    }
    return parseFloat(area.toFixed(2));
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
