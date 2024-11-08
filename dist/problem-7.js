"use strict";
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - this.year;
        return `${carAge} (assuming current year is ${currentYear})`;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
