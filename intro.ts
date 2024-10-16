var user = { name: "Jack", age: 32 };

console.log("asdasdas");
console.log("user.name: ", user.name);

// Array -----------------

var arr1: number[] = [1, 2, 3];
var arr2: Array<number> = [1, 2, 3]; // Genric type

var arr3: string[] = ["hello", "world"];
var arr4: Array<string> = ["hello", "asad"]; // Genric type

var arr5: any[] = [1, 2, 3, "hello", true];
var arr6: Array<any> = [1, 2, 3, "hello", true]; // Genric type

var arr7: (number | string | boolean)[] = [1, 2, 3, "hello", true]; // Union type 
var arr8: Array<number | string | boolean> = [1, 2, 3, "hello", true]; // Genric type

var arr9: readonly any[] = [1, 2, 3, "hello", true];
var arr10: ReadonlyArray<any> = [1, 2, 3, "hello", true]; // Genric type
var arr12: readonly (number | string | boolean)[] = [1, 2, 3, "hello", true]; // Union type 
var arr11: ReadonlyArray<number | string | boolean> = [1, 2, 3, "hello", true]; // Genric type

// Using the Array constructor to create an array with a specific length
var array1: number[] = new Array(3); // Creates an array of length 3 with undefined values

// Using the Array constructor with initial values
var array2: number[] = new Array(1, 2, 3); // Creates an array with the specified values [1, 2, 3]

// Using the Array constructor with the generic type parameter
var array4: Array<number> = new Array<number>(1, 2, 3); // Equivalent to array2

// Array within array
var array5: number[][] = [[1, 2, 3], [4, 5]];

// Tuple Array-----------------

// Tuple with fixed length and specific element types
var tuple1: [number, string] = [1, "hellddddo"];

// Tuple with mixed types
var tuple2: [number, string, boolean] = [42, "woasdasdrld", true];

// Tuple with inferred types (type inference based on values)
var tuple3 = [1, "hello"] as const;

// Tuple using Array constructor
var tuple4 = new Array<number | string>(1, "hello");

// Readonly tuple
var tuple5: readonly [number, string] = [1, "hello"];

// Tuple with union types and readonly
var tuple6: readonly (number | string | boolean)[] = [1, 2, "hello", true];

//Object-----------------

/// Object Types + Interface
const obj1: { name: string; age: number } = { name: "John", age: 30 }; //basic

// Optional properties
const obj2: { name: string; age?: number } = { name: "John" }; // age can be undefined or number

// Readonly properties
const obj3: { readonly name: string; age: number } = { name: "John", age: 30 }; // name cannot be changed

// Index signature
const obj4: { [key: string]: number } = { age: 30 }; // ket must be string

// Function type
const obj5: { sayHello: (name: string) => string } = {
  sayHello: (name: string) => `Hello ${name}`,
}; // sayHello is a function that takes a string and returns a string

obj5.sayHello("John"); // Hello John

// Object type with union
const obj6: { name: string } | { age: number } = { name: "Joasdcxccchn" }; // basically or operator

// Object type with intersection
const obj7: { name: string } & { age: number } = { name: "John", age: 30 }; // basically and operator

// Object type with call signature
const obj8: { (name: string): string } = (name: string) => `Hello ${name}`; //   call signature is shorthand function

// Object type with construct signature
const obj9: { new (name: string): any } = class {};

// Object type with generic call signature
const obj10: { <T>(arg: T): T } = (arg) => arg;

// Object type with generic index signature
const obj12: { [key: string]: number } = { age: 30 };

// Object type with generic function type
const obj13: { <T>(arg: T): T } = (arg) => arg;

// Object type with generic interface
interface GenericIdentityFn {
  <T>(arg: T): T;
}
const obj14: GenericIdentityFn = (arg) => arg;

// Object type with generic class
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
const obj15: GenericNumber<number> = new GenericNumber<number>(); // number is the type argument
obj15.zeroValue = 0;
obj15.add = (x, y) => x + y;


// Enum-----------------

//Enum with numeric values
//if we dont assign value it will start from 0
// each value can be assigned to a different number
enum Direction {
  Up = 1,
  Down,   // 2
  Left,
  Right,
}

//Enum with string values
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//Enum with mixed values

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}


// Aliases and Interfaces-----------------

//Type aliases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

//Type aliases vs Interfaces

//Type aliases can be used to define union types
type Name2 = string;
type NameResolver2 = () => string; //Type aliases
type NameOrResolver2 = Name2 | NameResolver2; //Union type


//Interface can be used to define intersection types
interface Name3 {
  name: string;
} //Interface

interface NameResolver3 {
  getName(): string; 
}

interface NameOrResolver3 extends Name3, NameResolver3 { }

//Type aliases can be extended
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

//Interfaces can be extended
interface PartialPointX2 { x: number; };
interface Point2 extends PartialPointX2 { y: number; };

//Type aliases can be used to define tuple types
type StringNumberPair = [string, number];

//Interfaces can be used to define tuple types
interface StringNumberPair2 {
  length: 2;
  0: string;
  1: number;
}

// Function-----------------

// Function with return and parameter type

function add(x: number, y: number): number {
  return x + y;
}

// Function with void type

function log(message: string): void {
  console.log(message);
}


