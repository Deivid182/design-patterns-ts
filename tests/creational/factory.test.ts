import { describe, it, expect, vi } from "vitest";
import { ChickenRestaurant, BeefRestaurant } from "@/creational/factory";

describe("Factory pattern", () => {
  it("should prepare a chicken hamburger", () => {
    const chickenRestaurant = new ChickenRestaurant();
    const consoleSpy = vi.spyOn(console, "log");

    chickenRestaurant.orderHamburger();

    expect(consoleSpy).toHaveBeenCalledWith("Preparing Chicken Hamburger");
  });

  it("should prepare a beef hamburger", () => {
    const beefRestaurant = new BeefRestaurant();
    const consoleSpy = vi.spyOn(console, "log");

    beefRestaurant.orderHamburger();

    expect(consoleSpy).toHaveBeenCalledWith("Preparing Beef Hamburger");
  });
});