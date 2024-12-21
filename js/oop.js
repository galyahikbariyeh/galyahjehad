class Car {
    // attribute : brand year color
    // constructor : initialized brand year color
constructor (brand,year,color){
    this.brand=brand;
    this.year=year;
    this.color=color;

}
//function (behavior)
//start car --> out : car started
start(){
    console.log(`${this.brand} is started`)
}

stop(){
    console.log(`${this.brand} is stoped`)
}

}

var bmw = new Car ('BMW', 2020 , 'Black');
var kia = new Car ('Kia', 2023 , 'red');
bmw.start()
bmw.stop()
kia.start()

console.log(bmw);
//console.log(bmw.year);
console.log(kia);

class Person{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    personal(){
        console.log(` hi ${this.name} ${this.age} ${this.address}`)
    }
}

var p1= new Person('lara', 20 ,' irbid')
var p2 = new Person('aya' , 21 ,'amman')
p1.personal()
p2.personal()
console.log(p1)
console.log(p2)
  


