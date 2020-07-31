// 这个接口使用的是react的无状态组件声明，传入属性则为svg文件自带的属性比如color width之类的，然后我们就可以愉快地使用svg-comonent了:
// 直接 width="20"  不需要嵌套在style内
declare interface SvgComponent extends React.StatelessComponent<React.SVGAttributes<SVGAElement>> {};

declare module '*.svg' {
  const content: any
  export default content
}