// Function with optional parameter

function sum(x: number, y?: number): number {
  return x + (y || 0);
}

// Function with default parameter

function sum2(x: number, y = 0): number {
  return x + y;
}


// Function with named parameter

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// Function with rest parameter

function sum3(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Function with function type parameter

function sum4(numFunc: () => number) {
  return numFunc();
}

// Casting-----------------.


// Casting with as
const someValue: unknown = "this is a string";
const strLength = (someValue as string).length;


// Casting with angle-bracket <>
const someValue2: unknown = "this is a string";
const strLength2 = (<string>someValue2).length;

// Force casting with !
let x = "hello";
console.log(((x as unknown) as string).length)



// TypeScript Basic Generics-----------------

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic class

class GenericNumber2<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

// Generic interface

interface GenericIdentityFn2 {
  <T>(arg: T): T;
}

// Generic type alias

type GenericIdentityFn3 = <T>(arg: T) => T;

// Generric extends

interface Lengthwise {
  length: number;
}


function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}


// TypeScript utility types-----------------

// Partial type  change all properties to optional

interface Todo {
  title: string;
  description: string;
}

let Todo: Partial<Todo> = {
  title: "Clean room",
};

// Required type  change all properties to required

interface Props {
  a?: number; // optional
  b?: string; // optional
}
// make it required
const obj: Required<Props> = { a: 5, b: "hello" };

// Record type is to define specific type and value type 

const asd: Record<string, number> = { hello: 2 };

// Omit type is to remove key from object

interface Movie {
  title: string;
  description: string;
  completed: boolean;
}


const  Movie: Omit<Movie, 'completed'> = {
  title: "Clean room",
  description: "Clean my room",
};


//Pick type remove all but specific key from object

interface Book{
  title: string;
  description: string;
  completed: boolean;
}

const Lord: Pick<Book, 'completed'> = {
  completed: true,
};


// Exclude type remove all but specific key from object

type to = string | number | boolean;
const val: Exclude<to, string> = 2;


// Return type get return type of function

type asd2 = () => { x: number, };

const vas: ReturnType<asd2> = { x: 2 };

// parameters type get parameters type of function

type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};


// Keyof get key type 

interface Person3 {
  name: string;
  age: number;
}


function getKey(person: Person3, key: keyof Person3) {
  console.log(person[key]);

}
getKey({ name: "John", age: 30 }, "name"); 

// Ts NUllCheking-----------------

// Optional chaining ?.

interface loe{
  name?: string;
  age?: number;
}

function getAge(person: loe) {
  return person?.age;
}

let age: loe = { name: "John", age: 30 };

console.log(getAge(age)); // 30

// Nullish coalescing operator ??

const namea = null ?? "sdddddss";
console.log(namea); // "default string"

// Null Assertion Operator !.

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed()); // Error if x is null or undefined
}


// Youtube https://www.youtube.com/watch?v=30LWjhZzg50&t=18s&ab_channel=freeCodeCamp.org


// strict mode

let aslo: "hello" | "world";




// Class-------------

class User {

  email : string
  name: string
  private city: string
  
  constructor(email:string, name:string, city:string) {
    this.email =   email;
    this.name = name;
    this.city = city;
  }

}

const user1 = new User("asd", "asd", "asd");
// shortform of above

class User2 {
  constructor(
    public email: string,
    public name: string,) {
  }

}

// Getter and Setter

class User3 {

  protected _count : number = 0;
  constructor(
    public email: string,
    public name: string,) {
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getCount(): number {
    return this._count;
  }

  set setcount(count: number) {
    this._count++;
  }
  

}


// Access Modifier

// inhertence 

// If we want to inheret 1 a proerty but dont want it to be accessable outsite we can use protected

class NewUser extends User3 {
  isFriend: boolean = false;
}


//  Abstract class

abstract class TakePhto{
  constructor(
    public cameraMode: string,
    public string: string,
  ) {}
  abstract getSepia(): void

  getReel(): number {
    return 6;
  }
}


class TakeVideo extends TakePhto {
  constructor(cameraMode: string,
    string: string,) {
    super(cameraMode, string);
  }
  getSepia() {
    throw new Error("Method not implemented.");
  }
  
}
const has = new TakeVideo("asd", "asd");

// Generic class

function echo<T>(arg: T): T {
  return arg;
}

class GenericClass<T> {
  constructor(public props: T) {}
}

echo(3)
const genericClass = new GenericClass<string>("Hello, world");

const getSet = <T>(products: T[]): T => {
  return products[0];
}

const getSet2 = <T extends { length: number }>(products: T): T => {
  return products;
}


// Narrowing

// In Operator

interface Admin {
  id: string;
  role: string;
}

interface User4 {
  email: string;
}

function redirect(usr: Admin | User4) {
  if ("role" in usr) {
    console.log(usr.role);
  } else {
    console.log(usr.email);
  }
}

// instanceof Operator

function las(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


// type predicate

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird) {
  return (pet as Bird).fly !== undefined;
}

// Discriminated Unions

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;


// switch
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    
    default: 
      const _defautl: never = s;
      return _defautl;
  }
}
// if else
function area2(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else {
    return s.height * s.width;
  }
}




// The never type and Exhaustiveness checking