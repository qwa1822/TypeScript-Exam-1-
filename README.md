## Primitive Type

<!-- 오브 젝트와 레퍼런스 형태가 아닌 실제값을 저장하는 자료형 -->

- 프리미티브 형의 내장함수를 사용 가능 한것은 자바스크립트 처리방식
  boolean |
  number |
  string |
  symbol |
  null |
  undefined

* literal값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
  true;
  'hello';
  3.14;
  null;
  undefiend;

* Number / number

- JavaScript 와 같이 ,TypeScipt의 모든 숫자는 부동 소숫점 값 입니다.
- TypeScript는 16짅수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수및 8진수를 지원합니다.
- NaN
- 1_000_000 과 같은 표기 가능

* Symbol

- ECMAScript 2015의 Symbol 입니다.
- new Symbol로 사용하루 수없습니다.
- Symbol을 함수로 사용해서 Symbol타입을 만들어 낼 수 있습니다.

// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정불가능한 값으로 만들어줍니다.
// 그래서 주로 접근을 제어하는데 쓰는경우가 많았습니다.

- Undefined & Null

* In TypeScript, both undefined and null actually have their type named respectively
* 둘다 소문자만 존재합니다.

- null in JavaScript

* null 이라는 값으로 할당된 것을 null아록 합니다.
* 무언가가 있는데, 사용할 준비가 덜 된 상태
* null 이라는 타입은 null 이라는 값만 가질수 있습니다.

#### Undefined in Javascript

- 무언가가 아예 준비가 안된 상태
- Object의 property가 없을 때도 undefined 입니다.
- 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.

### Obejct

- a type that reperesents the non-primitive type
  -"primitive type 이 아닌 것" 을 나타내고 싶을 때 사용하는 타입

### non-primitive type

-not number,string,boolean

### Array

- 같은 타입의 요소들을 모아 놓는 것
- 원래 자바스크립트에서 array는 객체입니다.
- 사용방법
  -Array<타입> -타입[]
  // let list:number[]=[1,2,3];
  // let list:Array<number>=[1,2,3]
  let list:(number | string)[]=[1,2,3,"4"];

### tuple

let x: [string, number];

x = ["hello", 39];

// x=[10,"Mark"]/

const person:[string,number]= ["Mark",39];

const [first,second] =person;

### any

function returnAny(message: any): any{
console.log(message);

}

const any1=returnAny('리턴은 아무거나');
any1.toString();

let looselyTyped: any={};

const d=looselyTyped.a.b.c.d;

### Unknown

-응용 프로그램을 작성할 떄 모르는 변수의 타입을 묘사해야 할 수도 있습니다. -이러한 값은 동적콘텐츠 -이경우 ,컴파일러와 미래의 코드를 읽는 사람에게 이변수가 무엇이든 될 수 있음을 알려주기를 원하므로 unknown타입을 제공

### never

-return에 사용
-never타입은 모든타입의 subtype이며, 모든타입에 할당 할 수있습니다. -하지만 never에는 그 어떤것도 할당할 수 없습니다.
-any조차도 never에게도 할당 할 수 없습니다.

### 타입시스템

-컴파일러에게 사용하는 탕입을 ㅁ여시

### 타입스크립트의 타입 시스템

-타입을 명시적으로 지정 -타입을 명시적으로 지정하지않으면, -
컴파일러가 자동으로 타입을 추론
-SstrictNullChecks 옵션을 키면
모든타입에 자동으로 포함되어 있는 'null'과 'undefined'

### structural type system-구조가 같으면, 같은 타입이다

### 타입 별칭(별명)

- Interface 랑 비슷해 보입니다.
- Primitive, Union Type, Tuple, Function
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있습니다.
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는것은 아닙니다.

### Class

- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다.
- new를 이용하여 class를 통해 object를 만들 수 있다.
- contstructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
- this 를 이용해서 만들어진 object를 가리킬 수 있다.

# 접근제어자

- 접근제어자 public,private,proctected
- 설정하지 않으면 public
- 클래스내부의 모든곳에 (생성자,프로퍼티,메서드) 설정 가능하다.
- private으로 설정하면 클래스 외부에서 설정할 수 없다.
