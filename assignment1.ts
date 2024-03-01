let numb: number = 369;
let str: string = "Meghana";
let boo: boolean = false;
let arrnum: number[] = [123,3,403,23298,3,2374,3,0];
// for a tuple theres no keyword, its just array of values with type defined for each element 
let tup: [string, number] = ["Akrivia", 234];
enum dOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}


//FUNCTIONS
//type of arguments and the return type represented as--> ": typeofvals"
function addNum(a: number, b: number): number{
    return a+b;
}

function capitalise(s: string): string{
    return s.toUpperCase();
}

console.log(addNum(123,7837));
console.log(capitalise("megs"));

//INTERFACES
//creating an interface personInterface, with name, age, email as properties
interface personInterface {
    name: string;
    age: number;
    email: string;
}

//declaring a variable user
//personInterface is the name of the interface created above
let user: personInterface = {
    name: "Meghana Barla",
    age: 21,
    email: "siam@gmail.com"
}


//CLASSES
//access modifier(public) is optional 
class car {
    make: string;
    model: string;
    year: number;

    //initialising the properties of the car 
    public constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //displayInfo method for consoling the info
    public displayInfo(): void{
        console.log(`Car details : ${this.make}, ${this.model}, ${this.year}`);
    }
}

let myCar = new car("Swift", "Jaguar", 2024);
myCar.displayInfo();

//GENERICS
//makes the type more "generalised", considers the passed arguments as the type and assigns it to <T> in this case.
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

let num: number[] = [1, 2, 3, 4, 5];
let reversedNum: number[] = reverseArray(num);
console.log(reversedNum); 



