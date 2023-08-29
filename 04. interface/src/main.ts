// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

// const bear1: Bear = {
//     name: 'honer bear',
//     honey: true,
// };

// type Animal = {
//     name: string;
// };

// type Bear = Animal & {
//     honey: boolean;
// };

// const bear1: Bear = {
//     name: 'honey bear',
//     honey: true,
// };

// interface 선언 병합 가능 (declaration Merging)
// interface Animal {
//     name: string;
// }

// interface Animal {
//     honey: boolean;
// }

// const bear1: Animal = {
//     name: 'honer bear',
//     honey: true,
// };

// Type에선 선언 병합 X
// type Animal = {
//     name: string;
// };

// type Animal {
//     honey: boolean;
// };

// const bear1: Animal = {
//     name: 'honey bear',
//     honey: true,
// };
