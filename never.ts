function error(message:string):never{
    throw new Error(message);
}

function fail(){
  return error('failed');
}

function infiniteLoop():never{
  while(true){

  }
}

declare const a:string | number;
if(typeof a!== 'string'){
  a;
}

type indexable<T>=T extends string ? T & {[index:string]:any}:never;

type objectIndexalbe=indexable<{}>;
