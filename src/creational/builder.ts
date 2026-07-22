/**
 * The builder pattern is a creational design pattern that allows you to create complex objects step by step.
 */

export class Computer {
  public cpu: string = "";
  public ram: string = "";
  public storage: string = "";
  public gpu?: string = "";

  displayConfiguration(): void {
    console.log(`Computer Configuration: \n
      CPU: ${this.cpu} \n
      RAM: ${this.ram} \n
      Storage: ${this.storage} \n
      GPU: ${this.gpu} \n
    `);
  }
}

export class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

// Usage
const gamingComputer = new ComputerBuilder()
  .setCPU("Intel Core i9")
  .setRAM("32GB")
  .setStorage("1TB SSD")
  .setGPU("NVIDIA RTX 3080")
  .build();

gamingComputer.displayConfiguration();