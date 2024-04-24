const course:string="Next Level2 Task";
console.log(course);
// Task 1
const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true, undefined, "2023"];
console.log(userInfo)
// Task 2
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const commonElements: number[] = [];

    // Iterate through each element in the first array
    for (const num of arr1) {
        // Check if the element exists in the second array
        if (arr2.includes(num)) {
            // If so, add it to the common elements array
            commonElements.push(num);
        }
    }
    return commonElements;
}
// Example usage:
const arr1 = [1, 2, 3, 4, 5,6,7,8,9,10];
const arr2 = [2, 4, 6, 8];
const result = findCommonElements(arr1, arr2);
console.log(result); 
// Task 3
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

function filterProducts<T>(products: T[], criterion: keyof T, value: T[keyof T]): T[] {
    return products.filter(product => product[criterion] === value);
}

// Example usage:
const products: Product[] = [
    { id: 1, name: "Product 1", price: 10, category: "Category A" },
    { id: 2, name: "Product 2", price: 20, category: "Category B" },
    { id: 3, name: "Product 3", price: 30, category: "Category A" },
];

const filteredProducts = filterProducts(products, "category", "Category A");
console.log(filteredProducts);
// Task 4
type ProductTuple = [string, number, number]; // Tuple representing product: [name, price, quantity]

function calculateTotalCost(products: ProductTuple[]): number {
    return products.reduce((total, [, price, quantity]) => total + (price * quantity), 0);
}

// Example usage:
const products1: ProductTuple[] = [
    ["Product 1", 10, 2],
    ["Product 2", 20, 1],
    ["Product 3", 30, 3],
];

const totalCost = calculateTotalCost(products1);
console.log(totalCost); 
// Task 5
function sumOfEvenNumbers(numbers: number[]): number {
    let sum = 0;

    for (const num of numbers) {
        if (num % 2 === 0) { // Check if the number is even
            sum += num; // Add the even number to the sum
        }
    }

    return sum;
}

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result5 = sumOfEvenNumbers(numbers);
console.log(result5); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)

// Task 6
interface Person {
    name: string;
    age: number;
    email: string;
}

const people: Person[] = [
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 25, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

function findPersonByEmail(people: Person[], email: string): Person | null {
    for (const person of people) {
        if (person.email === email) {
            return person; // Return the matching person object
        }
    }
    return null; // Return null if no match is found
}

// Example usage:
const emailToFind = "bob@example.com";
const foundPerson = findPersonByEmail(people, emailToFind);
if (foundPerson) {
    console.log("Person found:", foundPerson);
} else {
    console.log("Person not found with email:", emailToFind);
}
// Task -7
function findMinMax(...numbers: number[]): [number, number] {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
}

const numbers7: number[] = [5, 3, 8, 1, 9, 2, 7];

const [minValue, maxValue] = findMinMax(...numbers7);

console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);

// Task - 8
function logColor(color: "red" | "green" | "blue", toUpperCase?: boolean): void {
    if (toUpperCase) {
        console.log(color.toUpperCase());
    } else {
        console.log(color.toLowerCase());
    }
}
// Example usage:
logColor("red"); // Output: red (lowercase by default)
logColor("green", true); // Output: GREEN (uppercase)
logColor("blue", false); // Output: blue (lowercase)
