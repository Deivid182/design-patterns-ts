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




//! Exercise: Create a QueryBuilder class that allows you to build SQL queries

/**
 * The builder has to have the following methods:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- if not received, select all fields
 * - where(condition: string): QueryBuilder - optional, can be called multiple times to add more conditions
 * - orderBy(field: string, direction: "ASC" | "DESC"): QueryBuilder - optional, can be called multiple times to add more order by clauses
 * - limit(count: number): QueryBuilder - optional, can be called only once
 * - execute(): void - prints the final SQL query to the console
 * - build(): string - returns the final SQL query as a string
 * 
 ** Usage example:
  * const query = new QueryBuilder("users")
  *   .select("id", "name", "email")
  *   .where("age > 18")
  *   .orderBy("name", "ASC")
  *   .limit(10)
  *   .execute()
 */

export class QueryBuilder {
  private table: string = "";
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderByClauses: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: "ASC" | "DESC"): QueryBuilder {
    this.orderByClauses.push(`${field} ${direction}`);
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): void {
    const query = this.build();
    console.log(query);
  }

  build(): string {
    let query = `SELECT ${this.fields.length > 0 ? this.fields.join(", ") : "*"} FROM ${this.table}`;

    if (this.conditions.length > 0) {
      query += ` WHERE ${this.conditions.join(" AND ")}`;
    }

    if (this.orderByClauses.length > 0) {
      query += ` ORDER BY ${this.orderByClauses.join(", ")}`;
    }

    if (this.limitCount !== undefined) {
      query += ` LIMIT ${this.limitCount}`;
    }

    return query;
  }
}

function main() {
  const query = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log("Query executed successfully!");
}

void main();