class Teacher{
    constructor(name,knowledge,age){
        this.name=name;
        this.knowledge=knowledge;
        this.age=age;
    }
    speak(){
        return this.name + this.age +this.knowledge;
    }
}

class Student extends Teacher{
    constructor(name,knowledge,age){
        // super(name);
        super(name,knowledge,age);
    }

    write(){
        return this.name+'has mission';
    }
}

let a=new Teacher('Cher','math',21);
console.log(a);   //Teacher { name: 'Cher', knowledge: 'math', age: 21 }
let b=new Student('Cher','math',21);
//super(name);
console.log(b);  //Student { name: 'Cher', knowledge: undefined, age: undefined }
//super();
console.log(b);  //Student { name: undefined, knowledge: undefined, age: undefined }
//super(name,knowledge,age);
console.log(b);   //Student { name: 'Cher', knowledge: 'math', age: 21 }
console.log(b.write());