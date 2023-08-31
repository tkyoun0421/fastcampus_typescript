// 접근 제어자
//    public => default,
//    protected => 클래스 내, 상속받은 자식 클래스에서 접근 가능
//    private => 클래스 내에서만 접근 가능
//
class PostA {
    public id: number = 0;
    public title: string = '';
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}

class PostB extends PostA {
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}

let post: PostA = new PostA(1, 'title 1');
console.log(post.id);
console.log(post.title);
