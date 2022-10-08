class className{
  private static instance: className|null=null;
  public static getInstance(){
    // ClassName 으로부터 만든 Object 가 있으면 그걸 리턴
    // className 으로부터 만든 object 가 없으면 ,만들어서 리턴
    if(className.instance===null){
      className.instance=new className();
    }

    return className.instance;
  }
  private constructor(){}
}

const add=className.getInstance();
const bbb=className.getInstance();


console.log(add===bbb);


