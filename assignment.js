var numb = 369;
var str = "Meghana";
var boo = false;
var arrnum = [123, 3, 403, 23298, 3, 2374, 3, 0];
// for a tuple theres no keyword, its just array of values with type defined for each element 
var tup = ["Akrivia", 234];
var dOfWeek;
(function (dOfWeek) {
    dOfWeek[dOfWeek["Sunday"] = 0] = "Sunday";
    dOfWeek[dOfWeek["Monday"] = 1] = "Monday";
    dOfWeek[dOfWeek["Tuesday"] = 2] = "Tuesday";
    dOfWeek[dOfWeek["Wednesday"] = 3] = "Wednesday";
    dOfWeek[dOfWeek["Thursday"] = 4] = "Thursday";
    dOfWeek[dOfWeek["Friday"] = 5] = "Friday";
    dOfWeek[dOfWeek["Saturday"] = 6] = "Saturday";
})(dOfWeek || (dOfWeek = {}));
//FUNCTIONS
//type of arguments and the return type represented as--> ": typeofvals"
function addNum(a, b) {
    return a + b;
}
function capitalise(s) {
    return s.toUpperCase();
}
console.log(addNum(123, 7837));
console.log(capitalise("megs"));
//declaring a variable user
//personInterface is the name of the interface created above
var user = {
    name: "Meghana Barla",
    age: 21,
    email: "siam@gmail.com"
};
//CLASSES
//access modifier(public) is optional 
var car = /** @class */ (function () {
    //initialising the properties of the car 
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //displayInfo method for consoling the info
    car.prototype.displayInfo = function () {
        console.log("Car details : ".concat(this.make, ", ").concat(this.model, ", ").concat(this.year));
    };
    return car;
}());
var myCar = new car("Swift", "Jaguar", 2024);
myCar.displayInfo();
//GENERICS
//makes the type more "generalised", considers the passed arguments as the type and assigns it to <T> in this case.
function reverseArray(arr) {
    return arr.reverse();
}
var num = [1, 2, 3, 4, 5];
var reversedNum = reverseArray(num);
console.log(reversedNum);
