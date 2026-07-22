import winston from "winston";

const loggerInstance = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

export interface ILoggerAdapter {
  file: string;
  displayInfo(message: string): void;
  displayError(message: string): void;
  displayWarning(message: string): void;
}

export class WinstonLoggerAdapter implements ILoggerAdapter {
  public file: string = "";
  private logger: winston.Logger = loggerInstance;

  constructor(file: string) {
    this.file = file;
  }

  displayInfo(message: string): void {
    this.logger.info(`[${this.file}] ${message}`);
  }

  displayError(message: string): void {
    this.logger.error(`[${this.file}] ${message}`);
  }

  displayWarning(message: string): void {
    this.logger.warn(`[${this.file}] ${message}`);
  }
}

function main() {
  const logger: ILoggerAdapter = new WinstonLoggerAdapter("adapter.ts");
  logger.displayInfo("This is an info message");
  logger.displayError("This is an error message");
  logger.displayWarning("This is a warning message");
}

main();

export {
  loggerInstance
}