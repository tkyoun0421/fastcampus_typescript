// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string;
let firstName: string = 'Doe';
let lastName: string = 'John';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(유니언 타입을 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 읽기 전용 배열 생성 readonly
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// Tuple
// 튜플은 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이를 지켜야합니다
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2]; // Error
// tuple1 = [1, 'a']; // Error

// 튜플 타입의 배열(2차원 배열)
let users: [number, string][];
users = [
    [1, 'John'],
    [2, 'Doe'],
];

// push() 등을 통해 값을 넣는 것은 가능
let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);

// Any
// 모든 타입으로 어떠한 값도 할당 가능, 되도록 사용 X
// 3rd party 라이브러리 사용 시 타입을 모를 때만 사용
let any: any = 'abc';
any = 1;
any = [];

// Unknown
// 알 수 없는 타입을 의미하며, 어떠한 값도 할당 가능, 하지만 unknown을 다른 타입에는 할당 불가능
let unknown: unknown = false;
// let string1: string = unknown; // Error, unknown을 다른 타입에는 할당 불가능
let string2: string = unknown as string;

// Object
// typeof 연산자 object로 반환하는 모든 타입
let obj: object = {};
let arr: object = [];
// let nul: object = null; // 실제 X => typescript에서는 이미 반영을 해줌
let date: object = new Date();
let obj1: { id: number; title: string; desc: string } = {
    id: 1,
    title: 'title1',
    desc: 'desc2',
};

// Union (2개 이상의 타입을 허용)
let union: string | number;
union = 'hi';
union = 123;
// union = []; // Error

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y;
};

let func2: () => void;
func2 = function () {
    console.log('hi');
};

// Void (주로 값을 반환하지 않는 함수에서 사용)
function greeting(): void {
    console.log('hi');
}

const hi: void = greeting();
console.log(hi); // undefined

// Never
// Never는 어떤 일이 절대 일어나지 않은 것이라고 확신할 때 사용
// 1. Error를 Throw 할 때
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// 2. 무한 루프
function keepProcessing(): never {
    while (true) {
        console.log('~~');
    }
}
