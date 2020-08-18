import React from 'react';

// -------入门片段 https://ts.xcatliu.com/basics/type-of-object-interfaces.html

export default () => {

  // interface IPerson {
  //   readonly id: number;
  //   name: string;
  //   age?: number;
  //   [propName: string]: string | number;
  // }
  // let tom: IPerson = {
  //   id: 4564,
  //   name: '1',
  //   ccc:'123',
  // }

  // number 类型数据 规定数组内 只能number push也只能number 
  // let arr: number[] = [1, 2, 3, 4];
  // arr.push(5)
  // // 泛型数组
  // let arr2: Array<number> = [1, 2, 4];
  // // 接口 表示数组
  // interface IArr {
  //   [index: number]: number;
  // }
  // let arr3: IArr = [1, 2, 3, 4];

  // function sun() {
  //   let args: IArguments = arguments;
  //   console.log(args, 1111); 
  // } 

  // let sun: (x: number, y: number) => string = (x: number, y: number): string => {
  //   return '123';
  // }
  // console.log(sun(1, 2));

  // interface ISun {
  //   (x: string, y: string): boolean;
  // }
  // let sun: ISun = (x: string, y: string) => {
  //   return x.search(y) !== -1;
  // }
  // console.log(sun('123', '2'));

  // function reverse(x: number): number;
  // function reverse(x: string): string;
  // function reverse(x: number | string): number | string {
  //   if (typeof x === 'number') {
  //     return Number(x.toString().split('').reverse().join(''));
  //   } else if (typeof x === 'string') {
  //     return x.split('').reverse().join('');
  //   }
  // }
  // console.log(reverse('123'));
  // console.log(reverse(123));

  const dom: HTMLElement = document.querySelector('body');
  const allDiv: NodeList = document.querySelectorAll('div');
  console.log(allDiv);

  return (
    <div>

    </div>
  )
}
