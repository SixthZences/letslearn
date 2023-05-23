var StackArray = require('../stack.js');

describe('test jest', () => {
  test('adds 1 + 2 = 3', () => {
    var res = 1+2;
    expect(res).toBe(3);
  });
});
describe('pop',()=>{
  test('popping',()=>{
    var mstack = new StackArray();
    mstack.push(1);
    mstack.push(2);
    mstack.push(3);
    var res = mstack.pop();
    expect(res).toBe(3);
  });
  test('pop null', () =>{
    var mstack = new StackArray();
    var res = mstack.pop();
    expect(res).toBe(false);
  });
})
describe('peek',()=>{
  test('peeking',()=>{
    var mstack = new StackArray();
    mstack.push(1);
    mstack.push(2);
    mstack.push(3);
    var res = mstack.peek();
    expect(res).toBe(3);
  });
  test('peek null', () =>{
    var mstack = new StackArray();
    var res = mstack.peek();
    expect(res).toBe(false);
  });
})
describe('isEmpty', () => {
  test('isEmpty push', ()=> {
    var mstack = new StackArray();
    mstack.push(1);
    mstack.push(2);
    mstack.push(3);
    mstack.push(4);
    var res = mstack.isEmpty(); 
    expect(res).toBe(false);
  });
  test('isEmpyty ', ()=>{
    var mstack = new StackArray();
    var res = mstack.isEmpty();
    expect(res).toBe(true);
  })
});
describe('size', () => {
  test('size push (1)', () => {
    var mstack = new StackArray();
    mstack.push(1)
    var res = mstack.size();
    expect(res).toBe(1);
  });

  test('size push (1)', () => {
      var mstack = new StackArray();
      mstack.push(0)
      var res = mstack.size();
      expect(res).toBe(1);
    });

  test('size push (1,2)', () => {
      var mstack = new StackArray();
      mstack.push(1)
      mstack.push(2)
      var res = mstack.size();
      expect(res).toBe(2);
    });
});

describe('size push pop', () => {
  test('size push (1,2,3) pop()', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    mstack.pop()
    var res = mstack.size();
    expect(res).toBe(2);
  });
});
describe('clear', () => {
  test('clear', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    mstack.clear()
    var res = mstack.size();
    expect(res).toBe(0);
  });
  test('clear null', () => {
    var mstack = new StackArray();
    mstack.clear()
    var res = mstack.size();
    expect(res).toBe(0);
  });
});
describe('toArray', () => {
  test('toArray', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    var res = mstack.toArray();
    expect(res).toStrictEqual([1,2,3]);
  });
  test('toArray null', () => {
    var mstack = new StackArray();
    var res = mstack.toArray();
    expect(res).toStrictEqual([]);
  });
});
describe('toString', () => {
  test('toString', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    var res = mstack.toString();
    expect(res).toStrictEqual("1,2,3");
  });
  test('toString null', () => {
    var mstack = new StackArray();
    var res = mstack.toString();
    expect(res).toStrictEqual("");
  });
});

describe('getmax', () => {
  test('getmax (1,2,3)', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    var res = mstack.getMax()
    expect(res).toBe(3);
  });
  test('getmax (0,0,0)', () => {
    var mstack = new StackArray();
    mstack.push(0)
    mstack.push(0)
    mstack.push(0)
    var res = mstack.getMax()
    expect(res).toBe(0);
  });
  test('getmax null', () => {
    var mstack = new StackArray();
    var res = mstack.getMax()
    expect(res).toBe(undefined);
  });
});

describe('getmin', () => {
  test('getmin (1,2,3)', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    var res = mstack.getMin()
    expect(res).toBe(1);
  });
  test('getmin (-1,0,-3)', () => {
    var mstack = new StackArray();
    mstack.push(-1)
    mstack.push(0)
    mstack.push(-3)
    var res = mstack.getMin()
    expect(res).toBe(-3);
  });
  test('getmin null', () => {
    var mstack = new StackArray();
    var res = mstack.getMin()
    expect(res).toBe(undefined);
  });
});

describe('getAverage', () => {
  test('getAverage (1,2,3)', () => {
    var mstack = new StackArray();
    mstack.push(1)
    mstack.push(2)
    mstack.push(3)
    var res = mstack.getAverage()
    expect(res).toBe(2);
	});
  test('getAverage (1,2,3)', () => {
    var mstack = new StackArray();
    var res = mstack.getAverage()
    expect(res).toBe("Empty_StackArray");
	});
  });

