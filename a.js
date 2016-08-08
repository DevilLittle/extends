class Teacher{
    constructor(name,knowledge,age){
        this.name=name;
        this.knowledge=knowledge;
        this.age=21;
    }

    speak(){
        return this.name + this.age +this.knowledge;
    }
}

class Student extends Teacher{

    write(){
        return this.name+'has mission';
    }
}

let a=new Teacher('Cher','math');
console.log(a);     //Teacher { name: 'Cher', knowledge: 'math', age: 21 }
console.log(a.speak());  //Cher21math
let b=new Student();
console.log(b);  //Student { name: undefined, knowledge: undefined, age: 21 }
console.log(b.speak());   //NaN
console.log(b.write());   //undefinedhas mission
let c=new Student('Andy');
console.log(c);   //Student { name: 'Andy', knowledge: undefined, age: 21 }
console.log(c.write());   //Andyhas mission