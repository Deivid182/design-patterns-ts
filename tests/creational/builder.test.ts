import { describe, expect, it } from "vitest";
import { Computer, ComputerBuilder } from "@/creational/builder";

describe("ComputerBuilder", () => {
  it("should build a computer with the specified components", () => {
    const builder = new ComputerBuilder();
    const computer = builder
      .setCPU("Intel Core i9")
      .setRAM("32")
      .setStorage("1024")
      .setGPU("NVIDIA RTX 3080")
      .build();

    expect(computer).toBeInstanceOf(Computer);
    expect(computer.cpu).toBe("Intel Core i9");
    expect(computer.ram).toBe("32");
    expect(computer.storage).toBe("1024");
    expect(computer.gpu).toBe("NVIDIA RTX 3080");
  });

  it("should build a computer with default components if not specified", () => {
    const builder = new ComputerBuilder();
    const computer = builder.build();

    expect(computer).toBeInstanceOf(Computer);
    expect(computer.cpu).toBe("");
    expect(computer.ram).toBe("");
    expect(computer.storage).toBe("");
    expect(computer.gpu).toBe("");
  });
});