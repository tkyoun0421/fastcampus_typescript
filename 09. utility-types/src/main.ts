// Partial
// 특정 타입의 부분 집합을 만족하는 타입을 정의

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: 'abc@example.com' };
const all: Partial<Address> = { email: 'abc@example.com', address: 'address' };

// Pick
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// const todo: Pick<Todo, 'title' | 'completed'> = {
//     title: 'clean room',
//     completed: false,
// };

// Omit, 생략하다 특정 속성만 제거
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

const todo: Omit<Todo, 'description'> = {
    title: 'clean room',
    completed: false,
    createdAt: 238384848,
};

// Required
type User = {
    firstName: string;
    lastName?: string;
};

let firstUser: User = {
    firstName: 'John',
};

let secondUser: Required<User> = {
    firstName: 'John',
};

// Record <Keys, Type> 속성 키 Keys   속성 값의 타입 Type

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
    miffy: {
        age: 10,
        breed: 'Persian',
    },
    boris: {
        age: 5,
        breed: 'Maine Coon',
    },
    mordred: {
        age: 16,
        breed: 'British Shorthair',
    },
};

// ReturnType => 함수의 반환 타입

type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
    return false;
}

// const a: ReturnType<typeof fn> = 'Hello';
const a: ReturnType<typeof fn> = true;
