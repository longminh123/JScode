class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const mycar = new Car("Ford", 2014);
  console.log(mycar.name + " " + mycar.year);
  
  
  class Model extends Car {
    constructor(name,year,mod) {
      super(name,year);
      this.mod = mod;
    }
    show() {
      console.log(`this is a ${this.name} - ${this.mod}- ${this.year}`);
    }
  }
  
  let myCar = new Model("Ford", "Mustang","2021");
myCar.show();