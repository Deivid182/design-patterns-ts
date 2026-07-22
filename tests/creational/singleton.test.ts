import { describe, it, expect } from "vitest";
import { Singleton } from "@/creational/singleton";

describe("Singleton", () => {
  it("debe retornar siempre la misma instancia", () => {
    const instanceA = Singleton.getInstance();
    const instanceB = Singleton.getInstance();

    expect(instanceA).toBe(instanceB);
  });

  it("debe mantener el estado entre distintas referencias", () => {
    const instanceA = Singleton.getInstance();
    instanceA.setValue(42);

    const instanceB = Singleton.getInstance();

    expect(instanceB.getValue()).toBe(42);
  });
});
