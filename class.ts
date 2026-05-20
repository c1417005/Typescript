abstract class Person{
    static species ='Homo sapiens';
    static isAdalt(age: number){
        if(age>17) return true;
        return false;
    }
    constructor(public readonly name :string, protected age: number){
        // コンストラクタ内で呼び出されたthisはこのクラスそのもの。
    }

    incrementAge(){
        this.age += 1;
        Person.isAdalt(this.age);
    }

    greeting(this:Person){
        console.log(`Hello My name is ${this.name}.I'm ${this.age} years old`);
        this.explainjob();

    }
    abstract explainjob(): void;
}

class Teacher extends Person {
    explainjob(): void {
        console.log('I am a teacher.')
    }
    get subject():string {
        if(!this._subject){
            throw new Error('There is no subject.')
        }
        return 'Music'
    }

    set subject(value){
        if(!value){
            throw new Error('There is no value')
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string){
        // 継承先で登場した新しい引数にはprivate等をつける
        super(name,age);
        // superには継承元の初期化に必要な引数をかく
    }

}

console.log(Person.isAdalt(67));