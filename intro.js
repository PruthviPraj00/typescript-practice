"use strict";
var user = { name: "Jack", age: 32 };
console.log("asdasdas");
console.log("user.name: ", user.name);
// Array -----------------
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3]; // Genric type
var arr3 = ["hello", "world"];
var arr4 = ["hello", "asad"]; // Genric type
var arr5 = [1, 2, 3, "hello", true];
var arr6 = [1, 2, 3, "hello", true]; // Genric type
var arr7 = [1, 2, 3, "hello", true]; // Union type 
var arr8 = [1, 2, 3, "hello", true]; // Genric type
var arr9 = [1, 2, 3, "hello", true];
var arr10 = [1, 2, 3, "hello", true]; // Genric type
var arr12 = [1, 2, 3, "hello", true]; // Union type 
var arr11 = [1, 2, 3, "hello", true]; // Genric type
// Using the Array constructor to create an array with a specific length
var array1 = new Array(3); // Creates an array of length 3 with undefined values
// Using the Array constructor with initial values
var array2 = new Array(1, 2, 3); // Creates an array with the specified values [1, 2, 3]
// Using the Array constructor with the generic type parameter
var array4 = new Array(1, 2, 3); // Equivalent to array2
// Array within array
var array5 = [[1, 2, 3], [4, 5]];
// Tuple Array-----------------
// Tuple with fixed length and specific element types
var tuple1 = [1, "hello"];
// Tuple with mixed types
var tuple2 = [42, "world", true];
// Tuple with inferred types (type inference based on values)
var tuple3 = [1, "hello"];
// Tuple using Array constructor
var tuple4 = new Array(1, "hello");
// Readonly tuple
var tuple5 = [1, "hello"];
// Tuple with union types and readonly
var tuple6 = [1, 2, "hello", true];
//Object-----------------
/// Object Types + Interface
const obj1 = { name: "John", age: 30 }; //basic
// Optional properties
const obj2 = { name: "John" }; // age can be undefined or number
// Readonly properties
const obj3 = { name: "John", age: 30 }; // name cannot be changed
// Index signature
const obj4 = { age: 30 }; // ket must be string
// Function type
const obj5 = {
    sayHello: (name) => `Hello ${name}`,
}; // sayHello is a function that takes a string and returns a string
obj5.sayHello("John"); // Hello John
// Object type with union
const obj6 = { name: "John" }; // basically or operator
// Object type with intersection
const obj7 = { name: "John", age: 30 }; // basically and operator
// Object type with call signature
const obj8 = (name) => `Hello ${name}`; //   call signature is shorthand function
// Object type with construct signature
const obj9 = class {
};
// Object type with generic call signature
const obj10 = (arg) => arg;
// Object type with generic index signature
const obj12 = { age: 30 };
// Object type with generic function type
const obj13 = (arg) => arg;
const obj14 = (arg) => arg;
// Object type with generic class
class GenericNumber {
    zeroValue;
    add;
}
const obj15 = new GenericNumber(); // number is the type argument
obj15.zeroValue = 0;
obj15.add = (x, y) => x + y;
// Enum-----------------
//Enum with numeric values
//if we dont assign value it will start from 0
// each value can be assigned to a different number
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//Enum with string values
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
//Enum with mixed values
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
;
;
// Function-----------------
// Function with return and parameter type
function add(x, y) {
    return x + y;
}
// Function with void type
function log(message) {
    console.log(message);
}
// Function with optional parameter
function sum(x, y) {
    return x + (y || 0);
}
// Function with default parameter
function sum2(x, y = 0) {
    return x + y;
}
// Function with named parameter
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
// Function with rest parameter
function sum3(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Function with function type parameter
function sum4(numFunc) {
    return numFunc();
}
// Casting-----------------.
// Casting with as
const someValue = "this is a string";
const strLength = someValue.length;
// Casting with angle-bracket <>
const someValue2 = "this is a string";
const strLength2 = someValue2.length;
// Force casting with !
let x = "hello";
console.log(x.length);
// TypeScript Basic Generics-----------------
// Generic function
function identity(arg) {
    return arg;
}
// Generic class
class GenericNumber2 {
    zeroValue;
    add;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
let Todo = {
    title: "Clean room",
};
// make it required
const obj = { a: 5, b: "hello" };
// Record type is to define specific type and value type 
const asd = { hello: 2 };
const Movie = {
    title: "Clean room",
    description: "Clean my room",
};
const Lord = {
    completed: true,
};
const val = 2;
const vas = { x: 2 };
const point = {
    x: 10,
    y: 20
};
function getKey(person, key) {
    console.log(person[key]);
}
getKey({ name: "John", age: 30 }, "name");
function getAge(person) {
    return person?.age;
}
let age = { name: "John", age: 30 };
console.log(getAge(age)); // 30
// Nullish coalescing operator ??
const namea = null ?? "default string";
console.log(namea); // "default string"
// Null Assertion Operator !.
function liveDangerously(x) {
    console.log(x.toFixed()); // Error if x is null or undefined
}
// Youtube https://www.youtube.com/watch?v=30LWjhZzg50&t=18s&ab_channel=freeCodeCamp.org
// strict mode
let aslo;
// Class-------------
class User {
    email;
    name;
    city;
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const user1 = new User("asd", "asd", "asd");
// shortform of above
class User2 {
    email;
    name;
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
// Getter and Setter
class User3 {
    email;
    name;
    _count = 0;
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getCount() {
        return this._count;
    }
    set setcount(count) {
        this._count++;
    }
}
// Access Modifier
// inhertence 
// If we want to inheret 1 a proerty but dont want it to be accessable outsite we can use protected
class NewUser extends User3 {
    isFriend = false;
}
//  Abstract class
class TakePhto {
    cameraMode;
    string;
    constructor(cameraMode, string) {
        this.cameraMode = cameraMode;
        this.string = string;
    }
    getReel() {
        return 6;
    }
}
class TakeVideo extends TakePhto {
    constructor(cameraMode, string) {
        super(cameraMode, string);
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
}
const has = new TakeVideo("asd", "asd");
// Generic class
function echo(arg) {
    return arg;
}
class GenericClass {
    props;
    constructor(props) {
        this.props = props;
    }
}
echo(3);
const genericClass = new GenericClass("Hello, world");
const getSet = (products) => {
    return products[0];
};
const getSet2 = (products) => {
    return products;
};
function redirect(usr) {
    if ("role" in usr) {
        console.log(usr.role);
    }
    else {
        console.log(usr.email);
    }
}
// instanceof Operator
function las(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
// switch
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        default:
            const _defautl = s;
            return _defautl;
    }
}
// if else
function area2(s) {
    if (s.kind === "square") {
        return s.size * s.size;
    }
    else {
        return s.height * s.width;
    }
}
// The never type and Exhaustiveness checking
