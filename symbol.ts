console.log(Symbol('foo')===Symbol('foo'));  

const sym=Symbol();

const obj={
    [sym]:"value",
};

obj[sym];





// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정불가능한 값으로 만들어줍니다.
// 그래서 주로 접근을 제어하는데 쓰는경우가 많았습니다.

/*
  ley sym=Symbol();
*/