export interface Hamburger {
  prepare(): void;
}

export class ChickenHamburger implements Hamburger {
  prepare(): void {
    // throw new Error("Method not implemented.");
    console.log("Preparing Chicken Hamburger");
  }
}

export class BeefHamburger implements Hamburger {
  prepare(): void {
    // throw new Error("Method not implemented.");
    console.log("Preparing Beef Hamburger");
  }
}

export abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

export class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

export class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

// Usage
const chickenRestaurant = new ChickenRestaurant();
chickenRestaurant.orderHamburger(); // Output: Preparing Chicken Hamburger

const beefRestaurant = new BeefRestaurant();
beefRestaurant.orderHamburger(); // Output: Preparing Beef Hamburger