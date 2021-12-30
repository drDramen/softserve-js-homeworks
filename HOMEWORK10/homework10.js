// ----------task-1----------
console.log('___task-1___');

let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
let [x, y, , ...z] = arr;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ----------task-2----------
console.log('___task-2___');

let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// ----------task-3----------
console.log('___task-3___');

function mul(...rest) {
  //first way
  let sum = 0;

  for (const element of rest) {
    if (typeof element == 'number') {
      sum += element;
    }
  }

  return sum;

  //second way
  // return rest.filter((e) => typeof e == 'number').reduce((a, b) => a + b, 0);
}

console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0

// ----------task-4----------
console.log('___task-4___');

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => this.data + '');
  },
};

let client = {
  server: server,
  result: '',
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },

  notification: function () {
    return (callback) => (this.result = callback());
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// ----------task-5----------
console.log('___task-5___');

function mapBuilder(keysArray, valuesArray) {
  return new Map(keysArray.map((v, i) => [v, valuesArray[i]]));
}

let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
