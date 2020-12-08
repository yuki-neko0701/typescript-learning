// export {};するとモジュール化できる。
// これがないと、グローバル空間で使っている変数を定義（上書き）する危険性がある
export {};


let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished })