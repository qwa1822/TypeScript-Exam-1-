interface Person8 {
    name:string;
    age?:number;
    readonly gender:string;
}

const p81:Person8= {
  name:'Sumin',
  gender:'man',
};


//type alias
type EatType=(food:string)=>void;


//interface
interface IEat{
  (food:string):void;
}

type PersonList=string[];

interface IPersonList{
  [index:number]:string;
}


interface Bird{
  fly():void;
  layEggs():void;
}


interface Fish{
  swim():void;
  layEggs():void;
}

type PetType=Bird | Fish;

// Declaration Merging- interface
interface Mergingiterface{
  a:string;
}

interface Mergingiterface{
  b:string;
}

let mi:Mergingiterface;
mi.a