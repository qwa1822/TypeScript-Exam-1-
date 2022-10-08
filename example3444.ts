abstract class abstractPerson{
  proctected _name:string ="Mark";


  abstract setName(name:string):void;
}

class Person341 extends abstractPerson{
  setName(name: string): void {
      this._name=name;
  }

}

const p11=new Person341();
p11.setName();