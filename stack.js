class StackArray {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!(this.items.length===0))
    {
      return this.items.pop();
    }
    return false;
  }

  peek() {
    if (!(this.items.length===0))
    {
      return this.items[this.items.length - 1];
    }
    return false;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }

  getMax() {
    console.time('getMax');
    let elementMax = this.items[0]; 
    for (let i = 0; i < this.size(); i++) {
      if (this.items[i] > elementMax){
        elementMax = this.items[i];
      }
    }
    console.timeEnd('getMax');
    return elementMax;
  }

  
  getMin() {
    console.time('getMin');
    let elementMin = this.items[0]; 
    for (let j = 0; j < this.size(); j++) {
      if (this.items[j] < elementMin){
        elementMin = this.items[j];
      }
    }
    console.timeEnd('getMin');
    return elementMin;
  }
  getAverage() 
  {     
    let sum = 0;

    for (let j = 0; j < this.size(); j++) 
      {
        sum += this.items[j];
      }

    if(this.size() != 0)
      {
        let avg = sum/this.size();
        return avg;
      }

    else
      {
        return "Empty_StackArray";
      }     
  }
}

module.exports  = StackArray;