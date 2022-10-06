class Person345{


  public readonly name:string= 'Mark';
  private readonly country:string='Korea';


  public constructor(private _name:string, private age:number){ 
    this.country="korea";
  }

  hello(){
    this.country="china";
  }

  

  }


const p13:Person345=new Person345("Mark",39);
console.log(p13.name);      //get을 하는 함수 getter
p13.name="Sumin";        //Set을 하는 함수 
console.log(p13.name); 


