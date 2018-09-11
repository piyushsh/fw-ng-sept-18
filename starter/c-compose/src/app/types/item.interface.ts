
// interface Item{
//     name:string,
//     price:number,
//     code:number,
//     quantity:number
// }

// Ordinary ES6 class, not component
// Defining a TYPE at runtime
// Interface is a Typescript compile-time type: it does not exist at runtime
// INterface cannot have methods

class Item {

  constructor(
    public name:string,
    public price:number,
    public code:number,
    public quantity:number ) {

      this.check();
  }

  check(){
      // Fix any negative prices.
      this.price = Math.abs(this.price);
  }
}

export {Item}
