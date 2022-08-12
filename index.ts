var greet: string = "Greetings";
var geeks: string = "revangoud";
console.log(greet + " from " + geeks);
// save the file as hello.ts
let mobiel : number =  9948109968;
console.log(mobiel);

let age : number = 20;
if(age > 35 ){
    console.log(age);
}
if(age < 35) {
    console.log(age + 'person age is less than 35');
}else{
    console.log('not true')
}
//Arrays
const names : string[] = ['raju','ramu'];
//names.push('Revan'+ 'ram' +'raju');
//names[0]= 'Arya'
names.push('jack')
console.log(names)
let Numbers = [1,2,3,4]
Numbers.push(5);
console.log(Numbers);
let ourTuple: [number, boolean, string] = [1,true,'revan'];
console.log(ourTuple );
let user : [number,string] = [1,'revan']
console.log(user);
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
let car : {type:string,Name: string,year:number}={
    type:'Tayota',
    Name: 'Enova',
    year : 1999
}
console.log(car);

//object
let Bike : {type: string, milege?:number} = {
    type : 'honda',
};
Bike.milege=2000;
console.log(Bike);

//enum 
enum Direcions{
    north = 1,
    south,
    east,
    west
}
console.log(Direcions.north);
console.log(Direcions.south);

enum StusCode {
    NotFoun = 404, 
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StusCode);

//Interface
type CarYear =  number
type CarModel = string
type Cartype =   string
type CAR = {
    Year :  CarYear,
    Model : CarModel,
    Type  : Cartype
}
let CarYear  : CarYear  = 2001
let CarModel : CarModel = 'hondaCity'
let Cartype  : Cartype  = 'Honda'
let CAR: CAR = {
    Year :  CarYear,
    Model : CarModel,
    Type  : Cartype
}
console.log(CAR);

interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  console.log(rectangle)
  //functions named parameters
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  
  console.log(divide({dividend: 10, divisor: 2}));

  function add(a:number,b:number,c:number,...rest:number[]){
    return a+b+rest.reduce((p,c)=> p+c,0);
  }
  console.log(add(1,2,3,40,10));

  //classes
  class Person {
    // name is a private member variable 
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Revan Goud");
  
  console.log(person.getName());

  