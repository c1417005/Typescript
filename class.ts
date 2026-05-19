class Person{
    name:string;
    constructor(initName:string){
        this.name = initName;
        // コンストラクタ内で呼び出されたthisはこのクラスそのもの。
    }
    greeting(){
        console.log(`Hello My name is ${this.name}`);

    }
}

const quill = new Person('Quill');
// console.log(quill);

quill.greeting();
// オブジェクトのメソッドで呼ばれたthisは、呼び出したオブジェクトを指す。

const anotherQuill = {
    // name: 'anotherQUill',
    anotherGreeting: quill.greeting
}

anotherQuill.anotherGreeting();
// 呼び出し元のanotherQuilにnameがないので、この場合undefined
