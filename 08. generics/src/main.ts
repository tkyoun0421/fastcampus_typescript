// Generics

// function getArrayLength(arr: number[]): number {
//     return arr.length;
// }

// const array1 = [1, 2, 3];
// getArrayLength(array1);

// function getArrayLength(arr: number[] | string[]): number {
//     return arr.length;
// }

// const array2 = ['a', 'b', 'c'];
// getArrayLength(array2);

// function getArrayLength<T>(arr: T[]): number {
//     return arr.length;
// }

// const array1 = [1, 2, 3];
// getArrayLength<number>(array1);

// const array2 = ['a', 'b', 'c'];
// getArrayLength<string>(array2);

// interface Vehicle<T> {
//     name: string;
//     color: string;
//     option: T;
// }

// const car: Vehicle<{ price: number }> = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000,
//     },
// };

// const bike: Vehicle<boolean> = {
//     name: 'Bike',
//     color: 'green',
//     option: true,
// };

// const makeArr = <T, Y>(x: T, y: Y): [x: T, y: Y] => {
//     return [x, y];
// };

// const array = makeArr<number, number>(4, 5);
// const array2 = makeArr<string, string>('a', 'b');
// const array3 = makeArr<number, string>(4, 'b');

const makeFullName = <T extends { firstName: string; lastName: string }>(
    obj: T
) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName,
    };
};

const user1 = makeFullName({
    firstName: 'John',
    lastName: 'Doe',
    location: 'Seoul',
});
