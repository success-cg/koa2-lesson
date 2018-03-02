function makeIterator(arr) {
  let nextIndex = 0;

  // 返回一个迭代器对象
  return {
    next() {
      // next 方法返回的结果对象
      if (nextIndex < arr.length) {
        return {value: arr[nextIndex++], done: false};
      } else {
        return {done: true};
      }
    }
  };
}

let arr = ['吃饭', '睡觉', '写作业'];
const it = makeIterator(arr);

// console.log(it.next().value); // 吃饭
// console.log(it.next().value); // 睡觉
// console.log(it.next().value); // 写作业
// console.log(it.next().value); // undefined


function* makeGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const ge = makeGenerator(arr);

console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());