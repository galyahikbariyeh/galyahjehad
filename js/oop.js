//class Car {
    // attribute : brand year color
    // constructor : initialized brand year color
//constructor (brand,year,color){
   // this.brand=brand;
   // this.year=year;
    //this.color=color;

//}
//function (behavior)
//start car --> out : car started
////start(){
    //console.log(`${this.brand} is started`)
//}

//stop(){
    //console.log(`${this.brand} is stoped`)
////}

//}

/*var bmw = new Car ('BMW', 2020 , 'Black');
var kia = new Car ('Kia', 2023 , 'red');
bmw.start()
bmw.stop()
kia.start()

console.log(bmw);
//console.log(bmw.year);
console.log(kia);*/

class Person{
    #isaddress
   
    constructor(name,age,address,){
        if(typeof name !== 'string'){
            throw new Error( 'name must be string')
        }
        if(!name){
            throw new Error( 'name is requierd')
        } 
        if(typeof age !== 'number'){
            throw new Error( 'age must be number')
        }
        if(!age){
            throw new Error( 'age is requierd')
        }
       /* if(typeof address !== 'boolean'){
            throw new Error( 'address must be boolean')
        }*/
       console.log(address)
        if(address != true && address != false){
            throw new Error( 'address is requierd')
        }
        this.name=name;
        this.age=age;
        this.#isaddress=address;
       
    }
    personal(number){
      //  console.log(` hi ${this.name} ${this.age} ${this.address} ${number}`)
    }
    // getter setter
    getisaddress(){
        return this.#isaddress;
    }
   
}

var p1= new Person('lara', 20 ,true)
var p2 = new Person('aya' , 21 ,false)
p1.personal()
p2.personal()
console.log(p1)
console.log(p2)

//inheritance
class Employ extends Person{
    #salary
    constructor(name,age,address,Jobtitle,salary){
        super(name,age,address)
        this.Jobtitle=Jobtitle;
        this.#salary=salary;

        if(!Jobtitle){
            throw Error ( 'jobtitle is requierd')
        }
    }
    getsalary(){
        return this.#salary/2;  
    }
   
}

var p4=new Person('tala',8,false)
console.log(p4)

var p3=new Employ('leena',43,true,'sdfg',200)
//console.log(p3.personal('bn'))
//console.log(p3.isaddress)
//p3.personal('1238743')
console.log(p3.isaddress)

  


