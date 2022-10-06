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
