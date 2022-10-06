// class => object를 생성 
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex:'male', anna:'female'}

class Students{
  [index:string]:string;
  
  
}

const aaa=new Students();
aaa.mark='male';
aaa.jade='male';

console.log(aaa);

const b=new Students();
b.chloe="female";
b.alex="male";
b.anna="female";

console.log(b);
