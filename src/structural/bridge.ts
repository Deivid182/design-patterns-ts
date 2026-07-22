/**
 * Bridge Pattern
 * Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
 * This pattern is useful when you want to avoid a permanent binding between an abstraction and its implementation.
 * It allows you to change the implementation at runtime without affecting the client code.
 * The bridge pattern is often used in graphics and GUI libraries, where you might have different rendering engines (implementations) for different platforms (abstractions).
 */

export interface Ability {
  use(): void;
}

export class SwordAttack implements Ability {
  use(): void {
    console.log("Swinging a sword!");
  }
}

export class AxeAttack implements Ability {
  use(): void {
    console.log("Swinging an axe!");
  }
}

export class MagilSpell implements Ability {
  use(): void {
    console.log("Casting a magic spell!");
  }
}

export abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract attack(): void;
}

export class Warrior extends Character {
  override attack(): void {
    console.log("Warrior attacks!");
    this.ability.use();
  }
}

export class Mage extends Character {
  override attack(): void {
    console.log("Mage attacks!");
    this.ability.use();
  }
}

// Usage

function main() {
  const swordAttack = new SwordAttack();
  const axeAttack = new AxeAttack();
  const magicSpell = new MagilSpell();
  
  const warrior = new Warrior(swordAttack);
  warrior.attack(); // Output: Warrior attacks! Swinging a sword!
  
  warrior.setAbility(axeAttack);
  warrior.attack(); // Output: Warrior attacks! Swinging an axe!
  
  const mage = new Mage(magicSpell);
  mage.attack(); // Output: Mage attacks! Casting a magic spell!
}


main();