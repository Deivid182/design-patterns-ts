import { describe, expect, it, vi } from "vitest";
import { type Ability, Character, Mage, Warrior, AxeAttack, MagilSpell, SwordAttack } from "@/structural/bridge";

describe("Bridge pattern", () => {
  it("should create a Warrior with SwordAttack", () => {
    const swordAttack: Ability = new SwordAttack();
    const warrior: Character = new Warrior(swordAttack);
    const consoleSpy = vi.spyOn(console, "log");

    warrior.attack();

    expect(consoleSpy).toHaveBeenCalledWith("Warrior attacks!");
    expect(consoleSpy).toHaveBeenCalledWith("Swinging a sword!");
  });

  it("should create a Mage with MagilSpell", () => {
    const magicSpell: Ability = new MagilSpell();
    const mage: Character = new Mage(magicSpell);
    const consoleSpy = vi.spyOn(console, "log");

    mage.attack();

    expect(consoleSpy).toHaveBeenCalledWith("Mage attacks!");
    expect(consoleSpy).toHaveBeenCalledWith("Casting a magic spell!");
  });

  it("should change the ability of a Warrior to AxeAttack", () => {
    const swordAttack: Ability = new SwordAttack();
    const axeAttack: Ability = new AxeAttack();
    const warrior: Character = new Warrior(swordAttack);
    const consoleSpy = vi.spyOn(console, "log");

    warrior.setAbility(axeAttack);
    warrior.attack();

    expect(consoleSpy).toHaveBeenCalledWith("Warrior attacks!");
    expect(consoleSpy).toHaveBeenCalledWith("Swinging an axe!");
  });
});
