function add1(a: string, b: string): string {
    return a + b;
}

function add2(a: number, b: number): number {
    return a + b;
}

console.log(add1('hello', 'world'));
console.log(add2(1, 2));

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

// function saySomething(word: string): string {
//     return word;
// }

// function saySomething(word: string[]): string {
//     return word.join('');
// }

// console.log(saySomething(['hello', 'world']));

// function saySomething(word: string | string[]): string {
//     if (typeof word === 'string') {
//         return word;
//     } else if (Array.isArray(word)) {
//         return word.join('');
//     }

//     throw new Error('unable to say something');
// }

function saySomething(word: string): string;
function saySomething(word: string[]): string;
function saySomething(word: any): any {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join('');
    }

    throw new Error('unable to say something');
}
