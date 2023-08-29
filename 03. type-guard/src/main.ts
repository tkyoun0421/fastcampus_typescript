interface Foo {
    bar: number;
    bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

// 타입 단언
const bodyEl = document.querySelector('body') as HTMLBodyElement;
bodyEl.innerText = 'Hello';

// ! not null 타입 단언
const bodyEl1 = document.querySelector('body');
bodyEl1!.innerText = 'Hello';

// 타입 가드
function func(arg: string | null) {
    if (arg) {
        return (arg as string).toLowerCase();
    }
}

func('hello');
func(null);
